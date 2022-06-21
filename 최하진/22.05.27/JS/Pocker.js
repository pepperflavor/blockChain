//  카드 52장 포커카드 / j =11 / q=12 k=13/ Ace=1
//  1. 카드 2장을 무작위로 보여줌
//  2. 판단은 문양 상관없이 숫자만
//  3. 1턴이 지나면 사용된 카드는 빼야함(범위로 뽑은 카드도 버려짐-총3장)
//  4. 승리조건- 범위로 뽑은 카드의 작은숫잠, 큰숫자 a<이길수있는 숫자<b
// 5. 종료조건 17판 또는 돈을 다쓰거나(도박룰은 가위바위보랑 같음)  자료형 변수이름[배열크기] /* 문양을 나중에 할당 / 보여주는
// 숫자는 3개 문양 문양 의미두지말고 나중에 배정 1~13까지 숫자 랜덤픽-> 유저 것만 따로 배정해주고, 두개로 범위 설정 조건문으로 승패
// 결정
// */ let pattern = ["♦", "♥", "♣", "♠"];
let card = []; //문양 4개 * 1~13이니까 총 52장
let pattern = new Array(3); // 크기가 3인 배열 선언 패턴을 0,1,2,3으로 나눠서 배정해주기 위해서
let num = new Array(3); // 숫자도 예외인 J,K,Q,A 를 0, 1, 2, 3 의 경우로 나눠서 배정, 숫자는 그대로 비교 가능
let used_card = 0;
let user_betting = 0; //유저가 베팅할 돈
let user_money = 10000; // 초기자금
let com_betting = 10000; // 컴퓨터의 돈
//랜덤함수로 뽑은 카드
let pick_Card = 0;
//게임을 진행한 횟수
let count = 1;
//승패를 판단을 위해 변수에 값 할당
let 
//카드팩 만들기 카드에 0~51까지 담음
for (let i = 0; i < 52; i++) {
  card[i] = i;
}

//매판 3장씩 버려짐 while (user_betting != 0 && count < 18) { 1~52중에 랜덤 숫자를 뽑는다
while (count < 2) {
  for (let i = 0; i < 3; i++) {
    // 버린카드와 이번에 뽑은 카드의 합이 52가 넘지 않아야 함
    pick_Card = Math.floor(Math.random() * 51 + 1);
    //문양 안나옴ㅠㅠ
    pattern[i] = Math.floor(card[pick_Card + used_card] / 13);
    //console.log("패턴 i 값 : " + Math.floor(card[pick_Card + used_card] / 13));
    // pattern[i]의 결과값  =>  0~12 : 0 / 13~25 : 1 / 26~38 : 2 / 39~52 : 3
    num[i] = card[pick_Card + used_card] % 13;
    // 나머지가 0, 10, 11, 12 인경우 문자카드를 걸러낼 수 있음, 1~9는 숫자로
    used_card += 3;
    // console.log("used_card : 패턴바로찍 " + used_card);
    //console.log("pick_Card : 숫자바로찍 " + pick_Card);

    //============ 문양 할당 시작=======================
    switch (pattern[i]) {
      case 0:
        console.log("♦");
        break;

      case 1:
        console.log("♥");
        break;

      case 2:
        console.log("♣");
        break;

      case 3:
        console.log("♠");
        break;
    }
    //==============문양할당 끝======================
    //=========숫자할당 시작=============
    switch (num[i]) {
      case 0:
        console.log("A");
        break;

      case 10:
        console.log("J");
        break;

      case 11:
        console.log("Q");
        break;

      case 12:
        console.log("K");
        break;

      case 13:
        console.log("13임");
        break;
      default:
        console.log(num[i]);
        break;
    }
    // } else {      x + used_card > 52면     continue;   } if (pick_Card + used_card
    // <= 52) {} 승패 계산 count++; 게임 진행횟수 증가
    //
  }
  count++;
}
