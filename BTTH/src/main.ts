interface IAnimal {
  name: string;
  age: number;
  category: string;
  sound(): void;
  getDetail(): void;
  mode(): void;
  feed(): void;
}
abstract class Animal implements IAnimal {
  name: string;
  age: number;
  category: string;
  foodType: string;
  constructor (name: string, age: number, category: string, foodType: string){
    this.name = name;
    this.age = age;
    this.category = category;
    this.foodType = foodType;
  }
  sound(): void {
    return "Am thanh";
  }
  getDetail(): void{
    return 'name: ${this.name}, age: ${this.age}, category: ${this.category}, food: ${this.foodType}';
  }
  abstract mode(): void;
  feed(): void{
    console.log("An");
  }
}
class Mamal extends Animal{
    private furColor: string;
    move(){
        console.log("Chay");
    }
}
class Bird extends Animal{
    private furColor: string;
    move(){
        console.log("Bay");
    }
}
class Riptile extends Animal{
    private furColor: string;
    move(){
        console.log("Bo");
    }
}
let dog = new Mamal();