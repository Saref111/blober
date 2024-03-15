import { generateBlobs } from "./js/blober.js";
import { handleExportSVG } from "./js/exportSVG.js";
import { formHandler } from "./js/formHandler.js";
import { blobStorage } from "./js/localStorageController.js";

const form = document.querySelector(".controls__form") as HTMLFormElement;
handleExportSVG();

formHandler(form);

document.addEventListener("update", () => {
    generateBlobs(blobStorage.getEntities());
});
generateBlobs(blobStorage.getEntities());
