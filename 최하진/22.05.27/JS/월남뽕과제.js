// let Poker_Num = []; //문양 4개, 숫자1~13까지 ◇ ♤ ♡ ♧  ♠-Ace

// //포커 문양
// //2차원 문양 + null로 공간만들기
let pattern = ["♦", "♥", "♣", "♠"];
let card = [];

// let arr = new Array(10).fill(new Array(10).fill(0));

let pack = [[], [], []];
// 2차원 배열이 비교하기 더 어려운이유- 배열을 잘못이해함
// 내가 상상한게 두명이 짝궁이 되어야 했는데 [값1, 값2]이렇게 그런데 배열로 만들면 한방에 하나의 값만 들어가야한다
// 그래서 실제로는 [값1] [값2] 이렇게 들어감, 내가 했던건 1인실에 두명씩 들어가라고 했던 것이다
// 문양과 숫자가 짝이면 1번째 칸에 문양 2번째 칸에 숫자 3번째 칸에 문양 4번째 칸에 숫자 이런식이기 때문에 값을 비교하려고 인덱스뽑는게 더 어려웠던것임....ㅜㅜ

//숫자 넣어놓고
// map
// 문자랑 숫자 같이 있는 덩어리로 (같이있는) 객체 만들어서 배열에 넣음
// 배열에 넣을때 객체로 넣고 문양이랑 숫자로 프로퍼티 설정
// 내가 원하는대로 하려면 객체안에
//

// let
//console.log(arr);
// 2차원 배열로 합치자!-실패
// 객체로 선언한 다음에 배열로 변환해보자

//카드팩 만드는 함수
function Pocker_pack() {
  //이 배열에도 생성자this 붙여줘야하.... 왜인지는 모름....
  this.card = [];
  this.init_card = function (pattern, num) {
    // 이 함수로 정의한 형태로 카드에 대한 정보를 받을것이다
    this.card.push({ pattern: pattern, num: num });
  };
}

//new로 동적할당할 수 있게 해줌 -동적 할당이 뭐지?
let pocker_pack = new Pocker_pack();
// 1차원
for (let i = 0; i < 4; i++) {
  for (let k = 1; k <= 13; k++) {
    init_pattern = pattern[i]; // 패턴모양 배열에서 뽑아와
    console.log(init_pattern);
    pocker_pack.init_card(init_pattern, k);
  }
}
//
//let pocker_pack = new Pocker_pack(); //포커팩 만든거 새로 베껴서 쓸거임
// pocker_pack = new card();
//console.log(pocker_pack);

let pick_Card = Object.entries(pocker_pack);
console.log(pick_Card);
// ㅋㅋㅋ객체로 만들어서 배열로 바꾸기 실패ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ

// pick_Card ={'card, ansdid1~13' , 'init_card, 카드만드는함수ㅋㅋㅋ'}

//컴퓨터의 랜덤으로 카드뽑기
