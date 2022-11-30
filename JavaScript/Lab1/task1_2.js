//task 1 
let temp = prompt("Task1 : Enter The Temperture Degree");
(temp>=30)? document.write("Task 1 : hot"):document.write("Task 1 : cold");

//task2
for (let index = 0; index < 3; index++) {
    let username = prompt("Task2 : Enter Your Name");
    user_name = username * 1;
    if (isNaN(user_name)) {
        for (let i = 0; i < 3; i++) {
            var birth = prompt("Task2 : Enter Your Birth Year ex:2000");
            birth = birth * 1
            if (!isNaN(birth) && birth < 2010) {
                age = 2022 - birth
                document.write ( "Birth Year:", birth);
                document.write("<br>")
                document.write ("Age : </ins>", age);
                i= 10;
            }
        }        
        document.write("<br>")
        document.write ( "<ins>Name :", username);
        document.write("<br>")
        index = 10;
    }
}


