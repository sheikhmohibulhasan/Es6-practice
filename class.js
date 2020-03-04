class Student{
    constructor (sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "A.K.R.I High school"
    }
}


const student1 = new Student(12, "Shovo");
const student2 = new Student(22, "Mahiya");
const student3 = new Student(29, "Bappi");
console.log(student1, student2, student3);