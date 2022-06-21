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

while (count <= 5) {
  //여기까지 일단 6개 뽑아서 배열에 넣어줌
  for (let j = 0; j < 6; j++) {
    randomInt();
    myNum[j] = pick;
  }
  //set으로 중복값 제거 - set은 배열이 아님
  let set_myNum = new Set(myNum);
  //console.log(set_myNum);
  // console.log(Array.isArray(set_myNum));
  // Array.from()으로 다시 배열로 변환
  set_lotto = Array.from(set_myNum);
  //console.log("중복검사성공?" + Array.isArray(set_lotto));
  document.write("이번주 로또번호는<br>");
  if (set_lotto.length == 6) {
    //console.log("찍히나?");
    for (let k = 0; k < 6; k++) {
      //최종로또번호 출력
      document.write(set_lotto[k] + "<br>");
    }
  } else if (myNum.length < 6) {
    for (let j = 0; j < 6; j++) {
      randomInt();
      myNum[j] = pick;
    }
    // let set_myNum = new Set(myNum);
    // console.log(set_myNum);
    // console.log(Array.isArray(set_myNum));
    // // Array.from()으로 다시 배열로 변환
    // let set_lotto = Array.from(set_myNum);
    // document.write("중복숫자가 있습니다. 다시 실행해주세요");
  }
  count++;
}
