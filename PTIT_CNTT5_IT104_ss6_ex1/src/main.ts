abstract class Shape {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
  abstract size(): void;
}
class Rectangle extends Shape {
  w: number;
  h: number;
  constructor(name: string, width: number, height: number) {
    super(name);
    this.w = width;
    this.h = height;
  }
  size(): void {
      console.log(`Rong: ${this.w}, Cao: ${this.h}`);
  }
}
let result = new Rectangle("HCN", 5, 10);
console.log(result.getName());
result.size();