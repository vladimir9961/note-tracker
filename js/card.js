import { dropButton, toDo } from './main.js';
import { openPopUp } from './pop-up.js';

function creatingCard() {
    const divCard = document.createElement("div");
    divCard.setAttribute("class", "card");
    divCard.setAttribute("draggable", true);
    
    if(dropButton.innerHTML === 'Groceries'){
      groceries.appendChild(divCard);
    }
    else if (dropButton.innerHTML === 'To-do'){
      toDo.appendChild(divCard);
     
    }else if(dropButton.innerHTML === 'Remember'){
      remember.appendChild(divCard);
      
    }
    groceries.addEventListener("click", openPopUp);
    toDo.addEventListener("click", openPopUp);
    remember.addEventListener("click", openPopUp);
     return divCard;
    
    
}

function createBodyCard() {
    const divBody = document.createElement("div"); 
    divBody.setAttribute("class", "card-body");
    divBody.setAttribute("id", "card-body");
    
    creatingCard().appendChild(divBody);
   
    return divBody;
    
}

function createBtnShow() {
    const divButton = document.createElement("button"); 
    divButton.setAttribute("class", "show");
    divButton.setAttribute("id", "show");
    divButton.innerHTML = "Show";
    return divButton;
}
function createButtonDeleteCard(){
    const delButton = document.createElement("span"); 
    delButton.setAttribute("class", "delButton");
    delButton.innerHTML = "X";
    return delButton;
}
export { creatingCard, createBodyCard, createBtnShow, createButtonDeleteCard };