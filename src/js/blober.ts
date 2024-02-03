import generator from "blobshape";
import { HexColor, generateHexColor, getRandomInt, removeRandomFromArray } from "./helpers";

export type BlobConfig = {
    color?: HexColor;
};

const SVG_SIZE = 400;
const FILTER = `<defs>
                    <filter id="filter" x="-100" y="-100" width="750" height="750"
                    filterUnits="userSpaceOnUse" col4or-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="65.5" result="effect1_foregroundBlur_32_5690" />
                    </filter>
                </defs>`;

                
const generateTransform = () => `translate(${getRandomInt(-300, 300)}, ${getRandomInt(-300, 300)})`;

const getPathString = (color: HexColor) => {
    const { path } = generator({
        size: SVG_SIZE,
        growth: 1,
    });

    return `<g transform="${generateTransform()}" filter="url(#filter)">
                <path d="${path}" fill="${color}" >
                    <animate 
                        attributeName="d" 
                        dur="10s" 
                        repeatCount="indefinite" 
                        keyTimes="0;0.33;0.67;1" 
                        values="${path};${generator({ size: SVG_SIZE, growth: 1.5 }).path};${generator({ size: SVG_SIZE, growth: 1.5 }).path};${path}" 
                    />
                </path>
            </g>`;
        };

const generateBlob = (config: BlobConfig = {}, svg: HTMLElement) => {
    if (!config.color) {
        config.color = generateHexColor();
    }

    const purpleBlobString = getPathString(config.color);

    svg.insertAdjacentHTML('afterbegin', purpleBlobString);
}

export const generateBlobs = (blobConfigs: BlobConfig[]) => {
    const svg = document.querySelector(".screen") as HTMLElement;
    svg.innerHTML = "";

    blobConfigs.forEach((config) => {
        generateBlob(config, svg);
    });
    
};
