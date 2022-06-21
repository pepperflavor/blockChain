// // 변수 ? 데이터를 저장하는 공간

// // 키워드 변수
// var num = 1; // 1이라는 수를 num이라는 변수에 저장해라
// console.log(num); // num 이라는 변수에 담긴 값을 출력해라

// var str = "나는 무엇일까요?";
// console.log(str);
// //document.write(str); // 웹브라우저에 출력함

// // 다른 컴파일 언어와 달리 자바스크립트는 변수형을 선언하는데 좀더 자유롭다

// // 변수를 사용하려면 반드시 선언을 해야한다.
// var num1;
// num1 = 10; // 초기화
// console.log("변수 num1에 들어간 값은? : ", num1);
// var num2 = 20; // 변수선언과 동시에 초기화

// var num2;

// //초기화를 해주어야하는 이유 : 초기화해주지 않으면 쓰레기 값이 담길 위험이있음
// console.log(num2); //자바스크립트에서 undefind는 오류는 아니라고한다 ㄷㄷ
// var score; // 선언
// score = 100; //할당
// console.log(score);
// score = 20; //재 할당
// console.log(score);

// var score = 1000000; // 재선언, 재할당
// console.log(score);

// //여기에서 자바스크립트에 단점이 있다. 같은 이름으로 재 선언을하면
// // 값이 새로 재 할당된다. 프로그래머사 실수로 같은 이름을 사용해서
// //  다른 값으로 재할당됐을때 전혀 다른 결과물이 나올 수 있음

// // var : 재선언, 재할당 가능
// // let : 재할당은 가능하지만 재선언은 불가
// // const : 재할당, 재선언 불가

// let number = 5;
// console.log("let으로 선언함", number);
// let number = 10;
// console.log("let으로 선언함", number);
// //let number = 5; // 단점을 보완하기 위해 let 등장 블록범위의 변수를 재선언할 수 없다 라는 오류 메세지

// const maxNumber = 1;
// console.log("const 키워드로 선언" + maxNumber);
// maxNumber = 2; // 재할당 불가
// console.log("const 키워드로 선언" + maxNumber);
// const maxNumber = 10; //재선언 불가

// const a = 1;
// const b = 2;
// const c = a + b;
// console.log(c);

// // // 변수 이름을 지을때 주의사항.
// //     1. 누가봐도 알아볼 수 있게 지을 것
// //     2. 변수명 한글 X
// //     3. 풀네이밍
// //     4. 에어비앤비 코딩컨벤션 -> 이름및 여러 규칙 찾아봐라

// // 데이터 타입 7가지
// // =======================================================
// // 원시타입 | 숫자타임(number) : 숫자, 정수, 실수 구분없이 하나의 숫자타입만 존재한다
// //         | 문자열타입(string) : 문자열
// //         | 불리언타입(Boolean) : 논리적으로 참(true)과 거짓(false)
// //         | undefined : var 키워드로 선언된 변수에 암묵적으로 할당되는 값이다.
// //         | null : 값이 없다는 것을 의도적으로 명시할 때 사용
// //         | 심벌타입(Symbol) : ES6에서 추가된 7번째 타입
// // -----------------------------------------------------------------
// // 객체타입 | 객체, 함수, 배열 등등.....

// // 다 number로 취급
// const inteager = 10; // 정수
// const double = 10.12; //실수
// const negative = -20; //음의 정수

// // 해당 변수의 데이터타입이 무엇인지 알 수 있음
// console.log(typeof inteager);
// console.log(typeof double);
// console.log(typeof negative);

// const binary = 0b01000001; // 2진수
// const hex = 0x41; // 16진수
// console.log(binary);
// console.log(hex);

// console.log(1 == 1.0); // true
// console.log(1 === 1.0); // data type 까지 비교
// console.log(3 / 2); // 실수로 처리

// const string = "문자열"; // 일반적으로 문자열은 " " , 단일 문자는 ' '
// const string1 = "a";
// console.log(string);
// console.log(string1);

// // --------사   칙     연  산---------------

// // let d = 10;
// // alert(d);

// let value = prompt("숫자 입력해보기");
// console.log("value의 값 : ", value);

// /*
//      사칙연산
//     +, -, *, /, %
// */

// const number1 = 5;
// const number2 = 3;

// const result = number1 + number2;
// const result2 = number1 - number2;
// const result3 = number1 * number2;
// const result4 = number1 / number2; // 몫
// const result5 = number1 % number2; //몫은 버리고 나머지(모듈러연산)

// console.log(result);
// console.log(result2);
// console.log(result3);
// console.log(result4);

// let input1 = prompt("첫번째 숫자입력"); //prompt함수는 입력받는 값을 문자열로 인식함
// let input2 = prompt("두번째 숫자입력");

// console.log(input1 + input2); // 문자열로 나옴

// //숫자타입으로 형변환시켜줌(inputTypeCasting)
// let inputTypeCasting = Number(input1); //입력한 문자열을 숫자로 형변환
// let inputTypeCasting1 = Number(input2);

// console.log(inputTypeCasting + inputTypeCasting1); //

// // 입력을 4개 받는다() 과목 4개,

let number = 5;
console.log("let으로 선언함", number);
number = 10;
console.log("let으로 선언함", number);

//let number = 5; // 단점을 보완하기 위해 let 등장 블록범위의 변수를 재선언할 수 없다 라는 오류 메세지
