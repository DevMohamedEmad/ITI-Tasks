var fruits = ["apple", "strawberry", "banana", "orange", "mango"]











function testString(fruits) {
    var grow = fruits.filter(function (item) {
        return typeof item == "string"; 
    })
    if(fruits.length == grow.length){
        return true
    }else {
        return false
    }
}
console.log(testString(fruits))


/////////////////////////////////////////////////////
function testStartA(fruits) {
    var array = fruits.filter(function (item) {
        return item.charAt(0) == "a"; 
    })

    if(array.length >= 1){
        return true
    }else {
        return false
    }
}
console.log(testStartA(fruits))


///////////////////////////////////////////////////
function filterdArray (fruits){
    var array = fruits.filter(function (item) {
        return item.charAt(0) == "s" || item.charAt(0) == "b" ; 
    })
return array
}
console.log(filterdArray (fruits))


////////////////////////////////////////////////////
function newArray (array){
    array.forEach(function(item)
    {
       console.log(item)
    })
}
newArray (filterdArray (fruits))


