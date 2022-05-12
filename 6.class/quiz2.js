// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Employee {
  #name;
  #departName;
  #monthHour;
  constructor(name, departName, monthHour) {
    this.#name = name;
    this.#departName = departName;
    this.#monthHour = monthHour;
  }
  cal() {
    console.log(`${this.#monthHour * 10000}원`);
  }
}

class FullEmployee extends Employee {}
class PartEmployee extends Employee {
  #name;
  #departName;
  #monthHour;
  constructor(name, departName, monthHour) {
    super(name, departName, monthHour);
    this.#monthHour = monthHour;
  }
  cal() {
    super.cal();
    console.log(`${this.#monthHour * 8000}원`);
  }
}
const part = new PartEmployee("백재원", "FE", 123);
part.cal();
