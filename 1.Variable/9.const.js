// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수 변수 또는 변수
const text = 'hello';

// 1. 상수
// 상수의 이름은 항상 대문자 + 단어 추가는 _로
const MAX_FRUITS = 5;

// 2. 재할당이 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
console.log(apple);
apple.name = 'orange';
console.log(apple);
/**
 * 왜 값이 변할까??
 * 객체는 HEAP에 저장 됨
 * const로 선언시에 변수는 객체의 주소를 가르키고
 * 객체의 값 변경은 가능.
 * 즉 const는 재할당만 불가능하다!!
 */
