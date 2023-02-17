// UI 이벤트

// load 이벤트 - 페이지와 기타 요소들의 로딩이 완료 되었을 떄
// on이 붙으면 어트리뷰트 방식
// 페이지가 다 로드된다음에 나올 수 있기 때문에 body태그 밖에 써도 정상적으로 작동ㅇㅋ
// window.onload = function () {
//   //f로드가 완료되고
//   console.log("페이지가 로드됨");
//   console.log(document.querySelector(".tag"));
// };

// window.addEventListener("load", function () {
//   //여기도 로드가 완료되고 실행되는 함수
//   console.log("페이지가 로드됨");
// });
// html등등 css등 모든 코드가 한번 읽혀서 랜더링된 상태
// 어트리뷰트를 사용하거나
//window.addEventListener('이벤트의 타입', 함수)를 사용하여
//이벤트 핸들러에도 load 이벤트를 등록할 수 있다.

//resize 브라우저 창의 크기가 바뀌었을 때
//어트리뷰트 방식
// window.onresize = function () {
//   console.log("페이지 사이즈가 변했다.");
// };

// //이벤트 핸들러 방식
// window.addEventListener("resize", function () {
//   console.log("페이지 사이즈가 변했다.2222");
// });

//scroll 사용자가 페이지를 스크롤 했을 때
// target 과 함께 사용
// window.scrollY 브라우저의 스크롤 값 맨위가 0
// window.onscroll = function () {
//   console.log(window.scrollY); // 전역좌표를 구해줌 이걸로 스크롤값을 구해서 특정태그가 나타나거나 사라지게 만듬
// };

// window.addEventListener("scroll", function () {
//   console.log("스크롤 했음222");
// });

///////////////////////====UI 이벤트 끝==============

//key입력
// 키보드 이벤트

////keydown 사용자가 키를 눌렀을 때 누르고 뗀게 아니라 누라자마자
////누르고 있으면 연속입력됨
// 누르면 한번 발동 ctrl 같은경우 한번 눌러도 계속 누르는걸로 인식 안되니까 경우에ㄸ라 쓰임
// window.onkeydown = function () {
//   console.log("키가 입력됨");
// };

// window.addEventListener("keydown", function () {
//   console.log("키가 입력됨22");
// });

// //keyup 사용자가 키를 누르고 뗐을 때
// //키를 여러개 누르면 누른 갯수가 표시됨 동시에 누르는걸 구분하는 듯
// window.onkeyup = function () {
//   console.log("키를 뗐다");
// };

// window.addEventListener("keyup", function () {
//   console.log("키를 뗐다222");
// });

// onkeypress 사용자가 키를 꾹 누르고 있는 동안
// window.onkeypress = function () {
//   console.log("누르고 있음");
// };

// window.addEventListener("keypress", function () {
//   console.log("키 누르고 있음 22");
// });

/////////////////============키보드 이벤트 끝====

//마우스 이벤ㅌ트
// click 사용자가 페이지 위에서 해당 태그에 마우스를 클릭했을 떄
// 태그를 만들어서 특정부분만 클릭하도록 할 수 있음
// content.onclick = function () {
//   console.log("나 클릭됨");
// };
// //document.querySelector(".content");
// // 핸들러방식
// content.addEventListener("click", function () {});

// 더블클릭 이벤트

// content.ondblclick = function () {
//   console.log("더블클릭함");
// };

// content.addEventListener("dblclick", function () {
//   console.log("더블클릭함22");
// });

// // mousedown 마수으 버튼을 누르자마자
// content.onmousedown = function () {
//   console.log("마우스 눌렀음");
// };

// content.addEventListener("mousedown", function () {
//   console.log("마우스 눌렀음22");
// });

// //moseup 마우스 버튼을 누르고 뗐을 때
// // 단일 함수 추가, 갈아끼우는 것이라고 생각하면된다.
// // 다른 함수를 추가하려면 함수 안에 추가해야함
// content.onmouseup = function () {
//   console.log("마우스 뗐음");
// };
// content.onmouseup = function () {
//   console.log("마우스 단일함수로 바뀜?");
// };

// // 다수 함수 추가가능
// //그냥 여러번 쓰면 쌓인다
// content.addEventListener("mouseup", function () {
//   console.log("마우스 뗐음");
// });
// content.addEventListener("mouseup", function () {
//   console.log("마우스 뗐음2");
// });
// content.addEventListener("mouseup", function () {
//   console.log("마우스 뗐음3");
// });
// content.addEventListener("mouseup", function () {
//   console.log("마우스 뗐음4");
// });

// //mousemove 마우스가 움직일 때
// window.onmousemove = function () {
//   console.log("움직이고 있다.");
// };

//mouseenter 마우스를 해당요소의 위로 올렸을 때
content.onmouseenter = function () {
  console.log("content에 마우스가 올라옴");
};

content.addEventListener("onmouseente", function () {
  console.log("content에 마우스가 올라옴22");
});

// mouseleave 마우스가 해당요소를 빠져나갔을때
content.onmouseleave = function () {
  console.log("content에서 마우스 나감");
};

content.addEventListener("mouseleave", function () {
  console.log("content에서 마우스 나감22");
});

//===============================모바일 터치
//touvhstart 화면을 눌렀을 때
window.ontouchstart = function () {
  console.log("모바일 화면이 눌림");
};

// touchend 화면에서 손을 뗐을때
let name = "최하진";
window.ontouchend = function (최하진) {
  console.log(`${name}님 로그아웃 하시겠습니까?`);
};

//touchmove 화면에서 터치로 이동할때
window.ontouchmove = function () {
  console.log("터치 이동중");
};

//===================================================

//드래그 이벤트
// drag 드래그 하고 있을 때
window.ondrag = function () {};

//frag가 시작됐을때
window.ondragstart = function () {};
//색에 투명도를 주고 드래그끝나면 투명도 준거 없애던가

//dragend 드래그가 끝났을때
window.ondragend = function () {};

//dragenter 드래그 하면서 요소 위로 마우스가 올라왔을 때
window.ondragenter = function () {};
//이때 색이 바뀌게도 할 수 있음
// 해당 요소의 자식을 요소를 가져오도록 할 수 도 있음

//dragleave 드래그 하면서 요소 밖으로 마우스가 나갔을 때
window.onabortdragleave = function () {};

//drop 드래그 하다가 놓았을 때
window.ondrop = function () {};

//가위바위보
// 스타트버튼을 누르면 게임한번 돌려보기

// 두번째 스타트 버튼 + 가위 바위 보 버튼
