// 단일 데이터 (원시 타입)
// 복합 데이터 (객체, 함수, ...) => 연관된 데이터 묶어서
// 메모리는 CODE, DATA, STACK, HEAP 으로 나뉜다.
// 원시 타입은 Data, Stack에 할당 (전역 => data, 로컬 => stack)
// 객체는 Heap에 할당 (사이즈가 정해지지 않고 동적으로 사이즈가 변하는 것들)
// object 부분은 heap에 할당되고 heap의 메모리 주소가 보관된 주소를 data나 stack에 저장 
let name = 'apple';
let color = 'red';
let display = '🍎';
let orangName = "orange";

let apple = {
  name: 'apple',
  color:'red',
  display:'🍎',
}

console.log(apple)
console.log(apple.name)
console.log(apple.display)

let orange = {
  name : '오렌지',
  color : 'orange',
  display : '🏺'
}

console.log(orange)
console.log(orange.name)
console.log(orange.display)