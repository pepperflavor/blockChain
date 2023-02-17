// regexp의 test 함수
// test함수는 일치하는 부분의 문자열이 있으면 true를 방환하고 틀리면 false
// 주로 쓰는 곳 이메일이나 비밀번호 아이디 형식검사

// 버튼 클릭
btn.onclick = function () {
  // input의 값을 val에 담고
  let value = "test";
  // 검사식
  // 정규식 객체 생성 new RegExp(검사식, 플래그);
  // i는 대소문자 상돤없이 찾는다
  let reg = new RegExp(val, "i");
  // input value가 test가 맞는지 확인 test() 함수로
  // 맞으면 true틀리면 false반환
  console.log(reg.test(input.value));
};

// let str = "this is true";
// let reg = /this/i;

// //match(정규식 객체) str문자를 검사한다.
// //문자열에 있는 함수
// console.log(str.match(reg));

// // 정규식의 test 함수 사용
// // 정규식에 있는 함수
// // 식에 적합한지 확인해준다 (true, false)
// console.log(reg.test(reg));

// // 문자클래스 들

// // 문자 클래스는 특정 문자의 특별한 표현이다.
// let str2 = "aa2a3a4a5a6a7!###@@@123456999";

// // 숫자 찾기
// let reg2 = /\d/g; // 아마 숫자를 말하는게 아닐까...? <= 맞음! g 조건을 줘서 모든 숫자를 찾을 수 있다.
// console.log(str2.match(reg2));

// //join 함수는 배열의 요소 하나하나를 합쳐서 하나의 문자열로 반환해주고
// // join(매개변수) 매개변수를 넣으면 값과 값사이에 구분자를 바꿀 수 있다.
// let num = str2.match(reg2).join();
// //join에 매개변수를 문자열로 추가하면 구분점을 그 문자열로 바꿀 수 있다.
// let num2 = str2.match(reg2).join("뀨");

// // str2.match(reg2) 배열을 하나의 문자열로 반환해 줬다. join()를 이용해서
// // 구분점은 ,로
// console.log(num);
// console.log(num2);

// 문자 클래스 종류

// 1. \d 모든 숫자 : 0 ~ 9까지의 숫자

// 2. \s 는 공백 : 줄바꿈이나 공백 기호

// 3. \w 문자 : 단어에 들어가는 문자와 _(언더바)
// 라틴문자나 숫자 등, (키릴 문자, 힌디 문자는 안됨)

// 실습
// input에 입력받고 버튼을 누르면 작동하게 만들기.
// 위에 있는 클래스 사용해서 문자랑 숫자를 섞어서 쓰는데
// 문자만 뽑아서 페이지에 보이거나 콘솔에 보이기.
// 구분점은 _로 바꾸기

// btn.onclick = function () {
//   // input으로 입력받은 값 가져오기
//   let mystr = myTxt.value;
//   // 입력값 배열로 변환
//   let myarr = mystr.split("");
//   console.log(myarr);
//   //입력받은값 숫자만 추리기.
//   let num = mystr.match(/\d/g);
//   console.log(num);
//   // 배열로 입력받은 값에서 숫자 제거하기
//   // 쉽게 정규식쓰기
//   // 정규식 표현방법
//   let reg = /\D/g;
//   easyBox.innerHTML = mystr.match(reg).join("_");

//   // ??? 왜 for문이 안돌지??? length 오타^ㅡ^
//   for (let i = 0; i < myarr.length; i++) {
//     for (let k = 0; k < num.length; k++) {
//       //console.log("왜 안들어오지?");
//       if (myarr[i] == num[k]) {
//         //console.log("왜 안들어오지?");
//         // 입력받은 값에 들어있는 숫자와 일치하면 삭제
//         // 문자열에 splice는 못쓰고 replace를 사용해여함
//         myarr.splice(i, 1);
//         console.log("바깥 " + i + "안쪽 " + k + " " + myarr);
//       }
//     }
//   }

//   mystr = myarr.join("_");
//   reBox.innerHTML = mystr;
// };

//123야야호호456
