// 가위바위보 게임 유저랑 컴퓨터랑 하기 유저는 가위, 바위, 보 중에 하나를 낸다 컴퓨터도 마찬가지로 가위, 바위, 보를 낸다(랜덤) 결과에
// 따라 무승부, 패배, 승리를 표시한다 입력값이 1~3이 아니면 다시 처음화면으로 돌아가기
while (true) {
  // 얘네도 그때그때 다른값으로 해야하기때문에 while문 안에 있어야한다.
  let input = Number(
    prompt(
      "가위바위보 게임, 1은 가위, 2는 바위, 3은 보입니다. 숫자를 입력하세요."
    )
  );
  let COM = Math.floor(Math.random() * 10);
  let GAWI = COM < 4;
  let BAWI = COM > 3 && COM < 7;
  let BO = COM > 6 && COM < 10;

  //ctrl +shift + b
  // console.log(COM); console.log(GAWI);//boolean 일단 일일히 검사 범위적어줌 isNAN- true /
  // false로 반환해줌 숫자인지 아닌지만 판단해줌 그러니까 더 자세하게 설정하고싶으면 한번더 검사하는거
  if (isNaN(input)) {
    console.log("dkddddd");
    alert(" 범위안의 숫자만 입력해주세요");
    // 숫자외에 입력값 검사 시도1 if( (input < 1 && input >3) && (input != null && typeof(input) ==
    // 'Number')) if(input !== 1 && input !== 2 && input !== 3) => 이건 일일히 써준거
    // if(isNaN(input)&& (input !== 1 && input !== 2 && input !== 3)) 이렇게 해주니까
    // alert랑 console 자체가 실행이 안됐음 왜냐?? isNAN이 숫자인지 아닌지만 판단해주는 것이기 때문에 옆에 조건을 거는게 의미가
    // 없음 isNAN 은 숫자값이면 false 숫자값이 아니면 true를 반환해줌 그러니까 옆에 이걸 걸고 1,2,3 외의 값을 입력하면 무조건
    // 숫자이므로 false가 반환되니까   console.log("dkddddd"); alert(" 범위안의 숫자만 입력해주세요"); =>이
    // 부분이 출력이 안됐던거임 그래서 isNan으로 검사하고 한번더 1,2,3 인지 검사를 한번 더하면 됨
  } else if (input !== 1 && input !== 2 && input !== 3) {
    alert(" 범위안의 숫자만 입력해주세요");
  } else {
    switch (GAWI) {
      case true:
        if (input == 1) {
          alert("무승부입니다.");
        } else if (input == 2) {
          alert("유저가 승리했습니다.");
        } else if (input == 3) {
          alert("컴퓨터가 이겼습니다.");
        }
        break;
    }

    switch (BAWI) {
      case true:
        if (input == 1) {
          alert("컴퓨터가 승리했습니다.");
        } else if (input == 2) {
          alert("무승부입니다.");
        } else if (input == 3) {
          alert("유저가 승리했습니다.");
        }
        break;
    }

    switch (BO) {
      case true:
        if (input == 1) {
          alert("유저가 승리했습니다.");
        } else if (input == 2) {
          alert("컴퓨터가 승리했습니다.");
        } else if (input == 3) {
          alert("무승부입니다.");
        }
        break;
    }
  }
  continue;
}
