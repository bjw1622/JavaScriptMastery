// 주석을 달면 됨
/**
 * 주석이 됨
 * 다음줄로 자동으로 넘어감
 */

/** 변수 규칙!
 *  라틴문자(0-9, a-z, A-Z), _
 * 대소문자를 구분
 * 추천: camelCase
 * 한국어 X
 * 예약어 X
 * 숫자로 시작X
 * 특수문자 X (_, $ 두가지는 예외)
 * 여러개의 변수를 1,2,3 숫자로 구분하는 건 X => 최대한 의미있게, 구체적으로
 */

let apple;
let redApple;

// 나쁜예제
let number = 20;
let audio1;
let audio2;

// 좋은예제 => 의미있는 단어
let myAge = 20;
let backgroundAudio;
let windAudio;

// 꿀팁! 👍👍
// 포괄적인거 먼저 후에 구체적으로 작성하면 변수 찾기에 굉장히 편리
let audioBackground;
let audioWind;
