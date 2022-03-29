// null, undefined

// undefined => 값이 있는지 없는지 정해지지 않은 상태
let variable;
console.log(variable);

// null은 비어있는 것, 값은 정해져있다
variable = null;
console.log(variable);

let activeItem; // 아직 활성화 된 아이템이 있는지 없는지 모르는 상태! , 메모리 상에 아무것도 없는 상태
activeItem = null; // 활성화 된 아이템이 없는 상태!

console.log(typeof null); //메모리 상에 null이라는 값이 할당 됨
console.log(typeof undefined); // 메모리 상에 아무것도 X