function maxmin (...arr){
    arr = arr[0]
    let max = arr[0]
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > max ){
            max = arr[i]
        }
        if(arr[i] < min ){
            min = arr[i]
        }
    }
    return {'max':max  ,'min':min}
}
array = [0,5,4,-55,8,10,120,11]
console.log(`max : ${maxmin(array)['max']}`)
console.log(`min : ${maxmin(array)['min']}`)


