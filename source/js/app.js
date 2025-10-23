let inputField=document.querySelector("#input-field");
let btnSave=document.querySelector("#btn-save");
let btnDelete=document.querySelector("#btn-delete");
let tbodyTodo=document.querySelector("#tbodyTodo");
let colorBox=document.querySelectorAll(".color-box");
let DayTodo=document.querySelector("#DayTodo");
let TimeTodo=document.querySelector("#TimeTodo");
let TagTodo=document.querySelector("#TagTodo");
let todoStatusBtn=document.querySelector(".todo-status");
let tableRow=document.querySelector(".table-row");
let TagTodoError=document.querySelector("#TagTodoError");
let DayTodoError=document.querySelector("#DayTodoError");
let TimeTodoError=document.querySelector("#TimeTodoError");
let countTodo=document.querySelector(".countTodo");
let count=0
//Colors
colorBox.forEach((value,index)=>{
    colorBox[index].addEventListener('click',(event)=>{
       let mainColor=event.target.style.backgroundImage
       inputField.style.backgroundImage=mainColor
    })
})
//Add HTML
btnSave.addEventListener('click',()=>{
  if(inputField.value ){
    tbodyTodo.innerHTML+=`
    <tr class="table-row">
        <td class="text-light">1</td>
        <td class="TaskName">
          <button class="btn btn-sm" style="background-image:${inputField.style.backgroundImage}" >
            ${inputField.value}
          </button>
        </td>
        <td class="text-light">${DayTodo.value}</td>
        <td class="todo-Time text-light">${TimeTodo.value}</td>
        <td class="todo-Tag" >
          <button class="btn btn-primary btn-sm ">${TagTodo.value}</button>
        </td>
        <td class="todo-status">
          <button class="todo-status-btn btn btn-outline-danger btn-sm todo-status-btn" >Not Started</button>
        </td>
        <td>
          <button id="btn-save" type="button" class="btn btn-outline-success"><span class="fa fa-edit"></span></button>
        </td>
        <td>
          <button id="btn-delete" type="button" class="btn btn-outline-danger" ><span id="btn-icon" class="fa fa-eraser"></span></button>
        </td>
    </tr>
`
    inputField.value=''
    count+=1
    countTodo.textContent=count
    DayTodo.value=DayTodo[0].value;
    TimeTodo.value=DayTodo[0].value;
    TagTodo.value="";
    inputField.style.backgroundImage= "linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)";
   
  } else{
    TagTodoError.style.display="flex"
    TimeTodoError.style.display="flex"
    DayTodoError.style.display="flex"
  }
})
// Button progress in Tbody and remove
tbodyTodo.addEventListener('click', (e)=>{
  if (e.target.classList.contains('todo-status-btn')) {
    const btn = e.target;
    if (btn.textContent === "Not Started") {
      btn.textContent = "In Progress";
      btn.classList.replace("btn-outline-danger", "btn-outline-warning");
    } else if (btn.textContent === "In Progress") {
      btn.textContent = "Done";
      btn.classList.replace("btn-outline-warning", "btn-outline-success");
    } else {
      btn.textContent = "Not Started";
      btn.classList.replace("btn-outline-success", "btn-outline-danger");
    }
  }
  if (e.target.id === "btn-delete") {
    const row = e.target.closest("tr");
    if (row) row.remove();
    console.log(row);
    count-=1
    countTodo.textContent=count
  }
});
//delete all
btnDelete.addEventListener('click',()=>{
  inputField.value=""
  DayTodo.value=DayTodo[0].value;
  TimeTodo.value=DayTodo[0].value;
  TagTodo.value="";
  inputField.style.backgroundImage= "linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)";
})
