import { generateBlobs } from "./js/blober.js";
import { formHandler } from "./js/formHandler.js";


const form = document.querySelector(".controls__form") as HTMLFormElement;
formHandler(form, generateBlobs);
