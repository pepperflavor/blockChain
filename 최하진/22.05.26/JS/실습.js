/*
실습과제

숫자야구게임만들기
1. 컴퓨터는 임의의 숫자 3개를 낸다.
2. 유저는 아무거나 낼 수 있다.

ex) 컴 1 2 3
  유저 7 8 9
=> 아웃
====================
4 5 6
5 7 9 1볼(숫자는 하나 같고 자리가 틀림)
===========================
1,2,3
1,2,4 => 2스트라이크(숫자 2개맞고 자리도 동일)
======================================
- 같은숫자 같은 인덱스값 = > 스트라이크
- 3스트라이크면 승리
- 플레이 기회는 자유
*/
//컴퓨터가 내는 공
let com_ball = [];
//유저가 내는 공을 받을 배열
let user_ball = [];
//user_ball의 중복검사를 위해 객체로 담아줄 것
let user_shoot = 0;
let set_ball=0;

//com이 1~9사이에서 중복되지 않게 임의의 숫자 3개를 뽑는다
for (let i = 1; i <= 3; i++) {
    ball = Math.floor((Math.random() * 8) + 1); //1~9사이의 숫자 뽑기
    if (com_ball.includes(ball)) {
        i--;
    } else {
        com_ball.push(ball);
    }
    console.log(com_ball + "컴볼 값");
    console.log(typeof(com_ball) + "컴볼타입");
}
console.log(com_ball + "for문 밖");

// alert("숫자 야구게임을 시작합니다.\n ");
// for(let i=0; i<3;i++) {
//     set_ball = Number(prompt("1~9사이의 숫자를 입력하세요 : \n *총 3번 입력합니다.* \n ** 주의 같은 숫자는 입력하면 안됩니다.**"));
//     if(user_ball.includes(set_ball)){
//         alert("중복된 숫자는 입력할 수 없습니다.\n 다시 입력해주세요.");
//         i--;
//     }else if(user_ball.includes(set_ball)){
//         user_ball.push(set_ball);
//     }
//     // if(right_ball.length ==3){ // 중복된 숫자 없이 공을 3개 잘 냈으면 끝
//     //     break;
//     // }
//     }

// //유저가 던진공 중복검사
// console.log(typeof(user_ball)+"유저볼 while문 밖") 
// console.log(user_ball);






    // //배열에 담기긴함 숫자 하나만 입력해야함
    // user_ball.push( Number(prompt("1~9사이의 숫자를 입력하세요 : \n *총 3번 입력합니다.* \n ** 주의 같은 숫자는 입력하면 안됩니다.**")));
    // console.log(typeof(user_ball)+"유저볼") //이 안에서  user_ball객체임;
    // console.log(user_ball);
    // //let user_shoot = new Set(user_ball);


//     console.log(typeof(user_shoot));
//     right_ball = Array.from(user_shoot);
//     console.log("라이트 : " +typeof(right_ball));
//     console.log(right_ball+"right_ball");
