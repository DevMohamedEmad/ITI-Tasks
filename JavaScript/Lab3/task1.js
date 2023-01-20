let parentwindow = window.open('',"parent window","_blank")
parentwindow.document.write("<button id = btn>child<button>")
let btn = parentwindow.document.getElementById("btn").onclick=createChild;
function createChild(){
    let childwindow = parentwindow.open('' , "child window")
    childwindow.document.write("child window")
}