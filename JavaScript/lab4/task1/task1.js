var username=document.getElementById("name");

var alert = document.getElementsByClassName("alert")[0]
let p = document.createElement("p")
var password=document.getElementById("password");
var cpassword=document.getElementById("cpassword");
username.onfocus = function (){
    username.style.border= "2px solid blue"
    if(alert.innerText !=""){
        alert.innerText = " "
    }
    if(alert.classList.contains("active")){
        alert.classList.toggle("active")
    }
}

username.onblur = function (){
    username.style.border= "none"
    if(username.value.length < 3)
    {
        username.focus();
        username.select();
        p.innerText = "Invalid - UserName"
        alert.appendChild(p)
        alert.classList.toggle("active")
    }else {
        if(alert.classList.contains("active")){
            alert.classList.toggle("active")
        }
    }
}

password.onblur = function () {
    if (cpassword.value != password.value){
        cpassword.focus();
    }
}
cpassword.onblur = function () {
    if (cpassword.value != password.value && password.value != ""){
        p.innerText = "password and repeat password should be the same"
        alert.appendChild(p)
        alert.classList.toggle("active")
    }else {
        if(alert.classList.contains("active")){
            alert.classList.toggle("active")
            alert.innerText = " "
        }
    }
}
// home page 
function go (){
    var newindow=window.open('task1Response.html'," ","_blank");
    newindow.document.write(`<h1>${username.value}</h1>`);
}

