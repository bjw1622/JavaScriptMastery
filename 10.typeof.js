// typeof: 데이터 타입을 확인
// 값을 타입 문자열로 반환
// 자바스크립트에도 type이 존재한다.
// Dynamic ⇾ 동적 타입
// Weakly typed ⇾ 타입 변경이 가능하다.
let variable;
console.log(typeof variable);

variable = ''; // 할당된 값에 따라 타입이 결정됨! 동적 타입
console.log(typeof variable);

variable = {};
console.log(typeof variable);

variable = function () {};
console.log(typeof variable);