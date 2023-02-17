/*
    버블정렬
    가장 간단하지만 전체 배열을 순회하면서 이전항목이 다음 항목보다 큰 경우 두 항목 교환
    모든 가능한 짝을 비교하기 때문
 */

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function random(n) {
  let arr = new Array();
  let num;
  let temp;

  for (let i = 0; i <= n; i++) {
    arr.push(i);
  }
  for (let i = 0; i < arr.length; i++) {
    num = Math.floor(Math.random() * n);
    temp = arr[i];
    arr[i] = arr[num];
    arr[num] = temp;
  }
  return arr;
}

//         function bubbleSort(array) {
//             const arrlen = array.length;
//             for(let i = 0; i < arrlen; i++) {
//                 for(let k = 0; k < arrlen -1 -i; k++) {
//                     if(array[k]>array[k+1]) {
//                         let temp = array[k];
//                         array[k] = array[k+1];
//                         array[k+1] = temp;
//                     }
//                 }
//             }
//             return array;
//        }

// let bubbleSorting = random(500000);
// console.log("버블 정렬 전 : ", bubbleSorting);
// let startTime = new Date().getTime() / 1000;
// console.log("버블 정렬 후 : ", bubbleSort(bubbleSorting));
// let endTime = new Date().getTime() / 1000;
// console.log(`정렬시간 : ${endTime - startTime}`);

//선택정렬 : 가장 작은 항목을 찾아서 해당 항목을 배열의 현위치에 삽입
/*
 7 4 5 6 8 2 1
 1 4 5 6 7 2 7 최소값 1 -> 7 교환
 1 2 5 6 8 4 7 최소값 2 -> 4 교환
 1 2 4 6 8 5 7 최소값 4 -> 5 교환
 1 2 4 5 8 6 7 최소값 5 -> 6 교환
 1 2 4 5 6 8 7 최소값 6 -> 8 교환
 1 2 4 5 6 7 8 최소값 7 -> 8 교환
*/

function selectSort(arr) {
  const arrlen = arr.length;
  let min;

  for (let i = 0; i < arrlen; i++) {
    //최소 항목을 현재 위치로 설정
    min = i;

    //더 작은 항목이 있는지 배열의 나머지를 확인
    for (let k = i + 1; k < arrlen; k++) {
      if (arr[k] < arr[min]) {
        min = k;
      }
    }
    //현재 위치가 최소 항목이 아니라면 항목 swap
    if (i != min) {
      swap(arr, i, min);
    }
  }
  return arr;
}

let number = random(100000);
console.log("선택 정렬 전 : ", number);
let startTime = new Date().getTime() / 1000;
console.log("선택 정렬 후 : ", selectSort(number));
let endTime = new Date().getTime() / 1000;
console.log(`정렬시간 : ${endTime - startTime}`);
