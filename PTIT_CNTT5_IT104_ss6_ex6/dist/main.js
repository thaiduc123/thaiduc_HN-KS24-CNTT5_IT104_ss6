"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Lớp Student
class Student {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
let allStudents = [];
class Classroom {
    students = [];
    showStudents() {
        if (this.students.length === 0) {
            console.log("Lớp chưa có học sinh nào.");
        }
        else {
            console.log("Danh sách học sinh trong lớp:");
            for (let i of this.students) {
                console.log(`ID: ${i.getId()}, Name: ${i.getName()}`);
            }
        }
    }
    addStudent(student) {
        this.students.push(student);
    }
    filterStudent(id) {
        return this.students.find((s) => s.getId() === id);
    }
    addStudentInClass(id) {
        if (this.filterStudent(id)) {
            console.log(`Học sinh có ID ${id} đã có trong lớp.`);
            return false;
        }
        const student = allStudents.find((s) => s.getId() === id);
        if (!student) {
            console.log(`Không tìm thấy học sinh có ID ${id} trong danh sách allStudents.`);
            return false;
        }
        this.students.push(student);
        allStudents.splice(allStudents.indexOf(student), 1);
        return true;
    }
}
allStudents.push(new Student(1, "An"));
allStudents.push(new Student(2, "Bình"));
allStudents.push(new Student(3, "Chi"));
allStudents.push(new Student(4, "Dũng"));
allStudents.push(new Student(5, "Hà"));
allStudents.push(new Student(6, "Khánh"));
let class1 = new Classroom();
let class2 = new Classroom();
class1.addStudentInClass(1);
class1.addStudentInClass(2);
class1.addStudentInClass(3);
class2.addStudentInClass(4);
class2.addStudentInClass(5);
class2.addStudentInClass(6);
console.log("Lớp 1:");
class1.showStudents();
console.log("\nLớp 2:");
class2.showStudents();
console.log("\nDanh sách allStudents còn lại:", allStudents);
//# sourceMappingURL=main.js.map