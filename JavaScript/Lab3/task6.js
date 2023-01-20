let parentwindow = window.open('',"_blank","width=40,height=40")
parentwindow.document.write("<button id = btn>child<button>")
let btn = parentwindow.document.getElementById("btn").onclick=createChild;
parentwindow.scrollTo(100,100)
function createChild(){
    let childwindow = parentwindow.open('', "_blank","width=50,height=40")
    childwindow.document.write("Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ducimus ipsa sapiente delectus quis perferendis totam sint, dolores officiis! Ratione provident explicabo reiciendis. Suscipit ipsa odio exercitationem rerum aliquam explicabo")
}