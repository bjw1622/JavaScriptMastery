// 함수 : 특정한 일을 수행하는 코드의 집합 (유지 보수성, 재사용 가능, 높은 가독성)
// 함수단위로 작은 단위의 일들을 묶어나가는 것이 중요, 함수를 잘 나타내는 이름 짓기, 매개변수의 이름도 의미있게
// 함수도 객체이므로 heap이라는 메모리 공간에 할당
// 함수의 이름은 함수를 참조하고 있다.

// 사용예제 1
function sum(a, b) {
  console.log("function");
  return a + b;
}
const result = sum(1, 2);
console.log(result);

// 사용예제 2
function fullName(firstName, lastName) {
  return `${firstName} ${lastName} ✋`;
}
let lastName = "김";
let firstName = "지수";
console.log(fullName(firstName, lastName));

let lastName2 = "박";
let firstName2 = "철수";
console.log(fullName(firstName2, lastName2));
