//////////////////////// Task - 2 ////////////////////////////////////////
var str = prompt("Enter The String")
console.log(reverseString(str)) 
function reverseString(str){
    result ="" ;
for (let index = str.length-1 ; index >= 0; index--) {
   result +=(str.charAt(index))
}
return result
}

////////////////////////// Task - 1 //////////////////////////////////////////////
// var num = prompt("Enter The Number")
// console.log(sumNumber(num)) 
// function sumNumber(x){
//     sum =0 ;
// for (let index = 0; index < x.length; index++) {

//    sum +=Number (x.charAt(index))
// }
// return sum
// }
