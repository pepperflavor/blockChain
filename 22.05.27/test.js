let card = []; //문양 4개 * 1~13이니까 총 52장
let pattern = new Array(3); // 크기가 3인 배열 선언 패턴을 0,1,2,3으로 나눠서 배정해주기 위해서
let num = new Array(3); // 숫자도 예외인 J,K,Q,A 를 0, 1, 2, 3 의 경우로 나눠서 배정, 숫자는 그대로 비교 가능
let used_card = 0;
let user_betting = 0; //유저가 베팅할 돈
let user_money = 10000; // 초기자금
let com_money = 10000; // 컴퓨터의 돈
//유저의 카드 보여주기 위한 변수
let user_num = 0;
let user_pattern = "♦";

// 컴퓨터 패보여주기위한 변수
let com_pattern = ["♦", "♦"]; // 초기값이랑 크기 이런 문자 출력하려면 어떻게 설정해야하는지
let com_num = 0;
//랜덤함수로 뽑은 카드
let pick_Card = 0;
//게임을 진행한 횟수
let count = 1;

//카드팩 만들기 카드에 0~52까지 담음
for (let i = 0; i < 52; i++) {
  card[i] = i + 1;
}

//카드덱 섞기
// 화살표 함수는 항상 익명이다
// function suffle(array) {
//   array.sort(() => Math.random() - 0.5);
// }
//for (let x = 0; x < 1000; x++) {
//   suffle(card);
// }
//피셔 알고리즘으로 랜덤으로 섞기
function fisherShuffle(arr) {
  for (let x = arr.length - 1; x > 0; x--) {
    let y = Math.floor(Math.random() * (x + 1));
    [arr[x], arr[y]] = [arr[y], arr[x]];
  }
}

//유저가 입력한 돈 1000원 단위로 검증하기
function right_Money(input_Money, unit) {
  const calmoney = Math.floor(input_Money / unit);
  let resultmoney = calmoney * unit;
  return resultmoney;
}

for (let i = 0; i < 3; i++) {
  //카드셔플
  fisherShuffle(card);
  // 버린카드와 이번에 뽑은 카드의 합이 52가 넘지 않아야 함
  pick_Card = Math.floor(Math.random() * 51 + 1); //셔플하지 않았을 때 이렇게 설정해줘도 되는지..?
  // console.log(pick_Card+" pick_Card"); 문양 안나옴ㅠㅠ
  pattern[i] = Math.floor(card[pick_Card] / 13);
  // console.log("패턴 i 값 : " + Math.floor(card[pick_Card + used_card] / 13));
  // pattern[i]의 결과값  =>  0~12 : 0 / 13~25 : 1 / 26~38 : 2 / 39~52 : 3
  num[i] = card[pick_Card] % 13;
  // 나머지가 0, 10, 11, 12 인경우 문자카드를 걸러낼 수 있음, 1~9는 숫자로
  used_card += 3; //사용한 카드 버려줌

  switch (pattern[i]) {
    case 0:
      console.log("♦");
      user_pattern = "♦";
      if (pattern[i] == 0) {
        com_pattern[0] = "♦";
      } else if (pattern[i] == 1) {
        com_pattern[1] = "♦";
      }
      break;

    case 1:
      console.log("♥");
      user_pattern = "♥";
      if (pattern[i] == 0) {
        com_pattern[0] = "♥";
      } else if (pattern[i] == 1) {
        com_pattern[1] = "♥";
      }
      break;

    case 2:
      console.log("♣");
      user_pattern = "♣";
      if (pattern[i] == 0) {
        com_pattern[0] = "♣";
      } else if (pattern[i] == 1) {
        com_pattern[1] = "♣";
      }
      break;

    case 3:
      console.log("♠");
      user_pattern = "♠";
      if (pattern[i] == 0) {
        com_pattern[0] = "♠";
      } else if (pattern[i] == 1) {
        com_pattern[1] = "♠";
      }
      break;
  }
  //==============문양할당 끝======================
  //=========숫자할당 시작=============
  switch (num[i]) {
    case 0:
      console.log("A");
      user_num = "A";
      if (num[i] == 0) {
        com_num[0] = "A";
      } else if (num[i] == 1) {
        com_num[1] = "A";
      }
      break;

    case 10:
      console.log("J");
      user_num = "J";
      if (num[i] == 0) {
        com_num[0] = "J";
      } else if (num[i] == 1) {
        com_num[1] = "J";
      }
      break;

    case 11:
      console.log("Q");
      user_num = "Q";
      if (num[i] == 0) {
        com_num[0] = "Q";
      } else if (num[i] == 1) {
        com_num[1] = "Q";
      }
      break;

    case 12:
      console.log("K");
      user_num = "K";
      if (num[i] == 0) {
        com_num[0] = "K";
      } else if (num[i] == 1) {
        com_num[1] = "K";
      }
      break;

    default:
      console.log(num[i]);
      Number(user_num);
      user_num = num[i] + 1;
      Number(com_num[0]);
      Number(com_num[1]);
      if (num[i] == 0) {
        com_num[0] = num[i] + 1;
      } else if (num[i] == 1) {
        com_num[1] = "K";
      }
      break;
  }

  console.log("num[0] 스위치문 " + num[0]);
  console.log("num[0] 스위치문 타입 " + typeof num[0]);
  console.log("num[1] 스위치문 " + num[1]);
  console.log("num[1] 스위치문 " + typeof num[1]);
  console.log("num[2] 스위치문 " + num[2]);
  console.log("num[2] 스위치문 " + typeof num[2]);
  if (num[0] - num[1] >= 0) {
    //alert
    console.log(
      "컴퓨터의 패 : " +
        com_pattern[1] +
        num[1] +
        " < " +
        com_pattern[0] +
        num[0]
    );
  } else if (num[0] - num[1] < 0) {
    //alert
    console.log(
      "컴퓨터의 패 : " +
        com_pattern[0] +
        num[0] +
        " < " +
        com_pattern[1] +
        num[1]
    );
  }
}
