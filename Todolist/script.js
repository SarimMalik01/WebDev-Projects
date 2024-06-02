const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");
const filterOption=document.querySelector(".filter-todo");

document.addEventListener("DOMContentLoaded",getLocalTodos);
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deletecheck);
filterOption.addEventListener("click",filterTodo);


function addTodo(event)
{
   event.preventDefault();
   const TodoDiv=document.createElement("div");
   TodoDiv.classList.add("todo");
   const newTodo=document.createElement("li");
   newTodo.innerText=todoInput.value;
   newTodo.classList.add("todo-item");
   TodoDiv.appendChild(newTodo);
   saveLocalTodos(todoInput.value);

   const completedButton=document.createElement("button");
   completedButton.innerHTML='<i class="fas fa-check-circle"></li>';
   completedButton.classList.add("complete-btn");
   TodoDiv.appendChild(completedButton);


   const trashButton=document.createElement("button");
   trashButton.innerHTML='<i class="fas fa-trash"></li>';
   trashButton.classList.add("trash-btn");
   TodoDiv.appendChild(trashButton);

   todoList.appendChild(TodoDiv);
   todoInput.value="";
}

function deletecheck(e)
{
    const item=e.target;

    if(item.classList[0]=="complete-btn")
    {
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }

    if(item.classList[0]=="trash-btn")
    {
        const todo=item.parentElement;
        todo.classList.add("slide");
        removeLocalTodos(todo);

        document.addEventListener("transitionend",()=>
        {
            todo.remove();
        })
    }
}

function filterTodo(e)
{
    const todos=todoList.childNodes;
    todos.forEach((todo)=>
    {
      switch(e.target.value)
      {
        case "All":
            todo.style.display="flex";
            break;

        case "Completed":
            if(todo.classList.contains("completed"))
            {
                todo.style.display="flex";
            }   
            else{
                todo.style.display="none";
            } 
            break;

        case "Incomplete":
            if(!todo.classList.contains("completed"))
            {
                todo.style.display="flex";
            }   
            else{
                todo.style.display="none";
            } 
            break;
      }
    })
}
function saveLocalTodos(todo)
{
    let todos;
    if(localStorage.getItem("todos")===null)
    {
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos)); // this line of code again turns the local storage into a text format data
}

function getLocalTodos()
{
    let todos;
    if(localStorage.getItem("todos")===null)
    {
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }

    todos.forEach((todo)=>
    {
       
   const TodoDiv=document.createElement("div");
   TodoDiv.classList.add("todo");
   const newTodo=document.createElement("li");
   newTodo.innerText=todo;
   newTodo.classList.add("todo-item");
   TodoDiv.appendChild(newTodo);
   saveLocalTodos(todoInput.value);

   const completedButton=document.createElement("button");
   completedButton.innerHTML='<i class="fas fa-check-circle"></li>';
   completedButton.classList.add("complete-btn");
   TodoDiv.appendChild(completedButton);


   const trashButton=document.createElement("button");
   trashButton.innerHTML='<i class="fas fa-trash"></li>';
   trashButton.classList.add("trash-btn");
   TodoDiv.appendChild(trashButton);

   todoList.appendChild(TodoDiv);
    })
}

function removeLocalTodos(todo)
{
    let todos;
    if(localStorage.getItem("todos")===null)
    {
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }

    const todoindex=todo.children[0].innerText;
    todos.splice(todos.indexOf(todoindex),1);
    localStorage.setItem("todos",JSON.stringify(todos));
}

