// 이벤트 함수의 타겟

// window.onclick = function (event) {
//   // event.target 은 이벤트가 발생한 요소
//   // event 태그의 이벤트가 담겨있다.
//   console.log(event.target); // 이벤트가 발생한 요소를 알려준다.

//   //이렇게 클래스가 무엇인지로 판단을 해서 이벤트를 적용 시킬수도 있다.
//   // 이렇게 해서 마우스로 뭘 클릭하느냐에 따라 실행되는게 다르게
//   if (event.target.classList.contains("_target")) {
//     console.log("있어");
//   }
//   event.target;

//   let _class = event.target.className;
//   switch (_class) {
//     case "_target":
//       //이벤트 내용
//       break;

//     default:
//       break;
//   }
// };

// /////////////////////////////// 마우스의 현재 페이지에서의 위치///////////////////////
// // onmousemove 마우스가 움직일때
// window.onmousemove = function (e) {
//   // e.type 해당 이벤트의 타입이 무엇인지
//   console.log(e.type);
//   // e.pageX 문서 페이지의 상에서 마우스의 X좌표
//   console.log(e.pageX);
//   // e.pageY 문서 페이지의 상에서 마우스의 Y좌표
//   console.log(e.pageY);
//   //   e.pageX;
//   //   e.pageY;
// };

///////// 키보드 입력 이벤트
_input.onkeydown = function (e) {
  //여기에 이벤트는 keyboardEvent
  console.log(e); // 객체형태로 담겨있음 키값. 밸류값으로 뽑아오면 된다
  console.log(e.keyCode); //아스키 코드값으로 출력해준다. 영어랑 숫자만ㅋㅋㅋㅋ 한글은 따로 잡아야한다
  //한글입력시 229만 뜬다.
};

//////////////////기본 동작을 취소하는 방법//////////////////////////
// ex) 새로고침 막기
_btn.onclick = function (e) {
  // 기본 동작을 취소하는 방법 preventDefault()함수
  e.preventDefault();
  // 버블링 현상을 막는 방법(이벤트 전파)
  // e.stopPropagetion 이벤트의 전파를 막는 함수
  e.stopPropagetion();
};
