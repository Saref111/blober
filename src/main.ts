import { generateBlobs } from "./js/blober.js";
import { handleExportSVG } from "./js/exportSVG.js";
import { formHandler } from "./js/formHandler.js";

const form = document.querySelector(".controls__form") as HTMLFormElement;
handleExportSVG();

formHandler(form);
