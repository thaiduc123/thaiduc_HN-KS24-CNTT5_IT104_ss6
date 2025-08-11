"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Job {
    type;
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log("Loại công việc:", this.type);
    }
}
class ParttimeJob extends Job {
    workingHour;
    constructor(workingHour) {
        super("Part time");
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor() {
        super("Full time");
    }
    calculateSalary() {
        return 10000000;
    }
}
const part = new ParttimeJob(80);
const full = new FulltimeJob();
part.printType();
console.log("Lương:", part.calculateSalary(), "VND");
full.printType();
console.log("Lương:", full.calculateSalary(), "VND");
//# sourceMappingURL=main.js.map