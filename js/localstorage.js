import { dropButton,groceries, toDo, remember } from './main.js';
import { openPopUp } from './pop-up.js';

var arrayGroceries = [];
var arrayToDo = [];
var arrayRemember = [];

//----------SAVE TO LOCAL STORAGE---------
function getInputText() {
  let input_value = document.getElementById('note').value;
  if(input_value.length === 0){
    alert("Empty field not allowed");
    throw "exit";
  }
  else{
    const getClass = dropButton.innerHTML;
    
  if (getClass === "Groceries"){
    if(localStorage.getItem("groceries") === null){
      arrayGroceries.push(input_value);
      localStorage.setItem("groceries", JSON.stringify(arrayGroceries));  
    }else{
    const get = localStorage.getItem("groceries");
    localStorage.getItem(JSON.stringify(get));
    const arrayGroceries = JSON.parse(get);

    arrayGroceries.push(input_value);
    localStorage.setItem("groceries", JSON.stringify(arrayGroceries));
}
  }
  else if(getClass === "To-do"){
    if(localStorage.getItem("to-do") === null){
      arrayToDo.push(input_value);
      localStorage.setItem("to-do", JSON.stringify(arrayToDo));
    }else{
        const get = localStorage.getItem("to-do");
        localStorage.getItem(JSON.stringify(get));
        const arrayToDo = JSON.parse(get);

        arrayToDo.push(input_value);
        localStorage.setItem("to-do", JSON.stringify(arrayToDo));
}
  }else if(getClass === "Remember"){
    if(localStorage.getItem("remember") === null){
      arrayRemember.push(input_value);
      localStorage.setItem("remember", JSON.stringify(arrayRemember));
    }else{
        const get = localStorage.getItem("remember");
        localStorage.getItem(JSON.stringify(get));
        const arrayRemember = JSON.parse(get);
        arrayRemember.push(input_value);
        localStorage.setItem("remember", JSON.stringify(arrayRemember));
    }
  }
  return input_value;
  }
}
//----------------CHECK LOCAL STORAGE-----------------
function checkLocalStorageGroceries(){
      const get = localStorage.getItem("groceries");
      (JSON.stringify(get));    
      const obj = JSON.parse(get);  
      if(localStorage.getItem("groceries") === null){
      }else{
      obj.forEach ( function (item) {
        const divCard = document.createElement("div");
        divCard.setAttribute("draggable", true);
        divCard.setAttribute("class", "card");

        const divBody = document.createElement("div"); 
        divBody.setAttribute("class", "card-body");
        divBody.setAttribute("id", "card-body");

        const divButton = document.createElement("button"); 
        divButton.setAttribute("class", "show");
        divButton.setAttribute("id", "show");
        divButton.innerHTML = "Show";

        const delButton = document.createElement("span"); 
        delButton.setAttribute("class", "delButton");
        delButton.innerHTML = "X";
        groceries.addEventListener('click', openPopUp)

        const divP = document.createElement("p"); 
        divP.innerHTML = item;

        divBody.appendChild(divP)
        divBody.appendChild(divButton)
        divBody.appendChild(delButton)
        divCard.appendChild(divBody)
        groceries.appendChild(divCard)
     })
      
    }
  }
function checkLocalStorageToDo(){

    const get = localStorage.getItem("to-do");
    localStorage.getItem(JSON.stringify(get));    
    const obj = JSON.parse(get);  
    if(localStorage.getItem("to-do") === null){
    }else{
      obj.forEach ( function (item) {
      const divCard = document.createElement("div");
      divCard.setAttribute("draggable", true);
      divCard.setAttribute("class", "card");

      const divBody = document.createElement("div"); 
      divBody.setAttribute("class", "card-body");
      divBody.setAttribute("id", "card-body");

      const divButton = document.createElement("button"); 
      divButton.setAttribute("class", "show");
      divButton.innerHTML = "Show";

      const delButton = document.createElement("span"); 
      delButton.setAttribute("class", "delButton");
      delButton.innerHTML = "X";
      toDo.addEventListener('click', openPopUp)

      const divP = document.createElement("p"); 
      divP.innerHTML = item;

      divBody.appendChild(divP)
      divBody.appendChild(divButton)
      divBody.appendChild(delButton)
      divCard.appendChild(divBody)
      toDo.appendChild(divCard)
    })
    
  }
}
function checkLocalStorageRemember(){

  const get = localStorage.getItem("remember");
  localStorage.getItem(JSON.stringify(get));    
  const obj = JSON.parse(get);  
  if(localStorage.getItem("remember") === null){
  }else{

    obj.forEach ( function (item) {
    const divCard = document.createElement("div");
    divCard.setAttribute("draggable", true);
    divCard.setAttribute("class", "card");

    const divBody = document.createElement("div"); 
    divBody.setAttribute("class", "card-body");
    divBody.setAttribute("id", "card-body");

    const divButton = document.createElement("button"); 
    divButton.setAttribute("class", "show");
    divButton.innerHTML = "Show";


    const delButton = document.createElement("span"); 
    delButton.setAttribute("class", "delButton");
    delButton.innerHTML = "X";
    remember.addEventListener('click', openPopUp)


    const divP = document.createElement("p"); 
    divP.innerHTML = item;

    divBody.appendChild(divP)
    divBody.appendChild(divButton)
    divBody.appendChild(delButton)
    divCard.appendChild(divBody)
    remember.appendChild(divCard)
  })
  
}
}
export { getInputText, checkLocalStorageGroceries, checkLocalStorageToDo, checkLocalStorageRemember };