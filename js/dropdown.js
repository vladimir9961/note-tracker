import { dropButton, toDo } from './main.js';
//--------------DROPBUTTON FUNTIONS---------
function dropContent(){
    event.preventDefault();
    dropCont.classList.toggle("showDrop");
    dropCont.addEventListener('click', links);
    
  }
  
  function links(e){
    if(e.target && e.target.nodeName == "A"){
      const childLink = (e.target).innerHTML;
      dropButton.innerHTML = childLink;
      dropCont.classList.toggle("showDrop");
  
      if(childLink === 'Groceries'){
        groceries.classList.add("hide");
        toDo.classList.remove("hide")
        remember.classList.remove("hide")
      }  
      else if(childLink === 'To-do'){
        toDo.classList.add("hide");
        groceries.classList.remove("hide")
        remember.classList.remove("hide")
      }
      else if(childLink === 'Remember'){
        remember.classList.add("hide");
        groceries.classList.remove("hide")
        toDo.classList.remove("hide")
      }
    }
  }
  export { dropContent, links };  