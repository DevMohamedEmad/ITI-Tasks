document.write("<button id = btn > Start Clock </button>")
document.getElementById("btn").addEventListener("click",showAlert)
document.getElementById("btn").addEventListener("click",showTime)
function showAlert(){
    alert ("Clock Started")
}
function showTime(){
    setInterval(function (){
        currentdate = new Date();
        let time = currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds() + "<br>";
        document.write(time)
    } , 1000)
}