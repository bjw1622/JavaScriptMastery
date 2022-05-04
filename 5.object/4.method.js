// 객체는 서로 연관된 정보와 함수를 묶어서 나타낼 수 있음.
const apple = {
  name: "apple",
  display: function () {
    // this라는 키워드를 활용함으로써 내 자신의 객체의 key => 입력 예시로 this.ket이름
    console.log(`${this.name}: 🍎`);
  },
};

apple.display();
