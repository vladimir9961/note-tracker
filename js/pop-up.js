import { popContentArea, dropButton, getText } from './main.js';
import { edit } from './buttons/edit-btn.js';

function textArea(){
  const textArea = document.createElement("textarea");
  popContentArea.prepend(textArea);

  const paragraphText = document.querySelector(".popup-p").innerHTML;
  textArea.innerHTML = paragraphText;
}

function openPopUp(e){
    if(e.target && e.target.nodeName == "BUTTON"){
     
      const getCard = (e.path[1]);
      const getParagraphInCard = getCard.childNodes[0].innerHTML;
      
      const popUp = document.querySelector(".popup").style.display = "block";
      const popUpPar = document.querySelector(".popup-p");
      
      popUpPar.innerHTML = getParagraphInCard;


      const id = (e.path[1]).children[0];
      
      
      document.getElementById('save').addEventListener('click', save => {
        document.getElementById('edit').addEventListener('click', edit);
        const paragraphText = document.querySelector(".popup-p");
       
        const textAreaRem = document.querySelector("textarea");
        
        const textArea = document.querySelector("textarea").value;
        location.reload();
        paragraphText.innerHTML = textArea;
        
       
        const saveBtn = document.querySelector("#save");
        textAreaRem.remove()
        
        
        
        saveBtn.style.display = "none";
        getText.style.display = "block";
        
        
        const getClass = dropButton.innerHTML;
        if(getClass === "Groceries"){
             
             
          const get = localStorage.getItem("groceries");   
          localStorage.getItem(JSON.stringify(get));
          const obj = JSON.parse(get);
           

          var index = obj.indexOf(getParagraphInCard) 
          obj.splice(index, 1)

          obj.push(popUpPar.innerHTML)
          
          
          localStorage.setItem('groceries', obj);
          localStorage.setItem("groceries", JSON.stringify(obj));
          
        }else if(getClass === "To-do"){          
             
          const get = localStorage.getItem("To-do");   
          localStorage.getItem(JSON.stringify(get));
          const obj = JSON.parse(get);
           

          var index = obj.indexOf(getParagraphInCard) 
          obj.splice(index, 1)

          obj.push(popUpPar.innerHTML)
          
          
          localStorage.setItem('To-do', obj);
          localStorage.setItem("To-do", JSON.stringify(obj));
          
        }else if(getClass === "Remember"){          
             
          const get = localStorage.getItem("remember");   
          localStorage.getItem(JSON.stringify(get));
          const obj = JSON.parse(get);
           

          var index = obj.indexOf(getParagraphInCard) 
          obj.splice(index, 1)

          obj.push(popUpPar.innerHTML)
          
          
          localStorage.setItem('remember', obj);
          localStorage.setItem("remember", JSON.stringify(obj));
          
        }

      });

    }


  else if(e.target && e.target.nodeName == "SPAN"){
      e.target.parentElement.parentNode.remove();
      const key = e.target.previousSibling.previousSibling.innerHTML;
      

      if(dropButton.innerHTML === "Groceries"){
      const get = localStorage.getItem("Groceries");
      localStorage.getItem(JSON.stringify(get));    
      const obj = JSON.parse(get); 
      console.log(key)
      var n = obj.indexOf(key) 
      obj.splice(n, 1)
      localStorage.setItem("groceries", JSON.stringify(obj));
      }
      else if(dropButton.innerHTML === "To-do"){
        const get = localStorage.getItem("to-do");
        localStorage.getItem(JSON.stringify(get));    
        const obj = JSON.parse(get); 
      
        var n = obj.indexOf(key) 
        console.log(key)
        obj.splice(n, 1)
        localStorage.setItem("to-do", JSON.stringify(obj));
      }
      else if(dropButton.innerHTML === "Remember"){
        const get = localStorage.getItem("remember");
        localStorage.getItem(JSON.stringify(get));    
        const obj = JSON.parse(get); 
      
        var n = obj.indexOf(key) 
        console.log(key)
        obj.splice(n, 1)
        localStorage.setItem("remember", JSON.stringify(obj));
      }
    }
    
}


  
  
  
  const popUp = document.querySelector(".popup")
  window.onclick = function(event) {
    if (event.target == popUp) {
      popUp.style.display = "none";
    }
   
  }
  
  function save(){
    
    
}
  
export { openPopUp, textArea, save };  