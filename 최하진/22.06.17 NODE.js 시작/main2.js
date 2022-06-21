// 교환하는 함수
function change() {
  // text q변수에 box에 담긴 전체 문자를 담아주고
  text = document.querySelector(".box").innerHTML;
  // 탐색된 앞의 문자를 잡고 "$`" 123을 456으로 교체
  // 굳이 좀 이럴필요는 없지만 "$`"써보려고 이렇게짬
  text = text.replace(secondValue, "$`").replace(firstValue, secondValue);
  // temp 변수에 잠깐 저장
  let temp = firstValue;

  //첫번째 변수에 두번째 변수 값을 넣고
  firstValue = secondValue;
  //두번째 변수에 temp 변수 값을 넣고
  secondValue = temp;
  document.querySelector(".box").innerHTML = text;
}

changeBtn.onclick = change;
