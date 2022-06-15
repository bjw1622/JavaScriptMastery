const x = 0;
const y = 0;
// key와 value의 이름이 똑같다면 생략이 가능하다.
const coordinate = { x, y }; //{ x: x, y: y };
console.log(coordinate);

function makeObj(name, age) {
  return {
    name,
    age,
  };
}

const obj = makeObj(x, y);
// {name : 0, age : 0}
console.log(obj);
