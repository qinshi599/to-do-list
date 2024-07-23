document.querySelector('#push').onclick =function(){
    // adding an empty validation
    if(document.querySelector('#newtask input').
    value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML 
        += `
          <div class="task">
          <span id="taskname">
            ${document.querySelector
            ('#newtask input').value}
          </span>
          <button class="delete">
                <i class="fa fa-trash-alt"></i>
          </button>
          </div>
        `;
        // delete a task 
        let current_tasks = document.
        querySelectorAll(".delete");
        for(let i=0; i<current_tasks.length;i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        //crossing off a completed task 
        let tasks = document.
        querySelectorAll(".task");
        for(let i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }
        //clearing each field after entry 
        document.querySelector("#newtask input").value = "";
    }
}