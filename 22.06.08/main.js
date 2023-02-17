// 이벤트 리스너

//이벤트 리스너 제거
let el = document.createElement("div");
// el에 test클래스 추가
el.className = "test test2 test3";
// el에 id추가
el.id = "test";
// 익명함수를 변수에 담아 놓았다
let onevent = function () {
  console.log("난 이벤트");
  // 한번사용하고 제거 클릭하면 제거됨
  el.removeEventListener("click", onevent);
};
// el 에 이벤트를 추가하는데 이벤트 타입은 click이고 두번째 매개변수 함수는
// onevent 변수에 담긴 익명함수이다.
el.addEventListener("click", onevent);
// removeEventListener 이벤트를 제거하는데 타입은 click이고 두번째
// 매개변수는 제거할 함수

document.querySelector(".content").appendChild(el); //화면에 뽑아주기위해서

// 클래스의 이름 읽기
// className 문자의 형태로 읽고
// classList 배열의 형태
console.log(el.className);
console.log(el.classList); //배열 형태로 이름을 가져옴 띄어쓰기를 기준으로 알아서 잘라줌

for (let i = 0; i < el.length; i++) {
  // classList에서 item함수를 이용해 해당 인덱스의 값을 확인 할 수 있다.
  // item(여기에 index)
  console.log(el.classList.item(i));
}

// class list 클래스 추가
// add 함수를 이용해서 클래스 추가 , 를 이용해서 여러개 추가 가능
el.classList.add("test4", "test5", "test6");
console.log(el.classList);

// class list 클래스 제거
// remove 함수를 사용해서 클래스 제거
// 이 함수도 콤마를 여러개의 클래스 제거 가능
el.classList.remove("test4", "test5", "test6");
console.log(el.classList);
//className 은 문자열이니까 그냥 대입하면 된다.
