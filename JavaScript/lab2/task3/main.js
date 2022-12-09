//////////////////////// Task - 3 ////////////////////////////////////////
var str = prompt("Enter The Number")
console.log(isPalindrome(str)) 
function isPalindrome(str){
    result ="" ;
for (let index = str.length-1 ; index >= 0; index--) {
   result +=(str.charAt(index))
}
if(result === str){
    return "yes"
}
return "no"
}