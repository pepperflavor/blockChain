/*
input이
[1,0,1],
[0,0,1],
[1,1,1],

output
[1,1,1],
[0,0,1],
[1,0,1].

//행렬을 왼쪽으로 90도 회전(반시계 방향으로)
1. 행렬의 세번째 열이 회전된 행렬의 첫번째 행이 된다.
2. 행렬의 두번째 열이 회전된 행렬의 두번째 행이 된다.
3. 헹렬의 첫번째 열이 회전된 행렬의 세번째 행이 된다.
*/

const arr = [
  [1, 0, 1],
  [0, 0, 1],
  [1, 1, 1],
];

//원래 자리에 있던 요소 받아줄 변수 3개
let first = [];
let second = [];
let third = [];

//console.log(arr[1][0]); // 이렇게 찍어야 요소값 하나만 접근
//console.log(arr.length); // 이렇게 찍어야 요소값 하나만 접근

// 180도 돌리기ㅋㅋㅋㅋ
//  [y,x]  N: 배열의 길이
//  한번 회전할 때 [N-1-x, y]
function rollingPack(n, arr) {
  for (let y = 0; y < n; y++) {
    if (y == 0) {
      for (let x = 0; x < n; x++) {
        first.push(arr[n - 1 - y][x]); //180도 돈것의 맨 마지막줄ㅋㅋ
      }
    } else if (y == 1) {
      for (let x = 0; x < n; x++) {
        second.push(arr[n - 1 - y][x]); //180도 돈것의 중간줄
      }
    } else if (y == 2) {
      for (let x = 0; x < n; x++) {
        third.push(arr[n - 1 - y][x]); //180도 돈것의 첫번째줄
      }
    }
  }
  //배열 3개 합치기
  let newArr = [];
  //배열 2차원으로 집어넣는 방법
  newArr.push([first], [second], [third]);
  console.log(newArr);
  return newArr;
}

var spin = rollingPack(3, arr);
console.log(spin);
// console.log(spin[0][0]);
