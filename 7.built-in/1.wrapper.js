// 6가지의 원시 타입
// string, number, boolean, null, undefined, symbol
// 래퍼 객체
// String, Number, Boolean, Symbol

// 원시 타입은 프로퍼티와 메서드를 정의할 수 없다.
// 생성자(new)를 사용하여 원시 타입을 래퍼 객체로 생성할 수 있지만, 효율적인 방법은 아니다.
// 자바스크립트 엔진에 의해 래퍼 객체는 한번 사용 후 소멸된다.

// 래퍼 객체는 원시 타입을 감싸는 형태로 사용이 됨
// 래퍼 객체 (Wrapper Object)
// 원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다.
const number = 123; // number 원시 타입
// .을 찍는 순간 Wrapper 객체로 감싸짐
// number 원시타입을 감싸고 있는 Number 객체로 감싸짐
console.log(number.toString());
console.log(number); // number 원시 타입

const text = "text"; // string 문자열 원시타입
console.log(text);
text.length; // String 객체
text.trim();
