class Person {
    static #count = 0
    constructor(_id, _userName, _age) {
        Person.#count++;
        if (this.constructor == Person) {
            throw " The Person Is An Abstract Class"
        }
        this.id = _id,
        this.userName = _userName,
        this.age = _age
    }
    static displayHTRules() {
        return " Our Rules Inside The Company";
    }
    static getCount() {
        return Person.#count;
    }
}

class Emp extends Person {
    #salary;
    constructor(_id, _userName, _age) {
        super(_id, _userName, _age)
    }
    setSalary(s){
        this.#salary = s;
    }
    getSalary(){
        return this.#salary;
    }

    increaseSalary(x){
       this.#salary += x;
    }
    showSalary(){
        return this.#salary;
    }
}

console.log(Person.displayHTRules())
empOne = new Emp(3, "Mohamed", 22)
empOne.setSalary(3200);
// personOne = new Person(3, "Mohamed", 22)
document.write(`•What is the difference between static method and member method?  <br>
Static Method We can't call it using the object you can call it using the class only  <br>
 The Member Method is special for the Objects <br> <hr>`)
console.log(Person.getCount())
console.log(empOne.getSalary())

///////////////////////////////////// Task 2  //////////////
console.log(empOne.increaseSalary(300))
console.log(empOne.showSalary())

document.write(`Class Abstraction  : <br>
 [1] Abstract Class Can't Be Instantiated . <br>
 [2] Made For Other Classes To Inherit Prop And Methods From It <br>
 [3] Abstract classes are allowed to define data [ prop & methods].<br>
 [4] Can't Be Inherited with other Abstract Classes <hr> `)

 document.write(`Intrface  : <br>
 [1] Can't Be Instantiated . <br>
 [2] An interface is not allowed to define data. <br> 
 [3] Can inherted With Other Interfaces`)