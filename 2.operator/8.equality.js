// 동등 비교 관계 연산자 (Equality operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름
console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == "2"); // 값이 같으므로 true가 나온다.
console.log(2 === "2"); // ✨
console.log(true == 1); // 1을 불리언으로 변경하면 true가 나오기 떄문에 참
console.log(true === 1);
console.log(false == 0);
console.log(false === 0);
console.clear();

const obj1 = {
  name: "js",
};
const obj2 = {
  name: "js",
};

console.log(obj1 == obj2); //obj1과 obj2의 메모리 안의 주소가 다르기 떄문에 false
console.log(obj1 === obj2);
console.log(obj1.name == obj2.name); // 값은 같기 때문에 true가 나옴.
console.log(obj1.name === obj2.name); // 값과 타입 모두 같으므로 true가 나옴.

let obj3 = obj2; // 동일한 메모리 주소를 갖고 있기 때문이다.
console.log(obj3 == obj2);
console.log(obj3 === obj2);
