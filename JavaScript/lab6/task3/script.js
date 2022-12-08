class Course {
    constructor (_courseId , _courseName){
        this.courseName = _courseName
        this.courseId = _courseId
    }
}

class Student{
    constructor(_courses){
        this.courses = _courses;
    }
    computeGrades(_grades){
        for(let i=0 ; i<_grades.length ; i++){
            this.courses[i]['grade'] = _grades[i][1]
        }
    }
    showAllCourses(){
        console.log(this.courses);
    }
}
courseOne = new Course(1 , "Database")
courseTwo = new Course(2 , "Network")
courseThree = new Course(3 , "operating system")
courses=[courseOne,courseTwo,courseThree]
grades = [[1,"A"] , [1,"F"] ,[3,"B+"]]
s1 = new Student(courses)
s1.computeGrades(grades)
s1.showAllCourses()