/* 

    function ?

    함수란?
    코드 재사용성이 높다.
    코드 유지보수가 좋다
    함수는 정의를 통해서 생성한다.
    자판기라고 생각하면 쉽다.

*/

// let a;
// let b;
// let result = a + b;

// console.log(result);



// // let a1;

// //sum - 함수 이름/  a,b- 매게변수(=파라미터)
// // 함수 시작부터 마지막 대괄호가 닫히는 부분까지 - 함수정의 라고 한다
// function sum(a, b){
//     return a+b; // a와 b를 더한 결과를 리턴한다(반환한다, 내뱉는다)
// }

// let result = sum(2,5);
// console.log(result);

// //return이 없는 함수도 있다.
// function print(){
//     console.log("함수 호출!!");
// }
// print(); //함수 호출


// //매개변수 보다 더 많은 데이터를 넣으면 알아서 무시해준다.
// function sum1(a, b){
//     console.log(arguments.length);
//     return a+b;
// }
// console.log(sum1(1, 2, 3, 4, 5));//인자가 초과되어도 무시한다


// //함수를 정의하는 4가지 방법
// 함수의 선언, 정의방식에는 4가지가 있다.a

// 1. 함수 선언문

// function add(x, y){
//     return x+y;
// } -이런식으로 써줌



// // 2. 함수 표현식
// // //  변수    함수
// // let add = function(x, y){//익명
// //     return x+y;
// // }
// // let add1 = funcyion(a, b){//기명
// //     return a+b;
// // }

// // 3. Function 생성자 함수

// // let add = Function('x', 'y', 'return a+b');


// 모던자바스크립트가 지원하는 것

// let add=(x,y) = x + y;


// 4. ES6 arrow Function
// let add=(x, y)=>x,y;


// ------------------------------------@@@@@@@@@@@@@@@@@@@@@@@@@@----------------------
// console.log(a);

// var a = 1; //undefined로 잡힘 콘솔보다 밑에 있지만 암묵적으로 내부적으로 끌어올려서 처리(=호이스팅)해줌
// let a = 1; //에러남 호이스팅 대상이 아님
// const a = 1; //에러남 호이스팅 대상이 아님

//함수선언문은 호이스팅 대상이긴 하지만 보통은 선언문보다 밑에서 호출을 한다
foo();
function foo(){
    console.log("hello World");
}


// 변수에 할당된 함수는 호이스팅의 대상이 아님
foo2();// 즉, 함수 표현식은 호이스팅 대상이 아니다.
let foo2 = function(){
    console.log("나는 푸우우우???");
}

let foo3;

foo3 = function(){
    console.log("나는 푸루우우우-----3");
}

//호이스팅을 방지하기 위한방법
// 1. var를 안쓴다
// 2. 함수 선언문만 골라온다
// 3. 호이스팅이 일어나면 코드의 유지 보수에 어려움이 발생하기 때문에
// 방지하는것이 좋다.


