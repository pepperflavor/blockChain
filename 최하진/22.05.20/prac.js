let english = prompt("영어 점수를 입력하세요");
let math = prompt("수학 점수를 입력하세요");
let sience = prompt("과학 점수를 입력하세요");
let Korean = prompt("국어 점수를 입력하세요");

let inputTypeCasting1 = Number(english);
let inputTypeCasting2 = Number(math);
let inputTypeCasting3 = Number(sience);
let inputTypeCasting4 = Number(Korean);

// 몫과 나머지를 따로 얻어서 더해야한다고 생각했는데 number로 숫자형이 통일되어선지
//  나누기만해도 소수점까지 값이 나왔다.
console.log(
  "4과목의 합은",
  inputTypeCasting1 + inputTypeCasting2 + inputTypeCasting3 + inputTypeCasting4
);
console.log(
  "평균 값은",
  (inputTypeCasting1 +
    inputTypeCasting2 +
    inputTypeCasting3 +
    inputTypeCasting4) /
    4);

// // 2. 입력받은 값을 바로 숫자로 변환.

// let en = Number(prompt("영어 점수를 입력하세요"));
// let ma = Number(prompt("수학 점수를 입력하세요"));
// let si = Number(prompt("과학 점수를 입력하세요"));
// let ko = Number(prompt("국어 점수를 입력하세요"));

// console.log("네 과목 점수의 합은 ", en + ma + si + ko);
// console.log("네 과목 점수의 평균은 ", (en + ma + si + ko) / 4);
