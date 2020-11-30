import { getText } from '../main.js';
import { textArea } from '../pop-up.js';
function edit(){
    const saveBtn = document.querySelector("#save");
    const editBtn = document.querySelector("#edit");
    saveBtn.style.display = "inline-block";
    getText.style.display = "none";
    editBtn.removeEventListener("click", edit);
    textArea();
}

export { edit };  