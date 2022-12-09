 var numOne = Number (prompt("Enter The First Number"))
 var numTwo = Number(prompt("Enter The Second Number"))
 var numThree = Number(prompt("Enter The Third Number"))
 var result = Number(prompt("Enter The Result Number"))

/////////////////////////////////////////////////////////////////

var x =0;
if (numOne*numTwo+numThree == result){
    x=1
}
if (numOne*numTwo-numThree == result){
    x=1
}
if (numOne+numTwo*numThree == result){
    x=1
}
if(numOne+numTwo-numThree == result){
    x=1
}
if (numOne-numTwo*numThree == result) {
    x=1
}
if (numOne-numTwo+numThree == result) {
    x=1
}
if(x == 1){
    console.log("yes")
}else{
    console.log("no")
}