//컴퓨터의 스코어
let comScore = 0;
//플레이어의 스코어
let userScore = 0;

let turn = false;

//게임의 횟수
let gameCount = 10;

computer.disabled = true;
function userShoot() {
  if (turn) return;
  //turn이 true면 return문으로 함수 종료
  let shootType = Math.random() < 0.5 ? 2 : 3;
  if (shootType === 2) {
    if (Math.random() < 0.5) {
      console.log("user : 2점 성공");
      userScoreUpdate(shootType);
    } else {
      console.log("user : 2점 슛 실패");
    }
  } else {
    if (Math.random() < 0.33) {
      console.log("user : 3점 슛 성공");
      userScoreUpdate(shootType);
    } else {
      console.log("user : 3점 슛 실패");
    }
  }
  textUpdate("태수");
  // 다 동작후 turn을 true로
  turn = true;
}

function comShoot() {
  if (!turn) return;
  //turn이 false면 return문으로 함수 종료
  let shootType = Math.random() < 0.5 ? 2 : 3;
  if (shootType === 2) {
    if (Math.random() < 0.5) {
      console.log("com : 2점 성공");
      comScoreUpdate(shootType);
    } else {
      console.log("com : 2점 슛 실패");
    }
  } else {
    if (Math.random() < 0.33) {
      console.log("com : 3점 슛 성공");
      comScoreUpdate(shootType);
    } else {
      console.log("com : 3점 슛 실패");
    }
  }
  textUpdate("경환");
  gameCounting();
  // 다 동작후 turn을 false로
  turn = false;
}

//ID는 고유 하나만 존재하기 때문에
// console.log(user);
// console.log(document.querySelector('#user'));

// user.addEventListener()
// document.querySelector('#user').addEventListener()
// .addEventListener() 이벤트 함수 설정
// document.querySelector("요소의 클래스나 아이디 아니면 어트리뷰트 선택자") 요소 선택자
// document.getElementById

//addEventListener 첫 매개변수는 이벤트 타입을 문자열로, 두번째 매개변수는 이벤트작동시
//실행할 함수
user.addEventListener("click", function () {
  //user를 click클릭하면 실행되는 곳
  //userShoot 함수 실행
  userShoot();
});
computer.addEventListener("click", function () {
  //com를 click클릭하면 실행되는 곳
  //comShoot 함수 실행
  comShoot();
});

function userScoreUpdate(addScore) {
  //userScore에 addScore값을 증가 시킨다.
  userScore += addScore;
  console.log(userScore);
  document.querySelector(".player-score").innerHTML = userScore;
}

// 알트 + 쉬프트 누르고 아래 방향키는 드래그한 코드 복사

function comScoreUpdate(addScore) {
  //comScore에 addScore값을 증가 시킨다.
  comScore += addScore;
  console.log(comScore);
  document.querySelector(".computer-score").innerHTML = comScore;
}

// text 갱신 하는 함수
function textUpdate(name) {
  text.innerHTML = `${name}의 차례`;
  switch (name) {
    case "경환":
      computer.disabled = true;
      user.disabled = false;
      break;
    case "태수":
      computer.disabled = false;
      user.disabled = true;
      break;
    default:
      break;
  }
}

function gameCounting() {
  gameCount--;
  //게임 카운트 감소를 shots에 넣는다.
  shots.innerHTML = gameCount;
  //게임 카운트 감소
  if (gameCount === 0) {
    //게임의 승패를 보여주고
    if (comScore > userScore) {
      text.innerHTML = "태수의 승리";
    } else if (comScore < userScore) {
      text.innerHTML = "경환의 승리";
    } else {
      text.innerHTML = "무승부";
    }
    computer.disabled = true;
    user.disabled = true;
  }
}
