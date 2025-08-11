abstract class Shape {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  // Abstract method: Không có thân, bắt buộc lớp con override
  abstract getArea(): number;
  // Method thường: Có thân, lớp con có thể dùng lại hoặc override
  printName(): void {
    console.log("Hình:", this.name);
  }
}
// Lớp con bắt buộc phải override getArea()
class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super("Hình tròn");
    this.radius = radius;
  }
  getArea(): number {
    // Bắt buộc viết lại
    return Math.PI * this.radius * this.radius;
  }
}
class Rectangle extends Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    super("Hình chữ nhật");
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    // Bắt buộc viết lại
    return this.width * this.height;
  }
}
const circle = new Circle(5);
circle.printName();
console.log("Diện tích:", circle.getArea());
const rect = new Rectangle(4, 6);
rect.printName();
console.log("Diện tích:", rect.getArea());
