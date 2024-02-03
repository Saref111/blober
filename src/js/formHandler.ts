import { BlobConfig } from "./blober";
import { buildConfig } from "./configBuilder";

export const formHandler = (form: HTMLFormElement, generateBlobs: (c: BlobConfig[]) => void) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const configsArray = buildConfig(form);
        generateBlobs(configsArray);
    });
}
