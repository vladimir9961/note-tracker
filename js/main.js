import { getInputText, checkLocalStorageGroceries, checkLocalStorageToDo, checkLocalStorageRemember } from './localstorage.js';
import { createBodyCard, createBtnShow, createButtonDeleteCard } from './card.js';
import { dropContent } from './dropdown.js';
import { edit } from './buttons/edit-btn.js';
import { draggGroceries, draggTodo, draggRemember } from './draggable.js'
import { deleteAll } from './buttons/delete-all.js';

// ------------GLOBAL VAR-----------
const dropButton = document.getElementById('dropBtn');
const inputField = document.getElementById('note');
const groceries = document.getElementById('groceries');
const toDo = document.getElementById('to-do');
const remember = document.getElementById('remember');
const btnShow = document.getElementById('show');
const popContentArea = document.querySelector("#popup-content");
const getText = document.querySelector(".popup-p");
const cardsText = document.querySelector("#cardsText");
const dropCont = document.querySelector("#dropCont");
const talk = document.querySelector("#speech");



//-------------FUNTION CALLS----------------
document.getElementById('btn').addEventListener('click', noteTaker);
document.getElementById('btn-delete').addEventListener('click', deleteAll);
document.getElementById('edit').addEventListener('click', edit);
document.getElementById('dropBtn').addEventListener('click', dropContent);

function noteTaker(){
  appendValue();
  dynamicIdAppend();
  draggGroceries();
  draggTodo();
  draggRemember();
}
//-------------ONLOAD CALLS-------
checkLocalStorageGroceries();
checkLocalStorageToDo();
checkLocalStorageRemember();
draggGroceries();
draggTodo();
draggRemember();

window.onload = function(){
  dynamicIdAppend();
}

//----------SET DYNAMIC ID FOR CARD---------
function dynamicIdAppend(){
  const elements = document.querySelectorAll(".card");
for (let i=0; i<elements.length; i++) {
    elements[i].setAttribute("id", "card " +i);
  }
}
function appendValue() {
    const divP = document.createElement("p"); 
    divP.innerHTML = getInputText();
    createBodyCard().innerHTML+= divP.outerHTML + createBtnShow().outerHTML + createButtonDeleteCard().outerHTML;
}
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {

}
recognition.onresult = function (event) {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  inputField.value = transcript
  const ring = talk.children[1];
  ring.classList.remove("pulse-ring")
  readOut(transcript)
}

talk.addEventListener('click', () => {
  recognition.start();
    // const divAnim = document.createElement("div");
    // divAnim.setAttribute("class", "pulse-ring");
    // talk.appendChild(divAnim)
    const ring = talk.children[1];
    ring.classList.add('pulse-ring')
    
})


function readOut(message){
  const speech = new SpeechSynthesisUtterance();
  speech.text = message;
  speech.volume = 1;
  speech.rate = 0.5;
  speech.pich = 5;
  window.speechSynthesis.speak(speech);
}
export {dropButton, groceries, toDo, remember, btnShow, popContentArea, getText, cardsText, dropCont}
