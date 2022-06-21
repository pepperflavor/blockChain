// const a = 1;
// switch (a) {
//     case 1:
//         console.log("나는 스위치 문이다.");
//         break;

//     default:
//         break;
// }

// // switch문의 조건식은 보통 상수이다
// let input = Number(prompt("숫자 입력해라"));
// const COM_NUM = 1;
// const COM_NUM2 = 2; // 다른 변수로도 조건식부분 대체 가능
// switch (input) {
//     case COM_NUM:
//         console.log("첫번째 입력케이스");
//         console.log("내가 입력한 숫자 : ", input);
//         break; //break문이 없으면 다음 스위치문도 실행된다.
//     case COM_NUM2:
//         console.log("2번째 입력케이스");
//         console.log("내가 입력한 숫자 : ", input);
//         break
//     default : //else
//     console.log("디폴트 실행");
//     break;
// }

// switch (표현식) {
//     case 표현식1:
//         break;
//     case 표현식2:
//         break;

//     default:
//         break;
// }

//난수 발생시킴
// let randomNumber = Math.random();
// console.log(randomNumber);

// let ran1 = Math.floor(Math.random()); //floor 소수점부분을 버림
// console.log(ran1);
// let ran2 = Math.floor(Math.random()*10);
// console.log(ran2);
// let ran3 = parseInt(Math.random());
// console.log(ran3);


let randomNumber = Math.random();
console.log(randomNumber); //실수 형태로 출력된다.


let ran1 = Math.floor(Math.random()); // Math.floor : 소수점부분을 버려줌(내림)


// 10을 곱하고 소수점부분을 버려줘서 0~9까지 랜덤한 숫자를 뽑아준다
let ran2 = Math.floor(Math.random()*10); 
console.log(ran2);


let ran3 = parseInt(Math.random());
console.log(ran3);


let ran4 = Math.ceil(x); // 올림(음수인 경우에도)

let ran5 = Math.ceil(x);// 반올림(음수인 경우 6부터 다음 정수로 출력해줌)

//// 숙제
///유저와 컴퓨터의 가위바위보 게임을 만든다.
// 1. 유저는 가위 바위 보 셋중 하나를 낸다.
// 2. 컴퓨터도 마찬가지로 가위, 바위, 보를 낸다.(랜덤하게)
// 3. 결과에 따라 무승부, 패배, 승리를 표시한다.