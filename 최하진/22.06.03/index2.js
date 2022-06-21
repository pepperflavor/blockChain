//컴퓨터의 스코어
let comScore = 0;
//플레이어의 스코어
let userScore = 0;

//첫차례는 유저부터이기 때문에
computer.disabled = true;
//유저가 농구공 던짐
function userShoot() {
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
  //한바퀴
  textUpdate("user");
}

// 컴퓨터가 던지는 공 계산
function comShoot() {
  // 랜덤함수를 돌려서 얻은 값이 0.5보다 작으면 2 크면 3
  let shootType = Math.random() < 0.5 ? 2 : 3;
  if (shootType === 2) {
    //위에서 2에 걸려서 내려왔음 2점슛의 성공여부 판단
    if (Math.random() < 0.5) {
      console.log("computer : 2점 성공");
      comScoreUpdate(shootType);
    } else {
      console.log("computer : 2점 슛 실패");
    }
  } else {
    if (Math.random() < 0.33) {
      console.log("computer : 3점 슛 성공");
      comScoreUpdate(shootType);
    } else {
      console.log("computer : 3점 슛 실패");
    }
  }
}

// querySelectorAll()은 파라미터로 지정해준 div 안의 값을 가져온다
// 함수로 html에 연산값을 띄워준다

user.addEventListener("click", function () {
  userShoot();
});

computer.addEventListener("click", function () {
  comShoot();
});

// 유저의 점수계산 & 화면에 띄워주기
function userScoreUpdate(addScore) {
  userScore += addScore;
  console.log(userScore);

  // querySelector : 제공한 CSS 선택자를 만족하는 첫 번째 Element 객체. 결과가 없다면 null.
  // document-돔에서(전문에서), querySelector = 선택자(.player-score)를 만족하는
  //태그들중 가장 첫번째 것을 가져와서 해당 태그 안의 value에 userScore를 대입해라
  document.querySelector(".player-score").innerHTML = userScore;
}

// 컴퓨터의 점수계산
function comScoreUpdate(addScore) {
  comScore += addScore;
  console.log(comScore);
  document.querySelector(".computer-score").innerHTML = comScore;
}

//누구의 차례인지 text갱신하는 함수
function textUpdate(name) {
  textUpdate.innerHTML = `${name}의 차례`;
  switch (name) {
    case "user":
      computer.disabled = true;
      user.disabled = false;
      break;

    case computer:
      computer.disabled = false;
      user.disabled = true;
      break;

    default:
      break;
  }
}

// 게임횟수 세는 함수
function gameCounting() {
  gameCount--;
  // 감소된 게임횟수를 shot에 넣어줌
  shots.innerHTML = gameCount;
  if (gameCount == 0) {
    // 게임을 다 해서 0이 되면
    if (userScore > comScore) {
      textUpdate.innerHTML("user의 승리!");
    } else if (userScore < comScore) {
    }
  }
}
