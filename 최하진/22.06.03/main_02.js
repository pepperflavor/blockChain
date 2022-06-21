// 컴퓨터의 스코어
let comScore = 0;
//플레이어의 스코어
let userScore = 0;

let turn = false;

// 게임의 횟수
let gameCount = 10;

user.disabled = true;
function userShoot() {
  if (turn) {
    return;
  }
  let shootType = Math.random() < 0.5 ? 2 : 3; // 랜덤이 0.5보다 작으면 2 크면 3
  if (shootType === 2) {
    if (Math.random() < 0.5) {
      console.log("2점 성공");
      userScoreUpdate(shootType);
    } else {
      console.log("2점 슛 실패");
    }
  } else {
    if (Math.random() < 0.33) {
      console.log("3점 슛 성공");
      userScoreUpdate(shootType);
    } else {
      console.log("3점 슛 실패");
    }
  }
  textUpdate("컴퓨터 차례");
  //다 동작 후 turn을 true로
  turn = true;
}

function comShoot() {
  if (!turn) {
    return;
  }
  let shootType = Math.random() < 0.5 ? 2 : 3; // 랜덤이 0.5보다 작으면 2 크면 3
  if (shootType === 2) {
    if (Math.random() < 0.5) {
      console.log("2점 성공");
      comScoreUpdate(shootType);
    } else {
      console.log("2점 슛 실패");
    }
  } else {
    if (Math.random() < 0.33) {
      console.log("3점 슛 성공");
      comScoreUpdate(shootType);
    } else {
      console.log("3점 슛 실패");
    }
  }
  textUpdate("유저차례");
  gameCounting();
  //다 동작 후 turn을 true로
  turn = false;
}

// 함수 주는방법

//document.querySelector(".클래스 혹은 선택자/ #아이디"); 괄호 안에 요소의 클래스나 아이디 아니면 어트리뷰트 선택자
//document.getElementById()

//userScore.addEventListener(); // Id는 고유 하나만 존재하기 때문에 이렇게 사용 가능
// console.log(user);
// document.querySelector("#user").addEventListener();

//document.querySelector("#user").addEventListener();

//addEventListener 첫 매개변수는 이벤트 타입을 문자열로, 두번째 매개벼ㅑㄴ수는 이벤트 작동시
// 실행할 함수
user.addEventListener("click", function () {
  //user를 click하면 실행되는 곳
  // userDhoot 함수 실행
  userShoot();
});
computer.addEventListener("click", function () {
  //user를 click하면 실행되는 곳
  // userDhoot 함수 실행
  comShoot();
});

function userScoreUpdate(addScore) {
  //userScore에 addScore값을 증가시킨다
  userScore += addScore;
  console.log(userScore);
  document.querySelector(".player-score").innerHTML = userScore;
}

function comScoreUpdate(addScore) {
  //userScore에 addScore값을 증가시킨다
  userScore += addScore;
  console.log(computerScore);
  document.querySelector(".computer-score").innerHTML = computerScore;
}

//text 갱신하는 함수
function textUpdate(name) {
  text.innerHTML = `${name}의 차례`;
  switch (name) {
    case "유저":
      computer.disabled = true;
      user.disabled = false;
      break;

    case "컴퓨터":
      computer.disabled = false;
      user.disabled = true;
      break;
    default:
      break;
  }
}

function gameCounting() {
  gameCount--;
  // 게임 카운트 감소를 shot에 넣는다
  shots.innerHTML = gameCount;
  //게임카운트 감소
  if (gameCount === 0) {
    // 게임의 승패를 보여주고
    if (comScore > userScore) {
      text.innerHTML = "User의 승리";
    } else if (comScore < userScore) {
      text.innerHTML = "Com의 승리";
    } else {
      text.innerHTML = "무승부";
    }
    computer.disabled = true;
    user.disabled = true;
  }
}
