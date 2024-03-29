import generator from 'blobshape';
import { generateHexColor } from './helpers';
import { SVG_SIZE, DEFAULT_SCREEN, FILTER } from './constants';
import { blobStorage } from './localStorageController';

export type TransformationType =
  | 'translate'
  | 'rotate'
  | 'scale'
  | 'skewX'
  | 'skewY';

type Transformation = {
  type: TransformationType;
  args: number[];
};

type AnimationParams = {
  play: boolean;
  speed: number;
};

export type BlobConfig = {
  color: string;
  id: string;
  transform: Transformation;
  filterId: string;
  seed: number;
  animation: AnimationParams;
};

const getPathString = (cfg: BlobConfig) => {
  const path = generator({
    size: SVG_SIZE,
    growth: 1,
    seed: cfg.seed.toString(),
  }).path;
  const animationPaths = [
    generator({
      size: SVG_SIZE,
      growth: 1.5,
      seed: (cfg.seed + 1).toString(),
    }).path,
    generator({
      size: SVG_SIZE,
      growth: 2,
      seed: (cfg.seed + 2).toString(),
    }).path,
  ];
  return `<g style="--color: ${cfg.color};" transform="${
    cfg.transform.type
  }(${cfg.transform.args.join(', ')})" filter="url(#${cfg.filterId})" id="${
    cfg.id
  }">
    <path d="${path}" fill="${cfg.color}" >
        ${
          cfg.animation.play &&
          `<animate 
              attributeName="d" 
              dur="${cfg.animation.speed}s" 
              repeatCount="indefinite"
              keyTimes="0;0.33;0.67;1" 
              values="${path};${animationPaths.join(';')};${path}" 
          />`
        }
    </path>
  </g>`;
};

const handleSVGGroup = (blobConfig: BlobConfig, blobSVGString: string) => {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.innerHTML = blobSVGString;
  const group = svg.querySelector('g') as SVGElement;

  let offsetX = blobConfig.transform.args[0];
  let offsetY = blobConfig.transform.args[1];
  let currentX = 0;
  let currentY = 0;

  const move = (event: MouseEvent) => {
    const x = event.clientX - offsetX;
    const y = event.clientY - offsetY;
    currentX = x;
    currentY = y;
    group.setAttribute('transform', `translate(${x} ${y})`);
  };

  group.addEventListener('mousedown', (event) => {
    event.stopPropagation();
    offsetX = event.clientX - offsetX;
    offsetY = event.clientY - offsetY;
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', move);

      blobStorage.updateEntity(blobConfig, {
        ...blobConfig,
        transform: {
          type: 'translate',
          args: [currentX, currentY],
        },
      });
    });
  });

  group.addEventListener('mouseover', () => {
    const fieldset = document.getElementById(`blob_${blobConfig.id}`);
    if (!fieldset) return;
    fieldset.classList.add('blob-fieldset--hover');
  });
  group.addEventListener('mouseout', () => {
    const fieldset = document.getElementById(`blob_${blobConfig.id}`);
    if (!fieldset) return;
    fieldset.classList.remove('blob-fieldset--hover');
  });

  return group;
};

const generateBlob = (config: BlobConfig, svg: HTMLElement) => {
  if (!config.color) {
    config.color = generateHexColor();
  }

  const blob = handleSVGGroup(config, getPathString(config));

  svg.insertAdjacentElement('afterbegin', blob);
};

export const generateBlobs = () => {
  const blobConfigs = blobStorage.getEntities();
  const bgColor = blobStorage.getBGColor();
  const screen = document.querySelector('#main-screen') as HTMLElement;
  const bgScreen = document.querySelector('#bg-color-screen') as HTMLElement;
  
  bgScreen.setAttribute('fill', bgColor);
  if (!blobConfigs.length) {
    screen.innerHTML = DEFAULT_SCREEN;
    return;
  }
  screen.innerHTML = '';
  screen.insertAdjacentHTML('beforeend', FILTER);

  blobConfigs.forEach((config) => {
    generateBlob(config, screen);
  });
};
