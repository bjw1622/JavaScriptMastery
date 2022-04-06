// 단항연산자
// + (양)
// - (음)
// ! (부정)

let a = 5;
a = -a;
console.log(a);

// + 숫자가 아닌 타입들을 숫자로 변환하면 어떤 값이 나오는지 확인할 수 있음
console.clear();
console.log(+false);
console.log(+null);
console.log(+'');
console.log(+true);
console.log(+undefined);