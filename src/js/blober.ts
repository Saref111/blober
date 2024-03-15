import generator from 'blobshape';
import { HexColor, generateHexColor } from './helpers';

export type BlobConfig = {
  color: HexColor;
  id: string;
  transform: string;
  filterId: string;
  seed: number;
};

const SVG_SIZE = 650;

const FILTER = `<defs>
                   
                </defs>`;

// <filter id="filter" x="-100" y="-100" width="750" height="750"
// filterUnits="userSpaceOnUse" col4or-interpolation-filters="sRGB">
//     <feFlood flood-opacity="0" result="BackgroundImageFix" />
//     <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
//     <feGaussianBlur stdDeviation="65.5" result="effect1_foregroundBlur_32_5690" />
// </filter>

const DEFAULT_SCREEN = ` <circle
                            cx="250"
                            cy="250"
                            r="200"
                            fill="none"
                            stroke="black"
                            stroke-width="2"
                        />
                        <text
                            x="50%"
                            y="50%"
                            text-anchor="middle"
                            font-size="30"
                            fill="black"
                        >
                            Hello, Blob!
                        </text>`;

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
