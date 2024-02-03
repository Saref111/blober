import { BlobConfig } from "./blober";

const buildConfig = (formElement: HTMLFormElement) => {
    const formData = new FormData(formElement);
    const config: BlobConfig = {};
    
    for (const [key, value] of formData.entries()) {
        config[key as string] = value;
    }
    
    return config;
};
