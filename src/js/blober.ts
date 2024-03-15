import generator from 'blobshape';
import { HexColor, generateHexColor } from './helpers';
import { SVG_SIZE, DEFAULT_SCREEN, FILTER } from './constants';

export type BlobConfig = {
  color: HexColor;
  id: string;
  transform: string;
  filterId: string;
  seed: number;
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
  return `<g transform="${cfg.transform}" filter="url(#${cfg.filterId})">
                <path d="${path}" fill="${cfg.color}" >
                    <animate 
                        attributeName="d" 
                        dur="10s" 
                        repeatCount="indefinite" 
                        keyTimes="0;0.33;0.67;1" 
                        values="${path};${animationPaths.join(';')};${path}" 
                    />
                </path>
            </g>`;
};

const generateBlob = (config: BlobConfig, svg: HTMLElement) => {
  if (!config.color) {
    config.color = generateHexColor();
  }

  const blob = getPathString(config);

  svg.insertAdjacentHTML('afterbegin', blob);
};

export const generateBlobs = (blobConfigs: BlobConfig[]) => {
  const svg = document.querySelector('.screen') as HTMLElement;
  if (!blobConfigs.length) {
    svg.innerHTML = DEFAULT_SCREEN;
    return;
  }
  svg.innerHTML = '';
  svg.insertAdjacentHTML('beforeend', FILTER);

  blobConfigs.forEach((config) => {
    generateBlob(config, svg);
  });
};
