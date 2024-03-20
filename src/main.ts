import { generateBlobs } from "./js/blober.js";
import { handleExportSVG } from "./js/exportSVG.js";
import { formHandler } from "./js/controls/formHandler.js";
import { handleBGColorChange } from "./js/controls/backgroundStyle.js";

const form = document.querySelector(".controls__form") as HTMLFormElement;
handleExportSVG();

formHandler(form);

document.addEventListener("update", () => {
    generateBlobs();
});
generateBlobs();
handleBGColorChange();
