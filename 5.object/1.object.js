// Object literal { key: value }
// new Object()
// Object.create();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체 (함수)

// 객체는 heap에 저장이 되고 apple은 객체가 저장된 메모리 주소를 가리킨다.
let apple = {
  name: "apple",
  "hello-bye": "✋",
  0: 1,
  ["hello-bye1"]: "✋",
};

// 속성, 데이터에 접근하기 위해서는
apple.name; // 마침표 표기법 dot notation
console.log(apple["hello-bye1"]); // 특수 문자를 쓴 경우에는 대괄호 표기법 bracket notation
apple["name"];

// 속성 추가
apple.emoji = "🍎";
console.log(apple.emoji);
console.log(apple["emoji"]);
console.log(apple);

// 속성 삭제
delete apple.emoji;
console.log(apple);
