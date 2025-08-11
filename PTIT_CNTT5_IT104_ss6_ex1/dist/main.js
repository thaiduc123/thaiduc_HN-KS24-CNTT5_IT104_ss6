"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    w;
    h;
    constructor(name, width, height) {
        super(name);
        this.w = width;
        this.h = height;
    }
    size() {
        console.log(`Rong: ${this.w}, Cao: ${this.h}`);
    }
}
let result = new Rectangle("HCN", 5, 10);
console.log(result.getName());
result.size();
//# sourceMappingURL=main.js.map