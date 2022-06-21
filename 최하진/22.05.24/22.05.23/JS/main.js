// // //힌줄에 변수 여러개 선언가능
// // let message = "Hello", age = 25, num = 1;

//자료형을 안써도 잡아주긴함 하지만 써주는게 좋다
userName = "홍길동";

// // console.log(userName);
// // alert(message);

// // //변수명은 숫자로 시작하면 안된다.
// // //let 1a

// // //언더 바는 가능하지만 하이픈은 안됨. 대소문자 구분됨
// // //let my-Name

// // // const COLOR_RED = "#F00";
// // // const COLOR_GREEN = "#F0";

// // // +, -, *, %, ** : 거듭제곱연산자, 그냥 두번곱하는 것

// // alert(2**3); // 2*2*2=8

// // //연산의 대상 : 피연산자
// // //산술연산자
// // // 5*4
// // // "My name is" + "LEE" -> My name is LEE

// // const color = "red"

// // /*
// // 이항 상술 연산자
// // +, -, *, /, %
// // ------------------------------------------------
// // 단항 산술 연산자
// // ++(1씩 증가를 시켜줌) , --(), 
let input


// // */
let x = 1;
x++; // x = x+1과 동일하다
console.log("++후 x의 값은 : ", x); //x = 2
x--;
console.log("--후 x의 값은? : ", x);// x =1

let number = 5;
let result;

//선할당후 후증가
result = number++; //후위연산자 : 뒤쪽에있는 연산자.
console.log(result, number);// 5, 6

//선증가 후할당
result = ++number; //선위연산자 : 뒤쪽에있는 연산자.
console.log(result, number); // 7, 7


//선할당 후 감소
result = number--;
console.log(result, number);// 7, 6

//선감소 후할당
result = --number;
console.log(result, number);// 5, 5

// // /*
// //     할당연산자

// //     =  : 우항에 있는 데이터를 좌항에 대입시킨다
// //     += : x += 5  =>  x = x+5
// //     -= : x -=5   =>  x = x-5
// //     *= : x *= 5  =>  x = x*5
// //     /= : x /=5   =>  x = x/5
// //     %= : x %= 5  =>  x = x%5

// // */

// let num = 10;
// num +=5;
// console.log("+= 연산자",num);
// num -=5;
// console.log("-= 연산자",num);

// /* 
//     비교연산자

//     ==  : a==b a와 b 같다(값만 비교)
//     === : a===b a와 b의 값과 타입이 같다.
//     !=  : a != b a와 b의 값이 다르다
//     !== : a !== b a와 b의 값과 타입이 다르다
// */

// console.log(5==5); //true
// console.log(5=='5');
//  //true 자바스크립트가 알아서 자료형으 바꿔서
// // 트루로 나옴
// console.log(0 ==''); // false
// console.log(0 ==''); // true

// ///////////////////////////////////////
// console.log(5 ==='5');
// console.log(5 != 8); //true
// console.log(5 != 5); //fa;se

// console.log(5 != '5'); // true
// console.log(5 !== '5'); // false, 자료형까지 비교하는게 정확한 값이 ㅏ옴

// /*
//     대소비교 연산자

//     >   a>b : a가 b보다 크다.
//     <   a<b : a가 b보다 작다.
//     >=  a >= b a가 b보다 크거나 같다
//     <=  a <= b a가 b보다 작거나 같다
// */

// console.log(5>0);
// console.log(5>5);
// console.log(5>=5);
// console.log(5<=5);

// //만약에 이러이러한 조건이 참이라면 실행문을 실행해라

// const a = 1;
// const b = 2;

// if(a<b){ //조건문이 참이라면
//     //여기를 실행해라
// }


/*
    삼항조건연산자

*/

// let z = 3;
// let res = z % 2 ? '홀수' : '짝수'; 
// // ? 를 기준으로 왼쪽의 조건문의 결과가 참이면 ? 앞의 값이 나온다. 
// // false는 뒤의 것이 출력됨. 가독성이 떨어지는게 단점
// console.log(res);


/*

    논리 연산자
    ||  논리합(OR) : a || b  => 둘중 하나라도 true면 참
    0   0 => false
    1   0 => true
    0   1 => false
    1   1 => true

    &&  논리곱(AND) : 둘다 true여야  true
    0   0 => false
    1   0 => false
    0   1 => false
    1   1 => true

    !   부정(NOT)
*/

// console.log(true || true); // 1 1
// console.log(true || false);// 1 0
// console.log(false || true);// 0 1
// console.log(false || false);// 0 0


// console.log(true && true); // 1 1
// console.log(true && false); //
// console.log();
// console.log();