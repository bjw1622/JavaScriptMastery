// 불리언 타입
let t = true;
let f = false;
console.log(t,f);

// 활용 예: is__ 이런 식으로 이름 작성
let isFree = true;
let isActivated = false;
let isEnrolled = true;

console.clear();

// !!는 값을 true or false로 변환

// Falshy 거짓인 값
console.log(!!0);
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

console.log('---------------')

// Truthy 참인 값
console.log(!!1);
console.log(!!{});
console.log(!![]);
console.log(!!Infinity);