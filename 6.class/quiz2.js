// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Employee {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }
  calculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
}

class FullTimeEmployee extends Employee {
  static #PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeEmployee.#PAY_RATE);
  }
}

class PartTimeEmployee extends Employee {
  static #PAY_RATE = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTimeEmployee.#PAY_RATE);
  }
}

const jay = new FullTimeEmployee("Jay", "FE", 30);
console.log(jay.calculatePay());
const loi = new PartTimeEmployee("loi", "FE", 30);
console.log(loi.calculatePay());

// class Employee {
//   #name;
//   #departName;
//   #monthHour;
//   constructor(name, departName, monthHour) {
//     this.#name = name;
//     this.#departName = departName;
//     this.#monthHour = monthHour;
//   }
//   cal() {
//     console.log(`${this.#monthHour * 10000}원`);
//   }
// }

// class FullEmployee extends Employee {}
// class PartEmployee extends Employee {
//   #name;
//   #departName;
//   #monthHour;
//   constructor(name, departName, monthHour) {
//     super(name, departName, monthHour);
//     this.#monthHour = monthHour;
//   }
//   cal() {
//     super.cal();
//     console.log(`${this.#monthHour * 8000}원`);
//   }
// }
// const part = new PartEmployee("백재원", "FE", 123);
// part.cal();
