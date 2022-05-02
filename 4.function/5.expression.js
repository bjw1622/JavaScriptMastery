// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { }

// 함수도 객체이므로 다른 변수에 할당 및 재할당 가능
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

// 화살표 함수 const name = () => { }
add = (a, b) => a + b;

console.log(add(1, 2));

// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸

// IIFE (Immediately-Invoked Function Expressions)
// 즉각적으로 함수를 표현할 때 쓰이는 표현식
(function run() {
  console.log('😍');
})();
