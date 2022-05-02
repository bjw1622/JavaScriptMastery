function add(a, b) {
  return a + b;
}
// 함수를 정의하는 것은 메모리 어딘가에 할당
// add에는 함수의 주소가 들어있다.

const sum = add;
// add가 들어있는 함수 주소를 sum이 그대로 할당

console.log(sum(1, 2));
console.log(add(1, 2));
console.log(add === sum);
console.log(add);
