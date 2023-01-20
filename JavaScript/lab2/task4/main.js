var num = prompt("Enter The Number")
var x = prompt("Enter The digit")

console.log(checkIn(num , x))

function checkIn(num , x){
    result = -1;
    for (let index = 0; index < num.length; index++) {
        if(num.charAt(index) == x){
            result = index
            break;
        }
    }
    return result;
}