import { BlobConfig } from "./blober";
import { buildConfig } from "./configBuilder";
import { generateHexColor } from "./helpers";

const getFieldset = (id: number) => {
    return `
        <fieldset class="blob-fieldset">
            <label>
                <span>Color:</span>
                <input value="${generateHexColor()}" type="color" name="color_${id}" id="color_${id}" />
            </label>
        </fieldset>`;
};

export const formHandler = (form: HTMLFormElement, generateBlobs: (c: BlobConfig[]) => void) => {
    const addBlobButton = form.querySelector("#add-blob") as HTMLButtonElement;
    const clearButton = form.querySelector("#clear") as HTMLButtonElement;

    addBlobButton.addEventListener("click", () => {
        const newFieldsetId = form.querySelectorAll(".blob-fieldset").length;
        form.insertAdjacentHTML("beforeend", getFieldset(newFieldsetId));
    });

    form.addEventListener("reset", (e) => {
        e.preventDefault();
        form.querySelectorAll(".blob-fieldset").forEach((el) => el.remove());
        form.insertAdjacentHTML("beforeend", getFieldset(0));
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const configsArray = buildConfig(form);
        generateBlobs(configsArray);
    });

    form.insertAdjacentHTML("beforeend", getFieldset(0));

}
