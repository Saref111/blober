import generator from "blobshape";
import { generateHexColor } from "./helpers";

const SVG_SIZE = 400;
const FILTER = `<defs>
                    <filter id="filter" x="-100" y="-100" width="750" height="750"
                    filterUnits="userSpaceOnUse" col4or-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="65.5" result="effect1_foregroundBlur_32_5690" />
                    </filter>
                </defs>`;

                
const possibleTransforms = [
    "translate(75, 75)", 
    "translate(0, -75)",
    "translate(-75, 0)",
];
                
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const removeRandomFromArray = (transforms) => {
    const index = getRandomInt(0, transforms.length - 1);
    const transform = transforms[index];
    transforms.splice(index, 1);
    return transform;
};

const getPathString = (color) => {
    const { path } = generator({
        size: SVG_SIZE,
        growth: 1,
    });

    return `<g transform="${removeRandomFromArray(possibleTransforms)}" filter="url(#filter)">
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

const generateBlob = (config = {}, svg) => {
    if (!config.color) {
        config.color = generateHexColor();
    }

    const purpleBlobString = getPathString(config.color);

    svg.insertAdjacentHTML('afterbegin', purpleBlobString);
}

export const generateBlobs = (blobConfigs) => {
    const svg = document.querySelector(".screen");
    svg.innerHTML = "";
    svg.insertAdjacentHTML('beforeend', FILTER);

    blobConfigs.forEach((config) => {
        generateBlob(config, svg);
    });
    
};
