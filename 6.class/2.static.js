// static 정적 프로퍼티, 메서드
class Fruit {
  static MAX_FRUITS = 4;
  // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 클래스 레벨의 메서드
  // static이 포함된 프로퍼티와 메소드는 인스턴스에 포함 X
  // 클래스에 그대로 남아있음.
  // 클래스 레벨에서 공통적으로 사용하기 위해서
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 참조할 수 없음
    // 클래스 자체는 값이 채워지지 않은 상태이기 떄문
    return new Fruit('banana', '🍌');
  }

  // 만들어진 인스턴스와 밀접하게 연관
  // 인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const banana = Fruit.makeRandomFruit();
// console.log(banana);
// console.log(Fruit.MAX_FRUITS);
// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
// orange은 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();

// static을 사용하면 object를 굳이 만들지 않고도 사용이 가능.
Math.pow();
Number.isFinite(1);
