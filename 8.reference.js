// 원시 타입은 값이 복사되어 전달 됨.
let a = 1;
let b = a;
b = 2;
console.log(a);
console.log(b);

// 객체타입은 참조 값(메모리 주소, 레퍼런스)가 복사되어 전달됨
let apple = {
  //0x1234
  name: '사과',
};
let orange = apple; //0x1234
orange.name = '오렌지';
console.log(apple);
console.log(orange);
