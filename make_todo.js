const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // toDoForm 안에서 input을 찾는 것
// const toDoInput = document.querySelector("#todo-form input"); // 윗줄이랑 같은 내용. 단, document 전체에서 찾는 것. 
const toDoList = document.getElementById("todo-list");

function delelteToDo(event) {
/*     console.log(event.target);  // 어떤 버튼이 클릭되었는지 알려줌.
    console.dir(event.target);  // button안의 정보를 볼 수 있음. 
    console.dir(event.target.parentElement);    // 클릭된 button의 parentElement를 볼 수 있음.
    console.dir(event.target.parentElement.innerText);  // 클릭된 button의 parentElement의 text를 볼 수 있음.
   // target은 button이고, button의 parent는 li라서 li 내의 innerText를 다 가져오면 todo-list내용+button 내용이 되는 것.
*/  const li = event.target.parentElement; // 아예 부모element를 삭제하면 list의 내용과 button 모두 삭제됨.
    li.remove()
}

const TODOS_KEY = "todos"

const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span"); // html에 li와 span 모두 만들어졌지만, span이 li 안에 있지는 않음.
    span.innerText = newTodo; // span의 text로 newTodo를 입력.
    const button = document.createElement("button");
    button.innerText ="❌";
    button.addEventListener("click", delelteToDo);
    li.appendChild(span); // appendChild()로 span을 li의 자식으로 추가해줌.
    li.appendChild(button); // appendChild()로 button을 li의 자식으로 추가해줌.
    toDoList.appendChild(li);   // li를 todo-list(ul)의 자식으로 추가
}   // appendChild는 항상 맨 마지막에 넣기


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);    // toDos라는 array에 newTodo를 추가
    paintTodo(newTodo); // 여기서 newTodo는 input의 입력값을 지우기 전 저장한 값.
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/* function sayHello(item) {
    console.log("this is the turn of", item); // JS는 지금 처리되고 있는 item을 제공해줌.
}   // 함수의 첫번째 인자가 event를 제공해 주듯이 item에 대한 정보를 첫번째 인자로 제공해줌.
 */
const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if(savedToDos !== null){
    const paresdToDos = JSON.parse(savedToDos);
   /*  paresdToDos.forEach(sayHello); // 각각의 array 요소들에 sayHello라는 함수를 적용. */
    // 주석의 기능을 단축키처럼 합친 게
    paresdToDos.forEach((item) => console.log("this is turn of", item));
}
