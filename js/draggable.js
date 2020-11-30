function draggGroceries (){
  const container = document.querySelectorAll('.groceries');
  const draggables = document.querySelectorAll('.card');
  
  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging')
  
    })
    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging')
        
    })
  })
  
  container.forEach(container => {
    container.addEventListener('dragover', e => {
      e.preventDefault();
      const afterElement = getDragAfterElement(container, e.clientY)
      const draggable = document.querySelector('.dragging')
      
      if (afterElement == null){
        const AllCards = container.getElementsByClassName("card");
        var arrayGroceries = [];
        for (var i = 0; i < AllCards.length; i++) {
          let allDivs = AllCards[i].childNodes[0].childNodes[0].innerHTML;
          arrayGroceries.push(allDivs)
          localStorage.setItem("groceries", JSON.stringify(arrayGroceries));


        }
          container.appendChild(draggable) 
      }else {
        container.insertBefore(draggable, afterElement)
        const AllCards = container.getElementsByClassName("card");
        var arrayGroceries = [];
        for (var i = 0; i < AllCards.length; i++) {
          let allDivs = AllCards[i].childNodes[0].childNodes[0].innerHTML;
          arrayGroceries.push(allDivs)
          localStorage.setItem("groceries", JSON.stringify(arrayGroceries));


        }
  
      }
    })
  })
  
  function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.card:not(.dragging)')]
    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect()
      
      const offset = y - box.top - box.height / 2
      if (offset < 0 && offset > closest.offset){
        return { offset: offset, element: child }
      }else {
        return closest
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element
  }
  }

  function draggTodo (){
    const container = document.querySelectorAll('.to-do');
  
    const draggables = document.querySelectorAll('.card');
  
    draggables.forEach(draggable => {
      draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    
      })
      draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
          
      })
    })
    
    container.forEach(container => {
      container.addEventListener('dragover', e => {
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientY)
        const draggable = document.querySelector('.dragging')
        
        if (afterElement == null){
          const AllCards = container.getElementsByClassName("card");
          var arrayToDo = [];
        for (var i = 0; i < AllCards.length; i++) {
          let allDivs = AllCards[i].childNodes[0].childNodes[0].innerHTML;
          arrayToDo.push(allDivs)
          localStorage.setItem("to-do", JSON.stringify(arrayToDo));
        }         
          container.appendChild(draggable)   
        }else {
          const AllCards = container.getElementsByClassName("card");
          var arrayToDo = [];
          for (var i = 0; i < AllCards.length; i++) {
          let allDivs = AllCards[i].childNodes[0].childNodes[0].innerHTML;
          arrayToDo.push(allDivs)
          localStorage.setItem("to-do", JSON.stringify(arrayToDo));


        }
          container.insertBefore(draggable, afterElement)
    
        }
      })
    })
    
    function getDragAfterElement(container, y) {
      const draggableElements = [...container.querySelectorAll('.card:not(.dragging)')]
      return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        
        const offset = y - box.top - box.height / 2
        if (offset < 0 && offset > closest.offset){
          return { offset: offset, element: child }
        }else {
          return closest
        }
      }, { offset: Number.NEGATIVE_INFINITY }).element
    }
    }
    function draggRemember (){
      const container = document.querySelectorAll('.remember');
    
      const draggables = document.querySelectorAll('.card');
    
      draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
          draggable.classList.add('dragging')
      
        })
        draggable.addEventListener('dragend', () => {
          draggable.classList.remove('dragging')
            
        })
      })
      
      container.forEach(container => {
        container.addEventListener('dragover', e => {
          e.preventDefault();
          const afterElement = getDragAfterElement(container, e.clientY)
          const draggable = document.querySelector('.dragging')
          
          if (afterElement == null){
            const AllCards = container.getElementsByClassName("card");
            var arrayRemember = [];
            for (var i = 0; i < AllCards.length; i++) {
            let allDivs = AllCards[i].childNodes[0].childNodes[0].innerHTML;
            arrayRemember.push(allDivs)
            localStorage.setItem("remember", JSON.stringify(arrayRemember));
        }
            container.appendChild(draggable)
          }else {
            const AllCards = container.getElementsByClassName("card");
            var arrayRemember = [];
            for (var i = 0; i < AllCards.length; i++) {
            let allDivs = AllCards[i].childNodes[0].childNodes[0].innerHTML;
            arrayRemember.push(allDivs)
            localStorage.setItem("remember", JSON.stringify(arrayRemember));


        }   
            container.insertBefore(draggable, afterElement)
      
          }
        })
      })
      
      function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.card:not(.dragging)')]
        return draggableElements.reduce((closest, child) => {
          const box = child.getBoundingClientRect()
          
          const offset = y - box.top - box.height / 2
          if (offset < 0 && offset > closest.offset){
            return { offset: offset, element: child }
          }else {
            return closest
          }
        }, { offset: Number.NEGATIVE_INFINITY }).element
      }
      }
export { draggGroceries, draggTodo, draggRemember }