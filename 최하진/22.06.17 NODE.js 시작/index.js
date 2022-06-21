//정규 표현식 정규 표현식은 문자 검색과 교체에 사용되는 패턴을 제공한다.
//자바스크립트에서 RegExp 객체의 문자 함수를 조합해 정규
// 사용할 수 있다. box변수에 box 태그를 선택자로 담아 놓고
let box = document.querySelector(".box");

// box의 innerHTML 안녕하세요를 대입
box.innerHTML = "안녕하세요";
let reg = new RegExp("안녕");
//RegExp는 두개의 매개변수 string | RegExp, flag?: string
//앞은 찾는 문자 두번째는 플래그 플래그는 정규표현식에 영향을 주는 옵션
// 플래그의 종료에는
//  i : 대소문자 구분없이 구별할 수 있다. A, a
//  g : 패턴과 일치하는 모든 것을 찾는다. g가 없으면 일치하는 것에서 첫번째 것만 가져온다.
//  g 플래그가 붙으면 패턴과 일치하는 모든 것들을 찾습니다. g 플래그가 없으면 패턴과 일치하는 첫 번째 결과만 반환됩니다.
//  m : 다중 행모드 줄이 내려져 잇어도 찾아옵니다. 백틱 같은걸로 행차이가 있어도!
let string = "안녕하세요";
// 문자열 함수 match('찾는 문자열' , '플래그');
box.innerHTML = string.match("무아");
// match로 안녕만 찾아서 꺼낸것 없으면 아무것도 안꺼내줌, 오류안냄
let string2 = "하하하하하핳핳하하하하하핳핳";

// 슬래시는  " / " 자바스크립트에서 정규표현식을 생성하고 있다는 것을 알려줘요
// 문자열에 따옴표를 쓰는 것과 같다.
box.innerHTML = string2.match(/하/g);
// g는 패턴과 일치하는 모든 문자를 찾는데 ' , '로 구분
// 정규식을 사용하는 이유는 이메일형식인지 아이디 등등 값 체크하는 정규식  i 플래그 사용
// i는 대소문자 구별 없이 문자를 찾는다.
let str = "나는 아아아아abc abc, abcabc , 나는 문자열";
let str2 = str.match(/aBc/i);
box.innerHTML = str2;
console.log(str2); //  groups : 원하는 문자열이 복수개인지,
//index 는 처음으로 일치하는 문자열의 시작 인덱스 시점인 듯?
console.log("배열" + str2[0]); //원하는 문자열을 찾아서 배열형태로 잡아줌
console.log(typeof str2);

///=========실습
let intMe = "나는 웹 개발자 최하진";

let me = intMe.match(/나는/g);
let web = intMe.match(/웹/g);
let make = intMe.match(/개발자/g);
let name = intMe.match(/최하진/g);
//match로 가져올때 띄어쓰기 를 넣어도 가져올 수 있음
box.innerHTML = me + "&nbsp;" + web + "&nbsp;" + make + "&nbsp;" + name;
//편하게 바꿔보기 name2에 box.innerHTML 넣으면 내용은 "나는 웹개발자 본인이름" 이렇게 들어있고 해당 문자열을
//찾아서 바꿔주는 편리한 아이 replace
let name2 = "나는 웹 개발자 본인 이름";
name2 = name2.replace(/ 본인 이름/i, "  최하진22");

box.innerHTML = name2;

// name2에 다시 대입하는데 name2를 문자열 함수 replace를 사용해서 " 본인 이름"이 문자열을 찾고 찾은 문자열을 "최하진"<-
// 이 문자열로 교체한 후에 name2에 대입해줌 그래서  let name2 = "나는 웹 개발자 본인 이름"; => "나는 웹 개발자
// 최하진22" 이렇게 바뀐것 replace의 두번째 매개변수에 특수문자를 입력하면 특수한 방법으로 문자열을 교체할 수 있다. 특수한 방법에는
// $& 패턴과 일치하는 부분의 문자열 $`일치하기 전의 문자열의 일부를 대입 $' 일치한 후 문자열의 일부를 대입

let name3 = box.innerHTML;
box.innerHTML = name3.replace(/최하진/, "$' 집에 가고싶다"); // 중간에도 들어가짐 문자열도 배열
