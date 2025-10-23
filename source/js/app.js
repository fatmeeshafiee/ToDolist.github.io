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






// const inputElem = document.getElementById("input-field")
// const btnSaveElem = document.getElementById("btn-save")
// const btnDeleteElem = document.getElementById("btn-delete")
// const colorBox = document.querySelectorAll(".color-box")
// const tbodyTodo = document.getElementById("tbodyTodo")
// const DayTodo = document.getElementById("DayTodo")
// const TimeTodo = document.getElementById("TimeTodo")
// const TagTodo = document.getElementById("TagTodo")
// const countTodo = document.querySelector(".countTodo")
// // error handling
// const inputFieldError = document.getElementById("inputFieldError");
// const DayTodoError = document.getElementById("DayTodoError");
// const TimeTodoError = document.getElementById("TimeTodoError");
// const TagTodoError = document.getElementById("TagTodoError");
// colorBox.forEach(function(colorBox){
//     colorBox.addEventListener("click" , function(event){
//         let mainColor = event.target.style.backgroundImage;
//         inputElem.style.backgroundImage = mainColor
//     })
// })
// function generateNewNote(){
//     let newTrTodo = document.createElement("tr");
//     newTrTodo.className = "table-row";
//     // Task Id
//     let newTdIdTodo = document.createElement("td");
//     newTdIdTodo.className = "text-light";
//     newTdIdTodo.innerHTML = ++tbodyTodo.childElementCount;
//     // Task Name
//     if(inputElem.value === "no task name, pls enter"){
//         inputFieldError.style.display = "block"
//     }else{
//         inputFieldError.style.display = "none"
//     }


//     let newTdTaskNameTodo = document.createElement("td");
//     newTdTaskNameTodo.className = "TaskName";
//     let newTdTaskNameButtonTodo = document.createElement("button");
//     newTdTaskNameButtonTodo.className = "btn btn-light btn-sm";
//     newTdTaskNameButtonTodo.innerHTML = inputElem.value;
//     let inputBg = inputElem.style.backgroundImage;
//     newTdTaskNameButtonTodo.style.backgroundImage = inputBg;
//     newTdTaskNameTodo.append(newTdTaskNameButtonTodo);
//     inputElem.value = "no task name, pls enter";    // empty field task name input
//     inputElem.style.backgroundImage = "linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)";   // empty color task name input

    




    

//     // Task Day
//     if(DayTodo.value === "not selected"){
//         DayTodoError.style.display = "block"
//     }else{
//         DayTodoError.style.display = "none"
//     }
//     let newTdDayTodo = document.createElement("td");
//     newTdDayTodo.className = "text-light";
//     newTdDayTodo.innerHTML = DayTodo.value;
//     DayTodo.value = "not selected";


    




//     // Task Time 
//     if(TimeTodo.value === "not selected"){
//         TimeTodoError.style.display = "block"
//     }else{
//         TimeTodoError.style.display = "none"
//     }
//     let newTdTimeTodo = document.createElement("td");
//     newTdTimeTodo.className = "todo-Time text-light";
//     newTdTimeTodo.innerHTML = TimeTodo.value;
//     TimeTodo.value = "not selected";





//     // Task Tag
//     if(TagTodo.value === "no tag"){
//         TagTodoError.style.display = "block"
//     }else{
//         TagTodoError.style.display = "none"
//     }
//     let newTdTagTodo = document.createElement("td");
//     newTdTagTodo.className = "todo-Tag";
//     let newTdTagButtonTodo = document.createElement("button");
//     newTdTagButtonTodo.className = "btn btn-primary btn-sm";
//     newTdTagButtonTodo.innerHTML = TagTodo.value;
//     newTdTagTodo.append(newTdTagButtonTodo);
//     TagTodo.value = "no tag";





//     // Task Status
//     let newTdStatusTodo = document.createElement("td");
//     newTdStatusTodo.className = "todo-status";
//     let newTdStatusButtonTodo = document.createElement("button");
//     newTdStatusButtonTodo.className = "btn btn-outline-danger btn-sm"
//     newTdStatusButtonTodo.innerHTML = "Not Started";
//     newTdStatusTodo.append(newTdStatusButtonTodo)




//     // Task Edit Button
//     let newTdEditTodo = document.createElement("td");
//     let newTdEditButtonTodo = document.createElement("button");
//     newTdEditButtonTodo.className = "btn btn-outline-success"
//     let newTdEditButtonSpanTodo = document.createElement("span");
//     newTdEditButtonSpanTodo.className = "fa fa-edit"
//     newTdEditButtonTodo.append(newTdEditButtonSpanTodo)
//     newTdEditTodo.append(newTdEditButtonTodo)





//     // Task remove Button
//     let newTdRemoveTodo = document.createElement("td");
//     let newTdRemoveButtonTodo = document.createElement("button");
//     newTdRemoveButtonTodo.className = "btn btn-outline-danger"
//     let newTdRemoveButtonSpanTodo = document.createElement("span");
//     newTdRemoveButtonSpanTodo.className = "fa fa-eraser"
//     newTdRemoveButtonTodo.append(newTdRemoveButtonSpanTodo)
//     newTdRemoveTodo.append(newTdRemoveButtonTodo)





//     newTrTodo.append(newTdIdTodo , newTdTaskNameTodo , newTdDayTodo , newTdTimeTodo , newTdTagTodo , newTdStatusTodo , newTdEditTodo , newTdRemoveTodo)



//     tbodyTodo.append(newTrTodo)









//     // start click to convert in progress



//     newTdStatusButtonTodo.addEventListener("click" , function(event){
//         event.target.remove();
//         let newTdStatusButtonInProgressTodo = document.createElement("button");
//         newTdStatusButtonInProgressTodo.className = "btn btn-outline-warning btn-sm";
//         newTdStatusButtonInProgressTodo.innerHTML = "In Progress";
//         newTdStatusTodo.append(newTdStatusButtonInProgressTodo)


//         // start click to convert Done

//         newTdStatusButtonInProgressTodo.addEventListener("click" , function(event){
//             event.target.remove();
//             let newTdStatusButtonDoneTodo = document.createElement("button");
//             newTdStatusButtonDoneTodo.className = "btn btn-outline-success btn-sm";
//             newTdStatusButtonDoneTodo.innerHTML = "Done";
//             newTdStatusTodo.append(newTdStatusButtonDoneTodo)
//         })


//         // end of click to convert Done


//     })




//     // end of click to convert in progress








//     // start click to araser to delete row
//     newTdRemoveButtonSpanTodo.addEventListener("click" , function(){
//         newTrTodo.remove()
//     })
//     // end of click to araser to delete row




//         // start countTodo
//         countTodo.innerHTML = tbodyTodo.childElementCount;
      
//         // end of countTodo
  
// }
// btnDeleteElem.addEventListener("click" , function(){
//     inputElem.value = "no task name, pls enter";
//     inputElem.style.backgroundImage = "linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)";

//     DayTodo.value = "not selected";
//     TimeTodo.value = "not selected";
//     TagTodo.value = "no tag";
// })
// inputElem.addEventListener("keydown" , function(event){
//     if(event.keyCode === 13){
//         if(inputElem.value){
//             generateNewNote()
//         }
//     }
// })









// btnSaveElem.addEventListener("click" , generateNewNote)





// // let inputField=document.querySelector('#input-field');

// // inputValue=inputField.value




