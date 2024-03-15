export const SVG_SIZE = 650;

export const FILTER = `<defs>
                    <filter id="filter" x="-100" y="-100" width="1750" height="1750"
                        filterUnits="userSpaceOnUse" col4or-interpolation-filters="sRGB">
                        <feGaussianBlur stdDeviation="65.5" result="effect1_foregroundBlur_32_5690" />
                    </filter>                   
                </defs>`;



export const DEFAULT_SCREEN = ` <circle
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
