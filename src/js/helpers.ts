import { TransformationType } from "./blober";

export const generateHexColor = (): string => {
    let color = "#";
    for (let i = 0; i < 3; i++) {
        let component = Math.floor(Math.random() * 256).toString(16);
        color += component.padStart(2, '0');
    }
    return color;
}

export const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export const removeRandomFromArray = <T>(arr: T[]): T => {
    const index = getRandomInt(0, arr.length - 1);
    return arr.splice(index, 1)[0];
};

export const getUniqueId = () => Date.now().toString(36) + Math.random().toString(36).slice(2);

export const generateTransformType = (): TransformationType => "translate";
