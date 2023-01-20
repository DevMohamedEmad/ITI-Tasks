var textVal = document.getElementById("textVal");
var addBtn = document.getElementById("addBtn")
var inProgress = document.getElementById("inProgress");
var hold = document.getElementById("hold");
var review = document.getElementById("review");
var Approved = document.getElementById("Approved");

dragdrop(Approved)
dragdrop(review)
dragdrop(hold)
dragdrop(inProgress)

showItems()

// addBtn.onclick = addItem
// addBtn.onclick = addItem
form.addEventListener('submit' , function(e){
e.preventDefault();
// console.log("hello")
addItem();
});
function addItem() {
    if (textVal.value != "") {
        var dragitem = document.createElement("li")
        dragitem.id = itemId()
        console.log(dragitem.id)
        dragitem.setAttribute("divId", "inProgress")
        dragitem.draggable = "true"
        dragitem.innerHTML = textVal.value
        textVal.value = ""
        addDragedToChild(dragitem)
        addToLocalStorage(dragitem, "inProgress")
        inProgress.appendChild(dragitem)
    }
}

function itemId() {
    if (localStorage.getItem("tasks")) {
        return JSON.parse(localStorage.getItem("tasks")).length
    }
    else {
        return 0;
    }
}

function addToLocalStorage(item, divId) {
    var tasks = JSON.parse(localStorage.getItem('tasks')) || []
    var array =[];
    var flag = 0;
    if (tasks.length != 0) {
        for (let i = 0; i < tasks.length; i++) {
            if(item['id'] == tasks[i][0]){
                array[i] = tasks[i]
                array[i][1] = divId
                flag = 1;
            }else{
                console.log("else")
                array[i] = tasks[i]
            }
        }
        if(flag == 0){
            console.log("no flag")
            array[array.length] = [item['id'], divId, item.innerHTML]
        }
        localStorage.setItem("tasks" ,JSON.stringify( array) )
        }
    if (tasks.length == 0) {
        localStorage.setItem("tasks", JSON.stringify([[item['id'], divId, item.innerHTML]]))
    }
}

function addDragedToChild(item) {
    item.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData('text', this.id);
    });
}

function dragdrop(container) {
    container.addEventListener('dragover', dragOverFun)
    container.addEventListener('drop', dropFun)
}

function dragOverFun(event) {
    event.preventDefault();
}

function dropFun(event) {
    var draggedData = event.dataTransfer.getData('text');
    this.appendChild(document.getElementById(draggedData))
    addToLocalStorage(document.getElementById(draggedData) , this.id)
}

function showItems(){
    var tasks = JSON.parse(localStorage.getItem('tasks')) || []
    if(tasks !=0){
      for(let i = 0 ; i<tasks.length ; i++){
        id = tasks[i][0]
        divId = tasks[i][1]
        value = tasks[i][2]
        child = document.createElement("li")
        child.setAttribute('id' ,id)
        child.innerHTML= value
        child.draggable="true"
        child.setAttribute('divId' ,divId)
        addDragedToChild(child)
        parent =document.getElementById(divId);
        parent.appendChild(child)
      }      
    }
}



// var form = document.getElementById("form")
// form.addEventListener('submit', (event) => {
//     console.log("hello")
// });
