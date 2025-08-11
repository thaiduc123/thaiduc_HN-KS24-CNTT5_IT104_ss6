"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    name;
    constructor(name) {
        this.name = name;
    }
    // Method thường: Có thân, lớp con có thể dùng lại hoặc override
    printName() {
        console.log("Hình:", this.name);
    }
}
// Lớp con bắt buộc phải override getArea()
class Circle extends Shape {
    radius;
    constructor(radius) {
        super("Hình tròn");
        this.radius = radius;
    }
    getArea() {
        // Bắt buộc viết lại
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    width;
    height;
    constructor(width, height) {
        super("Hình chữ nhật");
        this.width = width;
        this.height = height;
    }
    getArea() {
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
//# sourceMappingURL=main.js.map