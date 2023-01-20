var length = prompt("Enter The Length Of The List")
array=[]
for (let index = 0; index < length; index++) {
    var input=prompt("Enter The elements Of The List")
    array[index] =  input
}
var element = prompt("Enter The Index of The Removed Element")
element *=1
array.splice(element , 1)
console.log(array)
