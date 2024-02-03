import { BlobConfig } from "./blober";

export const buildConfig = (formElement: HTMLFormElement) => {
    const formData = new FormData(formElement);
    const configsArray: any = [];
    
    for (const [rawKey, value] of formData.entries()) {
        const [key, index] = rawKey.split("_");
        if (!configsArray[index]) {
            configsArray[index] = {};
        } 
        configsArray[index][key as string] = value;
    }
    
    return configsArray as BlobConfig[];
};
