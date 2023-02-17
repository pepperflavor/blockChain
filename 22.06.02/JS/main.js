// window.onload = function () {
//   // window 객체 로드 이후 작용하기 때문에 body태그 안에다가 script를 써야함
// };

// /*  1. 콜백 함수란 무엇인가??
//     비동기 방식으로 작성된 함수를 동기처리 하기 위해 주로 사용
//     비동기 처리를 기본으로 하고 일부 구간에서 순차적인 처리가 필요할 때(ex- API)
//     응답을 받은 다음 처리해야 할 때

//     익명의 함수 사용
// // */

// // let num = [1, 2, 3, 4];
// // num.foreach(function (element, index) {
// //   console.log(element); // => 1 2 3 4 출력
// //   console.log(index);
// // }); // 배열의 길이만큼 중간에 멈추지 않고 도는 함수

// //  함수의 이름만 전달하는 방법
// //  매개변수로 이름과 함수를 받을 함수
// //  보통 함수를 선언한 뒤에 함수 타입 파라미터를 맨 마지막으로 하나 더 선언해준다.
// function myFun(text, callBack) {
//   //매개변수로 받은 text 보여줌
//   console.log(text);
//   // 매개변수로 받은 콜백함수 사용
//   callBack();
// }

// function callFun() {
//   console.log("난 콜백");
// }

// //함수를 사용했고 첫번째 매개변수는 임의의 문자를 삽입
// //함수를 전달하는 부분은 우리가 함수를 사용할떼 ()괄호를 붙이는데
// //()괄호는 함수를 사용하겠다는 뜻이고. 콜백으로 함수를 전달 할때는
// //()괄호가 없이 함수의 이름만 전달하는 것

// //myFun("오오옹ㅇ오", callFun);

// // 전역변수, 지역변수 콜백함수의 파라미터 전달
// // 전역 변수를 선언
// let myName = "윤철";

// //매개 변수로 함수를 받을 함수를 만듬
// function callBackFun(call) {
//   //지역 변수 선언
//   let yourName = "동동";
//   // 지역변수를 콜백에 전달
//   call(yourName);
// }

// //매개변수로 넘겨줄 함수
// function callName(you) {
//   //매개 변수로 넘길 함수를 선언해둔 myName 전역변수를 사용하고
//   // 자신이 받은 매개변수 you를 사용한다.
//   console.log(myName + "이랑" + you + "사이가 좋아");
// }

// //callBackFun 함수를 사용을 하는데 매개 변수로 callName 함수의 이름을 전달
// callBackFun(callName);

// // 콜백의 주의할 점 this를 보호하자
// // class con {
// //   constructor(name) {
// //     this.name = name;
// //   }
// //   getInfo() {
// //     console.log(this.name + " 내 이름");
// //   }
// // }

// let con = {
//   name: "홍길동",

//   //얘는 전역함수로 볼 수는 없다 객체 안에 담겨있는 것으로 봐야함
//   setname: function (firstName, lastName) {
//     this.name = firstName + "  " + lastName;
//   },
// };

// // let _con = new con("윤철");
// // console.log(_con);
// // _con.getInfo();

// function getName(firstName, lastName, callBack) {
//   callBack(firstName, lastName);
//   console.log(this);
// }

// getName("나 병현", "나 윤철", con.setname);
// console.log(con.name);
//console.log(window.name);

/*  우리가 getName이 함수에 전달한 callBack매개 변수에는 con.setname의
    함수가 전달이 되었는데 con.setname(); 이렇게 코드상에서 사용하면
    this는 con 객체이지만 getName함수에 getName의 이름으로 callBack
    함수를 전달해서 사용하면 this는 window객체이다.
*/

//================== 실습 ================
//콜백함수 사용해서
//우리반 네명이름 정해서
//하나 전역변수 하나 지역변수로 만들어서 출력하는 함수 만들어보기

// let first = "김길동"; //전역변수로 선언한 이름
// let second = "홍길동";

// function callBackName(call) {
//   //지역변수 선언
//   let third = "김강구";
//   let fourth = "장강구";
//   //지역변수 콜백에 전달 =>callBackName를 호출하면 지역변수값을 전달받을 수 있음
//   //인수 전달할때 ,가 아니라 +로 =>값 더해주진 않고 같이 전달? string으로 받아서 출력해준것
//  함수가 받아주는 인자가 2개로 설정해줬어야 헸디.
//   call(third, fourth); // ????ㅋㅋㅋㅋㅋㅋ
// }

// function callingName(third, fourth) {
//   console.log(
//     "출석부릅니다 \n" +
//       first +
//       "\n" +
//       second +
//       "\n" +
//       third +
//       "\n" +
//       fourth +
//       " 여기까지 블록체인 출석 끝"
//   );
// }

// // function call2() {
// //   console.log("ㅗ");
// // }

// callBackName(callingName);

// callBackName(call2);
/////////======================================두번째 수업내용============//
// //제일 그지같은 코드
// // 콜백지옥
// // 첫번째로 숫자 값을 받고 두번째로 함수를 받는다.
// function temp(num, call) {
//   let _num = num * num;
//   console.log(_num);
//   call();
// }

// //함수를 실행하는데 첫번째 매개변수로 5의 값을 전달
// //두번째 매개변수로 매개변수 하나를 받을 익명함수를 전달
// temp(5, function (result) {
//   // 이 안에서 함수를 또 실행 시키는데 위에 익명함수의 매개변수 값을 전달
//   // 첫번째 매개변수로 result를 다시 전달
//   temp(result, function (result) {
//     console.log("첫번째");
//     temp(result, function (result) {
//       console.log("두번째");
//       temp(result, function (result) {
//         console.log("세번째");
//       });
//     });
//   });
// });

// //해결방안
// // Promise는 자바스크립트가 제공하는 자체 콜백함수
// function add(num) {
//   return new Promise((res, rej) => {
//     let _num = _num + num;
//     console.log(_num);
//     res(_num);
//   });
// }

// // Promise는 작성 수행 후 성공하면 resolve,실패 후에는 reject가 실행된다..
// //  callback을 사용 했던 것과 마찬가리조 resolve에 값을 담아 리턴한다.

// // //Promise hell
// // add(5).then(result =>{
// //     add(result).then(result => {
// //         console.log('끝');
// //     });
// // });

// // Promise Hell을 탈출하려면
// function add(num) {
//   return new Promise((resolve, reject) => {
//     let _num = num + num;
//     console.log(_num);
//     // 수행을 성공하면 _num을 성공값으로 리턴해줘라
//     resolve(_num);
//   });
// }

// //then() 메서드는 promise를 리턴하고 두개의 콜백함수를 리턴으로 받는다
// add(5)
//   .then((result) => {
//     return add(result);
//   })
//   .then((result) => {
//     return add(result);
//   })
//   .then((result) => {
//     return add(result);
//   });

// function eat() {
//   return new Promise(function (resolve) {
//     setTimeout(() => {
//       resolve("5초 후 날 볼거야(작업완료)");
//     }, 5000);
//   });
// }

// //await 처리 될때 까지 기다려줌
// (async function () {
//   var result = await eat(); //eat resolve가 될때 까지 기다려
//   console.log(result);
// })();
////////////////////////////////////////////////////////////////////
// 실습2 Promise hell 탈출한 코드 보고 더하기 하는데
// 값은 아무거나 10번 더해보기, 더한 값을 6초 뒤에 보여줌

// 첫번째 인자로 숫자를 두번째 인자로 함수를 받는다
let count = 0;

function addNum(num) {
  return new Promise((successCallback, failCallback) => {
    let getSum = num + num;
    console.log(getSum);
    successCallback(getSum);
  });
}

// 실행실패시 작동될 코드
function failCallback(error) {
  console.log("실패 했을시 결과 : " + error);
}

function successCallback(result) {
  console.log("덧셈 성공! 결과 : " + result);
  count++;
  return count;
}

//addNum(num).then(successCallback, failCallback);
addNum(5).then(successCallback, failCallback);

// // Promise는 자바스크립트가 제공하는 자체 콜백함수
// function add(num) {
//   return new Promise((res, rej) => {
//     let _num = _num + num;
//     console.log(_num);
//     res(_num);
//   });
// }

//d일단 while문으로 안됨  --> 조건문으로 짧게 쓰는방법 안됨

addNum(5)
  .then((result) => {
    return addNum(result);
  })
  .then((result) => {
    return addNum(result);
  })

  .then((result) => {
    return addNum(result);
  })

  .then((result) => {
    return addNum(result);
  })

  .then((result) => {
    return addNum(result);
  })

  .then((result) => {
    return addNum(result);
  })

  .then((result) => {
    return addNum(result);
  })

  .then((result) => {
    return addNum(result);
  })

  .then((result) => {
    return addNum(result);
  })

  .then((result) => {
    return addNum(result);
  });
