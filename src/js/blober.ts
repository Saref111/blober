
import { HexColor, generateHexColor, getRandomInt, removeRandomFromArray } from "./helpers";

export type BlobConfig = {
    color?: HexColor;
    id: string;
    path: string;
    transform: string;
    filterId: string;
    animationPaths: string[];
};

const FILTER = `<defs>
                   
                </defs>`;

                // <filter id="filter" x="-100" y="-100" width="750" height="750"
                // filterUnits="userSpaceOnUse" col4or-interpolation-filters="sRGB">
                //     <feFlood flood-opacity="0" result="BackgroundImageFix" />
                //     <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                //     <feGaussianBlur stdDeviation="65.5" result="effect1_foregroundBlur_32_5690" />
                // </filter>

const getPathString = (cfg: BlobConfig) => {

    return `<g transform="${cfg.transform}" filter="url(#${cfg.filterId})">
                <path d="${cfg.path}" fill="${cfg.color}" >
                    <animate 
                        attributeName="d" 
                        dur="10s" 
                        repeatCount="indefinite" 
                        keyTimes="0;0.33;0.67;1" 
                        values="${cfg.path};${cfg.animationPaths.join(';')};${cfg.path}" 
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
}

export const generateBlobs = (blobConfigs: BlobConfig[]) => {
    const svg = document.querySelector(".screen") as HTMLElement;
    svg.innerHTML = "";
    svg.insertAdjacentHTML('beforeend', FILTER);

    blobConfigs.forEach((config) => {
        generateBlob(config, svg);
    });
    
};
