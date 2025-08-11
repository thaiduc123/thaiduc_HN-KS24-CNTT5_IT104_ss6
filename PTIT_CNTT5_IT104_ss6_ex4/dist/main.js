"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
const circle = new Circle(5);
console.log("Dien tich hinh tron:", circle.calculateArea().toFixed(2));
console.log("Chi vi hinh tron:", circle.calculatePerimeter().toFixed(2));
const rectangle = new Rectangle(4, 6);
console.log("Dien tich HCN:", rectangle.calculateArea());
console.log("Chi vi HCN:", rectangle.calculatePerimeter());
//# sourceMappingURL=main.js.map