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

//=========================교수님 코드========================
function rotateMatrix(mat) {
  let N = mat.length;

  for (let i = 0; i < N / 2; i++) {
    //현재 항목을 기준으로
    for (let k = i; k < N - i - 1; k++) {
      //현재 칸의 값을 임시 변수에 저장
      let temp = mat[i][k];
      //현재 항목 기준 오른쪽값을 현재 항목 기준 위쪽칸에 할당
      mat[i][k] = mat[k][N - 1 - i];
      //현재 항목기준 아래쪽 값을 현재 항목 기준 오른쪽 칸에 할당
      mat[k][N - 1 - i] = mat[N - 1 - i][N - 1 - k];
      ㅜ4ㅡ;
      //현재 항목 기준 왼쪽값을 현재 항목 기준 아래쪽 칸에 할당
      mat[N - 1 - i][N - 1 - k] = mat[N - 1 - k][i];
      //임시변수의 값을 현재 항목 기준 왼쪽칸에 할당
      mat[N - 1 - k][i] = temp;
    }
  }
  return mat;
}

const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let arrrr = rotateMatrix(mat);
let two = rotateMatrix(arrrr);
console.log(arrrr);
console.log(two);

//  [y,x]  N: 배열의 길이
//  한번 회전할 때 [N-1-x, y]
// 각 회전한 요소들을 배열에 집어 넣어야함

// const arr = [
//   [1, 0, 1],
//   [0, 0, 1],
//   [1, 1, 1],
// ];

// // 배열길이
// // n =arr.lenght
// function rollingArr(n, arr){
//   for (let y = 0; y < n; y++) {
//     for (let x = 0; x < n; x++) {
//         arr[n-1-x, y]

//     }
//   }
// }

// console.log(arr[])
