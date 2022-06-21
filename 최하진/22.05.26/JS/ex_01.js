// 고차함수 : 함수를 인수로 전달받거나 함수를 반환하는 함수
// 고차 함수는 외부상태의 변경이나 가변데이터를 피하고 불변성을 지향하는
// 함수형 프로그래밍에 기반을 두고 있음.

/* 
    sort : 원본배열을 정돈해서 오름차순으로 리턴해준다. =>원본배열을 직접 건드림
    한글도 정렬 ㅇㅋ / 헠 근데 숫자는안된다... 왜?
    유니코드 코드 포인트를 기준으로 순서를 정렬해준다

    reverse : 내림차순정렬

//     만약 숫자인 데이터를 담은 배열을 정렬하고 싶다면 
//     정리 규칙을 sort에 직접 넣어줘야 한다.


//     */

// const fruit = ['Banana', 'Orange', 'Apple'];
// fruit.sort();
// console.log(fruit);

// fruit.reverse(); // 내림차순 정렬
// console.log(fruit);

// const point = [46, 3, 22, 15, 40, 55];
// point.sort(); //안된다

// //----------------------------------에러function--------------///
// // 숫자요소를 정렬할 때는 정렬 순서를 정의하는 비교함수를 인수로 전달해야한다.
// // 규칙은 사용자가 정해서 넣어주면된다.
// // 에러 function말고 내가 따로 함수를 정의해서 그걸 호출해줘도 된다.
// point.sort((a,b)=> a-b);
// console.log(point);

// let sum = function(a,b){
//     return a+b;
// }

// // 오른쪽에 있는 식을 평가하고 리턴한다(오른쪽의 결과를 리턴).
// // 왼쪽이 파라미터를 의미
// let sum1=(a,b)=>a+b;

// let double = n=>n*2;

// let print = ()=>alert('안녕');

// /////-------------------------------------------------------////

//
// const numbers = [1, 2, 3];
// const pows = [];

// for(let i=0; i<numbers.length; i++){
//     pows.push(numbers[i]**2);
// }
// console.log(pows);

// //------------------------------------ 같은 위와 내용임
// numbers.forEach(item=>pows.push(item**2));
// console.log(pows);
// // 코드가 짧아지지만 단점으로는 break와 continue를 쓸 수없음 반복문이 끝날때까지
// //끝낼 수 없음

// //=========== ☆☆☆☆  map ☆☆☆☆☆

// //인자로 받은 콜백함수를 반복호출 후 , 그 함수들로 얻은 결과로 배열을 만들어준다.
// // 원본 배열을 건드리지 않고 새로운 배열을 만들어서 반환한다.
const number = [1, 4, 9];
const roots = number.map((item) => Math.sqrt(item));

console.log(roots);
// console.log(number);

// for(let index =0; index <10; index++){
//     console.log(index);
// }

// //함수 오버로딩
// //(함수 이름은 동일하지만 매개변수 갯수가 틀리거나 자료형이 틀리다.)

// function myFunc(a, b, c){
//     const len = arguments.length;
//     if(len ==0 ){
//         console.log("매개변수 없음");
//     } else if(lef ==1){
//         console.log("한개");
//     } else if(len ==2){
//         return a+b;
//     }else{
//         return a+b+c;
//     }
// }

// //디폴트 매개변수 : 값을 넣어주면 넣어준걸로 계산하지만 안넣어주면
// // 디폴트로 정해줬던 값으로 계싼을 함
// function call(a,b = 5){
//     return a+b;
// }
// colsole.log(call(1));

//Recursive Function(재귀함수)
// 함수가 나 자신을 다시 호출함

// let res = 0;

// for(let i =0; i<101; i++){
//     res+=1;
// }

// // 나는 재귀함수(자기자신을 호출한다.)
// // 함수안에서 나 자신을 다시 호출하는중
// // 종료조건이 반드시 있어야 한다.
function RecursiveFunction(n) {
  if (n <= 1) return 1; //종료조건
  return n + RecursiveFunction(n - 1);
}

//피보나치 수열

function fibo(num) {
  let res = [0, 1];
  if (num == 0) {
    console.log([0]);
  }
  if (num == 1) {
    console.log([0, 1]);
  }
  for (let i = 2; i <= num; i++) {
    res.push(res[i - 2] + res[i - 1]);
    console.log(res);
  }
}
fibo(8);

function RecursiveFibo() {
  if (num < 2) {
    return num;
  }
  return RecursiveFibo(num - 1) + RecursiveFibo(num - 2);
}

// console.log(RecursiveFibo(8));

// 단점  일반 for문보다 메모리를 많이 차지한다.
// 호춯할 때마다 계쏙 쌓임
// 보통 일반적으로 속도도 for문이 더빠름
