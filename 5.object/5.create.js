// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name}: π`);
//   },
// };

// const orange = {
//   name: 'orange',
//   display: function () {
//     console.log(`${this.name}: π`);
//   },
// };

// μμ±μ ν¨μ
// ν¨μ μ΄λ¦μ λλ¬Έμλ‘
function Fruit(name, emoji) {
  // thisλΌλ ν€μλλ₯Ό νμ©νλ©΄ κ°μ²΄ μκΈ° μμ μ κ°λ₯΄ν¬ μ μλ€.
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  // return this; // μλ΅κ°λ₯, μλμΌλ‘ thisλ₯Ό return
}

const apple = new Fruit('apple', 'π');
const orange = new Fruit('orange', 'π');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();
