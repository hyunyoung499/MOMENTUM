const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos =  toDos.filter(toDo => toDo.id !== parseInt(li.id)); 
  saveToDos();
}

function paintToDo(newTodoObj){
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span"); 
  span.innerText = newTodoObj.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  
  button.addEventListener("click",deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}


function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value =  "";

  const newTodoObj = {
      text : newTodo,
      id : Date.now(), 
  };
  if(toDos.length < 10){
      toDos.push(newTodoObj);
      saveToDos();
      paintToDo(newTodoObj);
  }else{
      alert("You can register up to 10");
  }
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null) {
  const parsedToDos = JSON.parse(saveToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}