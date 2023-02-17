/*
실습과제

숫자야구게임만들기
1. 컴퓨터는 임의의 숫자 3개를 낸다.
2. 유저는 아무거나 낼 수 있다.

ex) 컴 1 2 3
  유저 7 8 9
=> 아웃
====================
4 5 6
5 7 9 1볼(숫자는 하나 같고 자리가 틀림)
===========================
1,2,3
1,2,4 => 2스트라이크(숫자 2개맞고 자리도 동일)
======================================
- 같은숫자 같은 인덱스값 = > 스트라이크
- 3스트라이크면 =>홈런 승리
- 플레이 기회는 자유
*/

//컴퓨터가 내는 공 번호가 담긴 배열
let com_ball = [];
// 컴퓨터가 공으로뽑은 번호
let ball = 0;

//유저가 내는 공을 받을 배열
let user_ball = [];

//유저가 낸 공번호
let set_ball = 0;
let count = 1;

// 컴퓨터의 처음뽑은 수는 변하지 않는다  user_ball의 중복검사를 위해 객체로 담아줄 것 let user_shoot = 0; let
// set_ball=0; com이 배열도  객체다! ㅋㅋㅋㅋ다른줄알고 바꿔줘야하는줄ㅠㅠ 1~9사이에서 중복되지 않게 임의의 숫자 3개를 뽑는다
for (let i = 1; i <= 3; i++) {
  ball = Math.floor(Math.random() * 8 + 1); //1~9사이의 숫자 뽑기
  // include는 '===' 연산자를 사용함
  if (com_ball.indexOf(ball) == -1) {
    com_ball.push(ball);
  } else if (com_ball.indexOf(ball) != -1) {
    i--;
  }
}
console.log("컴퓨터가 고른 공 :" + com_ball);

// //////객체 배열로 변환////////////// 컴퓨터가 뽑은걸 배열로 바꿔주려고 했는데 이미 배열형태이다.ㅠㅠ 배열도  유저가 공을
// 3개 내게 한다.  중복되지 않은 숫자로 내게 검사한다.
alert("숫자 야구게임을 시작합니다.\n *총 3번 입력합니다.* ");

while (count <= 2) {
  alert(count + " 번 째 게임을 시작합니다.");
  while (true) {
    //delete user_ball[];
    for (let i = 0; i < 3; i++) {
      alert(i + 1 + " 번 째 공을 던집니다. ");
      set_ball = Number(
        prompt(
          "1~9사이의 숫자를 입력하세요 :   \n ** 주의 같은 숫자는 입력하면 안됩니다.**"
        )
      );
      //유저가 입력할 수 있는 데이터 제한하기
      console.log();
      if (isNaN(set_ball)) {
        alert(" 범위안의 숫자만 입력하세요\n 방금 입력한 값 : " + set_ball);
        i--;
      } else if (0 < set_ball && set_ball <= 9) {
        if (user_ball.indexOf(set_ball) == -1) {
          user_ball.push(set_ball);
          if (user_ball.length == 3) {
            // 중복된 숫자 없이 공을 3개 잘 냈으면 끝
            alert("공을 3개 다 던지셨습니다.\n 승패를 확인합니다.");
            break;
          }
          alert(set_ball + "번 공을 던지셨습니다.\n 다음 공을 입력해주세요");
        } else if (user_ball.indexOf(set_ball) != -1) {
          alert("중복된 숫자는 입력할 수 없습니다.\n 다시 입력해주세요.");
          i--;
          continue;
        }
      } else {
        alert("범위 안의 숫자를 입력하세요 ");
        i--;
      }
    }
    break;
  }

  // 두 배열 비교해서 볼. 스트라이크 검사 com_ball -컴퓨터 볼 user_ball- 유저볼 const winner = number;
  // 스트라이크 갯수 계산 let strike = []; strike = com_ball.concat(user_ball); let
  // check_strike = new Set(strike); console.log("set으로 바꿔줌" + check_strike);
  // console.log("set으로 바꿔줌" + typeof(check_strike)); set은 배열로 인식이 안된다. 배열로 다시
  // 바꿔줘야함 check_strike = Array.from(check_strike); console.log("배열로 바꿔줌" +
  // check_strike); console.log(check_strike); console.log("배열로 바꿔줌" +
  // typeof(check_strike)); console.log("스트라이크 개수 : " + (6 -
  // check_strike.length)); 스트라이크인 공만 제거한 배열 재생성 strike에서 두번이상 나온값을 찾아서 -> 이걸 제거한
  // 각각 com_ball/ user_ball 배열을 새로 만들고 각각 값비교 ball++

  let check_strike = 0;
  let check_ball = 0;
  // 스트라이크인
  for (let j = 0; j < 3; j++) {
    for (let k = 0; k < 3; k++) {
      //com의 0번째 인덱스와 같은 값이 있으면 인덱스가 같은건지 비교
      if (com_ball[j] == user_ball[k]) {
        if (com_ball.indexOf(com_ball[j]) != user_ball.indexOf(user_ball[k])) {
          check_ball++;
        } else if (
          com_ball.indexOf(com_ball[j]) == user_ball.indexOf(user_ball[k])
        ) {
          check_strike++;
        }
      }
    }
  }

  //볼 개수 계산 컴퓨터와 유저가 같은값을 뽑았으면 그걸 제거하고 남은 배열로 볼이 몇개인지 비교

  alert(
    count +
      " 번째 게임 결과 발표!!!! \n 스트라이크 갯수 : " +
      check_strike +
      "\n 볼의 갯수 : " +
      check_ball
  );
  alert(count + " 번째 게임에서 \n 내가 낸 공의 번호 : " + user_ball);
  console.log("이번판 유저가 낸 공 번호 : " + user_ball);
  console.log("이번판 볼 갯수 : " + check_ball);
  console.log(check_strike + "슼 타입");
  console.log("이번판 스트라이크 갯수 : " + check_strike);

  //계속 안쌓이게 배열 비워 줌
  //splice(지우기 시작할 인덱스번호, 시작인덱스부터 몇개 지울건지)
  com_ball.splice(0, 3);
  user_ball.splice(0, 3);
  count++;
}
