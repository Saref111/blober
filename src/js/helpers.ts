export type HexColor = `#${string}`;

export const generateHexColor = (): HexColor => {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}

export const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export const removeRandomFromArray = <T>(arr: T[]): T => {
    const index = getRandomInt(0, arr.length - 1);
    return arr.splice(index, 1)[0];
};

export const getUniqueId = () => Date.now().toString(36) + Math.random().toString(36).slice(2);

export const generateTransform = () => `translate(${getRandomInt(-300, 300)}, ${getRandomInt(-300, 300)})`;
