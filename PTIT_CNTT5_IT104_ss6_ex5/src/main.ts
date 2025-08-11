interface ChangeSpeed {
  speedUp(value: number): void;
  slowDown(value: number): void;
  stop(): void;
}
class Vehicle implements ChangeSpeed {
  speed: number;
  constructor(initialSpeed: number = 0) {
    this.speed = initialSpeed;
  }
  speedUp(value: number): void {
    this.speed += value;
    console.log(`Tăng tốc ${value} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
  }
  slowDown(value: number): void {
    if (this.speed - value < 0) {
      this.speed = 0;
    } else {
      this.speed -= value;
    }
    console.log(`Giảm tốc ${value} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
  }
  stop(): void {
    this.speed = 0;
    console.log(`Dừng phương tiện. Tốc độ hiện tại: ${this.speed} km/h`);
  }
}

let myVehicle = new Vehicle();
myVehicle.speedUp(30);
myVehicle.slowDown(10);
