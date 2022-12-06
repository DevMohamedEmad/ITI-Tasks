var result = document.getElementById("result")
var equal = document.getElementById("equal")
var clear = document.getElementById("clear")
var buttons = document.getElementsByClassName("btn")
let array = [];

clear.onclick = function () {
    result.innerHTML = ""
    array = [];
}
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        if(result.innerHTML == "NaN" || result.innerHTML == "undefined" ){
            array=[];
            result.innerHTML =  buttons[i].value
        }else {
            result.innerHTML += buttons[i].value
        }
        if (buttons[i].value == "+" || buttons[i].value == "-" ||
            buttons[i].value == "*" || buttons[i].value == "/" || buttons[i].value == ".") {
            array.push(buttons[i].value)
        } else {
            array.push(Number(buttons[i].value))
        }
    }
}
equal.onclick = function () {
    for(let j =0 ;j<array.length ; j++){
        if(typeof array[j] == "number" && typeof array[j+1]=="number"){
            array[j] = array[j]*10 + array[j+1]
            console.log(array[j])
            array.splice(j+1 , 1 )
            j=j-1       
        }
        if(array[j] == "." && (array[j-1] != "*" && array[j-1] != "+" && array[j-1] != "-" && array[j-1] != "/" )){
           console.log(j)
            array[j-1]= array[j-1] + (array[j+1] / 10)
            array.splice(j , 2)
        }
        if(array[j] == "."){
            array[j]=array[j+1] / 10
            array.splice(j+1 , 1)
        }
    }
    console.log(array)
    for (let i = 0; i < array.length; i++) {
        if (array[i] == "/" || array[i] == "*") {
            array[i - 1] = calc(array[i], array[i - 1], array[i + 1])
            array.splice(i, 2)
            i = i - 1
        }
    }
    if (array.length > 1) {
        for (let i = 0; i < array.length; i++) {
            array[0] = calc(array[1], array[0], array[2])
            array.splice(1, 2)
            i = 0
            if (array.length == 1) {
                x=Math.round(array[0])
                result.innerHTML = `${x}`
                break;
            }
        }
    }
    else{
        x = Math.round(array[0])
        result.innerHTML = `${x}`
    }
}
function calc(op, num1, num2) {
    if (op == "*") {
        return num1 * num2
    }
    if (op == "+") {
        return num1 + num2
    }
    if (op == "-") {
        return num1 - num2
    }
    if (op == "/") {
        return num1 / num2
    }
}