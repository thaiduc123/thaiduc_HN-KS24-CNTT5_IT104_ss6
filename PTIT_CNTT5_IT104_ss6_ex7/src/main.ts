class Student {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }
}

let allStudents: Student[] = [];

class Classroom {
  students: Student[] = [];
  showStudents(): void {
    if (this.students.length === 0) {
      console.log("Lớp chưa có học sinh nào.");
    } else {
      console.log("Danh sách học sinh trong lớp:");
      for (let i of this.students) {
        console.log(`ID: ${i.getId()}, Name: ${i.getName()}`);
      }
    }
  }
  addStudent(student: Student): void {
    this.students.push(student);
  }
  filterStudent(id: number): Student | undefined {
    return this.students.find((s) => s.getId() === id);
  }
  addStudentInClass(id: number): boolean {
    if (this.filterStudent(id)) {
      console.log(`Học sinh có ID ${id} đã có trong lớp.`);
      return false;
    }
    const student = allStudents.find((s) => s.getId() === id);
    if (!student) {
      console.log(
        `Không tìm thấy học sinh có ID ${id} trong danh sách allStudents.`
      );
      return false;
    }
    this.students.push(student);
    allStudents.splice(allStudents.indexOf(student), 1);
    return true;
  }
  removeStudent(id: number): boolean {
    let index = this.students.findIndex((s) => s.getId() === id);
    if (index === -1) {
      console.log(`Không tìm thấy học sinh có ID ${id} trong lớp.`);
      return false;
    }
    let student = this.students.splice(index, 1)[0]!;
    allStudents.push(student);
    return true;
  }
  editStudent(id: number, newName: string): boolean {
    let student = this.filterStudent(id);
    if (!student) {
      console.log(`Không tìm thấy học sinh có ID ${id} trong lớp.`);
      return false;
    }
    student.name = newName;
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

console.log("Lớp 1 ban đầu:");
class1.showStudents();

console.log("\nLớp 2 ban đầu:");
class2.showStudents();

console.log(
  "\nDanh sách allStudents ban đầu:",
  allStudents.map((s) => s.getName())
);

class1.removeStudent(2);
class2.editStudent(4, "Dũng Updated");

console.log("\nLớp 1 sau khi xóa:");
class1.showStudents();

console.log("\nLớp 2 sau khi sửa:");
class2.showStudents();

console.log(
  "\nDanh sách allStudents sau khi xóa:",
  allStudents.map((s) => s.getName())
);
