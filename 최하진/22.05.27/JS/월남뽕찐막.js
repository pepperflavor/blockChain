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
let com_money = 10000; // 컴퓨터의 돈
//유저의 카드 보여주기 위한 변수
let user_num = " ";
let user_pattern = "♦";
let show_pattern = "";

//컴퓨터 패보여주기 위한 변수
let com_num = []; // 유저의 문양
let com_pattern = ["♦", "♦"]; // 초기값이랑 크기 이런 문자 출력하려면 어떻게 설정해야하는지
//랜덤함수로 뽑은 카드
let pick_Card = 0;
//게임을 진행한 횟수
let count = 1;

//카드팩 만들기 카드에 0~51까지 담음
for (let i = 0; i < 52; i++) {
  card[i] = i;
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
// k 가 소문자였고ㅋㅋㅋㅋㅋ 마지막에 typeof 랑비교하는게 Number 라고 썼었는ㄷ[] "number"라고 써야 한다. 쌍따옴표 안에 소문자ㅎㅎㅎ^ㅡ^

//유저 결과에서 문양or 숫자뽑아주기
// resultpattern(user_num, num[2], user_pattern)
function resultpattern(input_num, renum, user_pattern) {
  if (input_num === "A") {
    return "A" + renum;
  } else if (input_num === "J") {
    return "J" + renum;
  } else if (input_num === "Q") {
    return "Q" + renum;
  } else if (input_num === "K") {
    return "K" + renum;
  } else if (typeof input_num === "number") {
    let result = input_num;

    return user_pattern + result;
  }
  console.log(typeof input_num);
}

//매판 3장씩 버려짐 while (user_betting != 0 && count < 18) { 1~52중에 랜덤 숫자를 뽑는다
alert("어서오세요!! \n ☆★월남뽕 게임★☆에 오신것을 환영합니다!!");
while (count <= 3) {
  // //카드팩 수정해주기(사용한 카드는 버리기)
  // for (let k = 0; k < card.length - used_card; k++) {
  //   // k를 랜덤한 숫자로 바꿔주자
  //   if (card.indexOf[k] == -1) {
  //     card.push(k);
  //   } else if (card.indexOf[k] != -1) {
  //     card.splice(card.indexOf[k], 1);
  //   }
  // }
  fisherShuffle(card);
  if (user_money <= 0 || com_money <= 0) {
    break;
  } else if (used_card == 52) {
    alert(
      "남은 카드가 없기 때문에 게임이 종료됩니다. \n 이용해주셔서 감사합니다."
    );
    break;
  } else if (count == 17) {
    alert(
      "최대 게임 횟수만큼 진행하셨기 때문에 게임이 종료됩니다.\n 이용해주셔서 감사합니다."
    );
  } else {
    for (let i = 0; i < 3; i++) {
      // 버린카드와 이번에 뽑은 카드의 합이 52가 넘지 않아야 함
      pick_Card = Math.floor(Math.random() * 51 + 1); //셔플하지 않았을 때 이렇게 설정해줘도 되는지..?

      pattern[i] = Math.floor(card[i + used_card] / 13); //문양
      // console.log("패턴 i 값 : " + Math.floor(card[pick_Card + used_card] / 13));
      // pattern[i]의 결과값  =>  0~12 : 0 / 13~25 : 1 / 26~38 : 2 / 39~52 : 3
      num[i] = card[i + used_card] % 13; // 숫자
      // 나머지가 0, 10, 11, 12 인경우 문자카드를 걸러낼 수 있음, 1~9는 숫자로
      used_card += 3; //사용한 카드 버려줌

      switch (pattern[i]) {
        case 0:
          console.log("♦");
          user_pattern = "♦";
          if (i == 0) {
            com_pattern[0] = "♦";
          } else if (i == 1) {
            com_pattern[1] = "♦";
          }
          break;

        case 1:
          console.log("♥");
          user_pattern = "♥";
          if (i == 0) {
            com_pattern[0] = "♥";
          } else if (i == 1) {
            com_pattern[1] = "♥";
          }
          break;

        case 2:
          console.log("♣");
          user_pattern = "♣";
          if (i == 0) {
            com_pattern[0] = "♣";
          } else if (i == 1) {
            com_pattern[1] = "♣";
          }
          break;

        case 3:
          console.log("♠");
          user_pattern = "♠";
          if (i == 0) {
            com_pattern[0] = "♠";
          } else if (i == 1) {
            com_pattern[1] = "♠";
          }
          break;
      }
      //==============문양할당 끝====================== =========숫자할당 시작=============
      switch (num[i]) {
        case 0:
          console.log("A");
          user_num = "A";
          num[i] = 1;
          if (i == 0) {
            com_num[0] = "A";
          } else if (i == 1) {
            com_num[1] = "A";
          }
          break;

        case 10:
          console.log("J");
          user_num = "J";
          num[i] = 10;
          if (i == 0) {
            com_num[0] = "J";
          } else if (i == 1) {
            com_num[1] = "J";
          }
          break;

        case 11:
          console.log("Q");
          user_num = "Q";
          num[i] = 11;
          if (i == 0) {
            com_num[0] = "Q";
          } else if (i == 1) {
            com_num[1] = "Q";
          }
          break;

        case 12:
          console.log("K");
          user_num = "K";
          num[i] = 12;
          if (i == 0) {
            com_num[0] = "K";
          } else if (i == 1) {
            com_num[1] = "K";
          }
          break;

        default:
          console.log(num[i]);
          num[i] = num[i] + 1;

          Number(user_num);
          user_num = num[i] + 1;

          if (i == 0) {
            Number(com_num[0]);
            com_num[0] = num[i] + 1;
          } else if (i == 1) {
            Number(com_num[1]);
            com_num[1] = num[i] + 1;
          }
          break;
      }
    }
  }

  //분기마다 조건
  if (num[0] - num[1] >= 0) {
    alert(
      "컴퓨터의 패 : " +
        com_pattern[1] +
        num[1] +
        " < " +
        com_pattern[0] +
        num[0]
    );
  } else if (num[0] - num[1] < 0) {
    alert(
      "컴퓨터의 패 : " +
        com_pattern[0] +
        num[0] +
        " < " +
        com_pattern[1] +
        num[1]
    );
  }
  alert(
    "패가 결정되었습니다. 배팅할 금액을 입력해주세요. \n 배팅을 원하지 않으시면 ' 0 '을 입력해주세요"
  ); //\n 배팅을 원하지 않는다면 '0'을 입력하세요.
  user_betting = Number(prompt(" 최소 배팅 금액은 1000원 단위입니다."));
  // if (user_betting == 0) {
  //     alert("이번 게임에서 배팅을 하지 않았기 때문에 다음 게임으로 진행됩니다.");
  //     continue;
  if (isNaN(user_betting)) {
    alert("1000원 단위로 숫자만 입력해주세요");
    continue;
  } else if (user_betting > user_money) {
    alert("고객님의 보유 잔고보다 큰 금액은 걸 수 없습니다.");
    continue;
  } else if (user_betting == 0) {
    alert("이번판은 배팅을 하지 않으셨기 때문에 다음판으로 진행됩니다.");
    count++;
    continue;
  } else {
    user_betting = right_Money(user_betting, 1000);
    alert(
      "고객님이 입력하신 배팅 금액은 : " + user_betting + " 원 으로 설정됩니다."
    );
    // console.log(num[2]+" 유저 숫자 "); console.log(pattern[2] + "유저 패턴");

    if (
      (num[0] < num[2] && num[2] < num[1]) ||
      (num[1] < num[2] && num[2] < num[0])
    ) {
      //게임에서 이겼을 때 돈계산
      user_money = user_money - user_betting + user_betting * 2;
      com_money = com_money - user_betting * 2;

      alert(" 배팅에 성공했습니다!!! ");
      alert(
        ` 고객님의 카드 :  ${resultpattern(user_num, num[2], user_pattern)}
      `
      );

      console.log("user_num " + user_num);
      console.log("num[2] " + num[2]);
      console.log("user_pattern " + user_pattern);
      console.log("함수값" + resultpattern(user_num, num[2], user_pattern));

      alert("고객님이 얻은 돈 : " + user_betting * 2 + " 원");
      alert(" 고객님의 총 잔액 = " + user_money);
    } else {
      //게임에서 졌을때 돈계산
      user_money = user_money - user_betting - user_betting * 2;
      com_money = com_money + user_betting * 2;
      alert(" OMG !! 배팅에 실패 했습니다. ㅜ ㅜ");
      alert(
        ` 고객님의 카드 :  ${resultpattern(user_num, num[2], user_pattern)}
      `
      );
      console.log("user_num " + user_num);
      console.log("num[2] " + num[2]);
      console.log("user_pattern " + user_pattern);
      console.log("함수값" + resultpattern(user_num, num[2], user_pattern));
      alert("고객님이 잃은 돈 : " + user_betting * 2 + " 원");
      alert(" 고객님의 총 잔액 = " + user_money);
    }
    // alert(" 고객님의 총 잔액 = " + user_money);
    if (user_money <= 0) {
      alert(" 고객님의 보유금액이 없으므로 게임이 종료됩니다.");
      break;
    } else if (com_money <= 0) {
      alert("더이상 딸 수 있는 돈이 없기 때문에 게임이 종료됩니다.");
      break;
    } else {
      // 돈
    }
  }
  count++;
}

// 게임회차 제대로 카운팅 안됨 0입력해서 배팅 안했을 시에
// 버린카드 맞는지 확인
