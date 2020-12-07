import { dropButton } from '../main.js';

function deleteAll(){
    const groceriesDiv = document.querySelector(".groceries");
    const toDoDiv = document.querySelector(".to-do");
    const rememberDiv = document.querySelector(".remember");
    if(dropButton.innerHTML === "Groceries")
    {
      groceriesDiv.innerHTML = "";
      localStorage.removeItem('groceries');
    }
    else if(dropButton.innerHTML === "To-do")
    {
      toDoDiv.innerHTML = "";
      localStorage.removeItem('to-do');
    }
    else if(dropButton.innerHTML === "Remember")
    {
      rememberDiv.innerHTML = "";
      localStorage.removeItem('remember');
    }
  }
  export { deleteAll }