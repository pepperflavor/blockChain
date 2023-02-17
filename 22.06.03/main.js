// function one() {
//   //setTimeout로 2초뒤에 콘솔사용
// //   setTimeout(() => {
// //     console.log("첫번째");
// //   }, 2000); //2초 후
// // }

// function one() {
//   console.log("첫번째");
// }

// function two() {
//   setTimeout(() => {
//     console.log("두번째");
//   }, 1000);
// }

// function three() {
//   console.log("세번째");
// }

// // //순서 첫번째가 2초 뒤에 나오고 두번째, 세번째가 먼저나옴
// // one();
// // two();
// // three();

// function use(data) {
//   // 1. Promise 동적으로 생성
//   return new Promise(function (res, rej) {
//     // 2. setTimeout 실행하고 1초뒤에
//     setTimeout(() => {
//       if (data === 1) {
//         one();
//         res();
//       } else if (data === -1) {
//         rej();
//       }
//     }, 1000);
//   });
// }

// // use 호출해서 then 결과까지 기다린다음
// // 그다음 함수실행 two, three
// use(-1)
//   .then(function () {
//     // two();
//     // three();
//     console.log("난 res 성공임!!");
//   })
//   .catch(function () {
//     console.log("난 rej 실패");
//   });

///////////////===================== JSON ---------------------/////
// json 파일을 데이터처럼 가져와 보기
// 이제 데이터를 저장된 것을 가져와보기

function loadJson() {
  //데이터를 가져오는데에 성공했을 때then 부분을 탄다
  return fetch("main.json")
    .then((res) => {
      console.log(res.json());
    })
    .then((json) => {
      console.log(json.user);
    })
    .then((json) => {
      console.log(json.user);
    })
    .catch((rej) => {});
}

loadJson();

function loadJson2() {
  // fetch경로에 데이터를 요청한다 기본적으로 method는
  // get(가져온다 읽기) 방식과 post(참조도 되고쓰기 및 수정도 가능)
  // fetch는 비동기 요청 방식이다.
  return (
    fetch("main.json")
      //요청을 하는데 json 방식으로 받는다.
      .then((res) => res.json())
      // player 키값의 객체를 가져옴
      .then((json) => json.player)
  );
}

loadJson2().then((user) => {
  console.log(user);
  console.log(Object.values(user));
});
