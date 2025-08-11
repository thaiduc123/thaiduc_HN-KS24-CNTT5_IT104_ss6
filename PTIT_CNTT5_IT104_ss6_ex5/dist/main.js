"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    speed;
    constructor(initialSpeed = 0) {
        this.speed = initialSpeed;
    }
    speedUp(value) {
        this.speed += value;
        console.log(`Tăng tốc ${value} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
    }
    slowDown(value) {
        if (this.speed - value < 0) {
            this.speed = 0;
        }
        else {
            this.speed -= value;
        }
        console.log(`Giảm tốc ${value} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
    }
    stop() {
        this.speed = 0;
        console.log(`Dừng phương tiện. Tốc độ hiện tại: ${this.speed} km/h`);
    }
}
let myVehicle = new Vehicle();
myVehicle.speedUp(30);
myVehicle.slowDown(10);
//# sourceMappingURL=main.js.map