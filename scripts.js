

function taskAdd(){
    let inputbox = document.getElementById("input-box");
    let taskList = document.getElementById("task-list");

    let check = inputbox.value;
    if (check.trim()===''){

    }

    else{
        let task = document.createElement("div");
        task.classList.add("task");
        task.style.marginTop = '10px';

        task.innerHTML = `
            <button class="check" onclick="taskToggle(this)"></button>
            <input type="text" id="taskinput" class="taskinput" value='${inputbox.value}'>
            <button class="delete" onclick="taskDelete(this)">X</button>
        `;

        taskList.appendChild(task);
        inputbox.value = "";
    }
}

function taskToggle(button) {
    if (button.style.backgroundImage === 'url("checked.png")') {
      // If the button is already checked, uncheck it
      button.style.backgroundImage = 'url("unchecked.png")';
    } else {
      // If the button is unchecked, check it
      button.style.backgroundImage = 'url("checked.png")';
    }

    const taskinput = button.nextElementSibling; 
    // Get the next sibling, which is the <input element
    if(taskinput.style.textDecorationLine === 'line-through'){
        taskinput.style.textDecorationLine = '';
    }
    else{
        taskinput.style.textDecorationLine = 'line-through';
    }

  }

function taskDelete(button){
    button.parentElement.remove();
}

