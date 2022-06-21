//let lottoNumber = [];

let myNum = new Array(); //뽑은 6개 담을 배열
let lottoNumrand = []; // 로또 숫자각각 뽑힐 확률을 담은 배열
let pick = 0;
let random = 0;
let set_lotto = [];
let count = 0;
function randomInt() {
  //1~45사이의 랜덤한 수 뽑아주는 함수
  pick = Math.floor(Math.random() * 44 + 1);
  console.log("pick : " + pick);
}

//document.write("이번주 로또번호는<br><br>");
while (count <= 1) {
  //여기까지 일단 6개 뽑아서 배열에 넣어줌
  for (let j = 0; j < 6; j++) {
    randomInt();
    myNum[j] = pick;
  }
  //set으로 중복값 제거 - set은 배열이 아님
  let set_myNum = new Set(myNum);
  set_lotto = Array.from(set_myNum);
  if (set_lotto.length == myNum.length) {
    document.write("이번주 로또번호는<br><br>");
    for (let k = 0; k < 6; k++) {
      //최종로또번호 출력
      document.write(k + 1 + "번째 번호");
      document.write(set_lotto[k] + "<br>" + "<br>");
    }
  } else if (set_lotto.length == myNum.length) {
    //document.write("중복숫자가 있기 때문에 다시 숫자를 뽑습니다.");
    continue;
    count--;
  }
  count++;
}
