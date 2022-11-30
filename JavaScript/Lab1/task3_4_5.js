//task 3

let a = prompt("Task3 : Enter The Coefficent of x square");
let b = prompt("Task3 : Enter The Coefficent of x");
let c = prompt("Task3 : Enter The Constant");
let s = Math.pow(b , 2 ) - 4 * a * c
if (s >= 0){
    document.write("Task 3 : this equation has a solutions")
    document.write("<br>")
    x1= ((b*-1)+Math.sqrt(Math.pow(b , 2 ) - 4 * a * c))/(2*a)
    x2= ((b*-1)-Math.sqrt(Math.pow(b , 2 ) - 4 * a * c))/(2*a)
    document.write("x1 = ",x1)
    document.write("<br>")
    document.write("x2 = ",x2)
    document.write("<br>")
}
else {
    document.write("Task 3 : this equation hasn't a solution")
    document.write("<br>")
}

//task 4

// let num1 = prompt("Task 4 : Enter Thr First Number")
// let num2 = prompt("Task 4 : Enter The Second Number")
// d1=Number(num1.charAt(num1.length-1))
// d2=Number(num2.charAt(num2.length-1))
// document.write(d1+d2)
// document.write("<br>")


//task 5 

let distance = prompt("Task 5 : Enter The Distance In KM")
d1=Number(distance)
document.write(" Task 5 : The Time ",d1*2 ,)
