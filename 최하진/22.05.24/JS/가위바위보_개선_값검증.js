alert("가위, 바위, 보 게임을 시작합니다.");
// 유저의 패 입력받기

// 유저 돈
let user_money = 10000;
//컴퓨터 돈
let computer_money = 10000;

//유저가 입력하는 베팅할 돈
let betting_money = 0;
// 1000원 단위로 받기위해 한번 걸러낸 돈
let resultMoney = 0;

//구경꾼이 나에게 주는 돈
let helper_money = 0;
//구경꾼이 나에게 돈을 줄 확률, 0~100 두 자리수 정수로 받음
let helper = 0;

//승패 여부 검사
let winner = 0; // 1: 유저가 이김 , 2 : 유저가 짐(컴퓨터가 이김), 0 : 무승부

//게임이 진행된 횟수
let count = 0;


//게임 그만하고 싶다면
let game = "그만";

// 입력받은 돈중 추가분을 삭제하고 내가 원하는 단위만큼만 가려서 betting money로 쓰는거
// 코드 원문
// function priceCalc(betting_money, unit) { //10066 // 100
// // 100.66 -> 100
//     const calcMoney = Math.floor (inputMoney / unit)
// // 100-> 10000
//     const resultMoney = calcMoney * unit
//     return resultMoney
// }

//내 변수에 맞게 변형
function right_Money(inputMoney, unit) {
  //10066 // 100
  // 100.66 -> 100
  console.log("나옴");
  const calcMoney = Math.floor(inputMoney / unit);
  // 100-> 10000
  let resultMoney = calcMoney * unit;
  return resultMoney;
}

//10166
// const inputMoney = Number(prompt("가격을 입력해주세요."));
// priceCalc(inputMoney, 1000);

//구경꾼 이 내게 돈을 줄 확률 계산 & 만약 준다면 얼마나 줄지 계산
//내가 건돈의 1.5배를 준다.
//구경꾼이 내게 돈을 줄 확률은 30%
function help_money(betting_money, helper) {
  console.log("help_money()" + "betting_money: " + betting_money + " helper: " + helper);

  if (helper >= 70) {
    helper_money = betting_money * 1.5;
  } else {
    helper_money = 0;
  }
  console.log("help_money()" + betting_money, helper);
  return helper_money;
}

//리턴값은 하나만 줄 수 있음
// 나와 컴퓨터 사이에만 계산한것(구경꾼 돈 계산 X)
// 유저 돈 계산하기
function set_user_money(betting_money, user_money, computer_money, winner) {
  if (winner == 1) {
    user_money = (betting_money * 2 + user_money);
    computer_money -= betting_money * 2;
  } else if (winner == 2) {
    // 컴퓨터가 이겼을 때
    user_money = (user_money - betting_money * 2);
    computer_money += betting_money * 2;
  } else if(winner == 0) {
    user_money = user_money - betting_money;
  }
  return user_money;
  //computer_money;
}

//컴퓨터의 돈 계산하기
function set_computer_money(betting_money, user_money, computer_money, winner) {
  if (winner == 1) {
    user_money = betting_money * 2 + user_money;
    computer_money -= betting_money * 2;
  } else if (winner == 2) {
    // 컴퓨터가 이겼을 때
    user_money -= betting_money * 2;
    computer_money += betting_money * 2;
  } else if(winner == 0){
    user_money = user_money - betting_money;
  }
  return computer_money;
}
//////////////////////////////////게임시작/////////////////////////////////////////////
//최대 기회 10번
while (count <= 9) {
  helper = Math.floor(Math.random() * 100 + 1);
  // 유저가 돈을 다 잃으면 끝남
  if (user_money != 0 && computer_money != 0) {
    alert(
      "어서오세요! 가위바위보 게임에 오신것을 환영합니다.!" +
        "\n 1. 게임에서 이기면 베팅한 돈의 2배 적립!" +
        "\n 2. 졌을 때 : 베팅한 돈의 2배 차감 " +
        "\n 3. 무승부일 때 : 베팅한 돈만큼 차감"
    );
    //베팅할 금액 입력받기
    let betting_money = Number(
      prompt(
        " 베팅할 돈을 적어주세요. 최소 베팅금액 :1000원  " +
          "\n  현재 고객님의 베팅가능 금액 : " + user_money));
    //베팅할 돈 천원단위인지 검증하기
    console.log("여기보세요" + betting_money);
    if (isNaN(betting_money)) {
      alert(" 1000원 단위로 숫자만 입력해주세요 ");
    } else if (betting_money > user_money) {
      alert(
        " 고객님의 보유 잔고보다 큰 금액은 걸 수 없습니다. " +
          "\n 현재 고객님의 잔고 : " + user_money );
          continue;
        }
        
    // 유저가 본인의 잔고내에서 숫자를 입력했을 때 1000원 단위인지 검사하기
    else {
      console.log("betting_money 유저가 입력한베팅돈 0이아닐때 : " + betting_money);

        
    //함수로 리턴해준값을 받아줄게 필요하다
    betting_money = right_Money(betting_money, 1000);
    console.log("betting_money 함수 빠져나온값 : " + betting_money);

      alert("고객님이 입력한 베팅금액은 : " + betting_money + "로 설정됩니다.");
    }
    //가위바위 보 내기
    let USER = Number(
      prompt("1:가위  2:바위  3:보 입니다. 숫자를 입력하세요 : ")
    );

    //
    //
    //가위바위보 입력한 값이 1, 2, 3 중에 하나인지 검증하기
    if (isNaN(USER)) {
      alert("범위 안의 숫자만 입력해주세요");
    } else if (USER !== 1 && USER !== 2 && USER !== 3) {
      alert(" 범위안의 숫자만 입력해주세요");
    } else {
      console.log("USER " + USER);

      // 컴퓨처의 패 결정
      let COM = Math.floor(Math.random() * 10);
      if (COM >= 7 && COM <= 9) {
        COM = 3;
        console.log("컴퓨터= 보");
      } else if (COM >= 4 && COM <= 6) {
        COM = 2;
        console.log("컴퓨터= 바위");
      } else if (COM >= 0 && COM <= 3) {
        COM = 1;
        console.log("컴퓨터= 가위");
      }

      //승부 판단하기
      if (USER == COM) {
        alert("무승부입니다.");
        winner = 0; //무승부
      }
      // 유저가 가위를 냈을때
      else if (USER == 1 && COM == 2) {
        alert("유저 : 가위, 컴퓨터 : 바위  /   COMPUTER가 이겼습니다.");
        winner = 2;
      } else if (USER == 1 && COM == 3) {
        alert("유저 : 가위, 컴퓨터 : 보   /  USER가 이겼습니다.");
        winner = 1;
      }
      // 유저가 바위를 냈을때
      else if (USER == 2 && COM == 1) {
        alert("유저 : 바위, 컴퓨터 : 가위   /  USER가 이겼습니다.");
        winner = 1;
      } else if (USER == 2 && COM == 3) {
        alert("유저 : 바위, 컴퓨터 : 보   \n  COMPUTER가 이겼습니다.");
        winner = 2;
      }
      // 유저가 보를 냈을때
      else if (USER == 3 && COM == 1) {
        alert("유저 : 보, 컴퓨터 : 가위   \n COMPUTER가 이겼습니다.");
        winner = 2;
      } else if (USER == 3 && COM == 2) {
        alert("유저 : 보, 컴퓨터 :바위  \n  USER가 이겼습니다.");
        winner = 1;
      }

      //구경꾼이 기부할 수도 있는 돈 계산
      helper_money = help_money(betting_money, helper);
      console.log("helper_money: " + helper_money);

      //승패에 따른 돈계산 
      user_money = set_user_money(betting_money, user_money, computer_money, winner) + helper_money;
      console.log("user_money: " + user_money);

      //게임을 한번 하고나면 횟수 세기
      count++;

      // 승패결과 창에 띄워주기
      if (winner == 1) {
        alert(
          " 축하드립니다! 게임에서 이기셨어요! \n" + user_money + " 원 이 되셨습니다. \n" 
          + " 구경꾼이 기부하신 금액 : " +  helper_money);
        alert(" 현재 진행한 게임횟수는 : " + count + " 번 입니다. ");
      } else if (winner == 2) {
        alert(
          " 저런... 게임에서 지셨군요? 다시 도전해보세요! \n" 
          + " 현재 고객님의 남은 금액 : " + user_money +
            " \n 구경꾼이 기부하신 금액 : " +
            helper_money
        );
        alert(" 현재 진행한 게임횟수는 : " + count + " 번 입니다. ");
      } else {
        alert(
          " 띠용 무승부!!! 다시 한번  더 도전해 보세요! " +
            "\n 현재 고객님의 남은 금액 : " +
            user_money +
            "\n 구경꾼이 기부하신 금액 : " +
            helper_money
        );
        alert(" 현재 남은 게임횟수는 : " + count + " 번 입니다. ");

        //   let game = prompt(
        //     "게임을 그만하시려면 띄어쓰기 없이 '그만' 이라고 입력하세요"
        //   );

        //   //게임 그만할건지 판단
        //   if (game == "그만") {
        //     alert("즐거우셨나요? 다음에 또 오세요   ^_^  ");
        //     break;
        //   } else {
        //     continue;
        //   }
      }
    }
  }
}
