// /* 
//  배열이란?
//     여러개의 요소를 순차적으로 나열.
//     사용빈도는 매우 높다.
//     일반적인 배열은 인덱스로 빠르게 접근이 된다. 요소를 삽입,삭제하는 경우에는 효율적이지 않다.
//     자바스크립트에서의 배열은 새시 테이릅로 구현된 객체이다.
//     인덱스로 접근하는 경우 일반적인 배열보다 퍼포먼스가 진다
//     반대로! 요소를 삽입 삭제하는 경우는 일반적인 배열보다 빠 르다
// */
// //1.

// const arrNum = new Array();
// arrNum[0] = 1;
// arrNum[1] = 2;
// arrNum[2] = "배열?";
// // 대괄호 안의 숫자 = 인덱스 라고 함

// console.log(arrNum);
// //오호... 서로 다른 자료형도 한 배열에 들어가는군요 자바스크립트여서? 원래 다른언어도 가능한가?
// // 다른언어에서 다른타입의 데이터들은 같은 배열에 담을 수 없음 
// // 다른언어는 배열을 선언할때 데이터타입을 같이 선언해주는데 자바스크립트는 데이터타입이 좀 자유로우니까
// const arrNum1 = new Array(1,2,3,"하하하하",'A');
// //인덱스의 시작 번호는 0임
// console.log(arrNum1[0]);
// console.log(arrNum1[3]);

// //선언하는 방법1
// //  선언과 동시에 데이터를 넣어줌
// const arrNum2 = [1,2,3,4,5,6,7,8,9];
// console.log(arrNum2);


// // 배열선언방법2
// const arrNum3 = [];
// arrNum3[0]=1;
// arrNum3[1]=2;
// console.log(arrNum3);

// const arrNum4 = [];
// for(let i=0; i<5; i++){
//     arrNum4[i] = i+1;
// }
// console.log(arrNum4);

// //arrNum4의 길이만큼 돌려라
// for(let i =0; i<arrNum4.length ; i++){
//     document.write(arrNum4[i]);
// }

// //자바스크립트 배열은 다른언어(자료구조에서의 배열과 다름)와 다르게  
// //내부가 해시테이블로 이뤄져있다. 각각 데이터들의 위치가 이어져있지 않을 수 있음
// const arr=[1,2,3];
// console.log(arr.length);
// console.log("의 길이"+arr.length);

// arr.push(4);
// console.log("PUSH이후 arr 데이터 : ", arr);
// console.log(arr.length);
// arr.pop();

// //g현제 length 프로퍼티 값보다 작은 값을 할당하면 배열의 길이가 줄어든다
// const arr1 = [1, 2, 3, 4, 5];
// arr1.length = 3; //3
// console.log(arr1);

// const arr2 =[1];
// arr2.length = 3;
// console.log(arr2.length); 
// console.log(arr2);
// ; 

// const arr3 = [1,3];
// console.log(arr);



//  /*
//     배열의 다양한 메서드들....
//     push : 배열의 끝에 원하는 값을 추가한다
//     pop : 마지막에 있는 녀석 삭제
//     reverse : 배열을 역순으로
//     concat : 두개의 벼열을 합침
//     indexof : 배열에서 인수로 전달된 요소를 검색 ->인덱스를 반환
//     배열에 인수로 전달한 요소의 중복되는 요소가 여러개가 있다면
//     첫번째로 검색된 요소의 인덱스를 반환한다.
//      만약 검색하려는 데이터가 없으면 -1반환
//      splice : 배열 중간에 데이터를 삽입 또는 삭제를 하는경우 사용
//     */


// ///////////////////////////////////////////////////

//     let arr4=[4, 5, 10, 3, 2, 111, 99];
//     const arr5=[1, 2, 3, 4, 5 ];
//     //arr4.shift();
//     //arr4.reverse(); //배열 역순으로 뒤집기
//     //d
//     arr4 = arr4.concat(arr); //arr5를 한친덕 
//     console.log(arr4);

//     const arr =  [1, 2, 3, 4];
//     console.log(arr.indexOf(2));
//     console.log(arr.indexOf(4));
//     console.log(arr.indexOf(2,2)); //두번째 인덱

  

//     const foods =['apple', 'banana', 'orange'];
//     //food 배열에 orange가 있는지 확인
//     if(foods.indexOf('orange')===-1){
//         foods.push('orange'); //없으면 오렌지 넣어라
//     }
//     //푸드 배열에 orange가 있는지 확인(ES7)
//     if(!foods.includes('orange')){
//         foods.push('orange'); //없으면 오렌지 넣어라
//     }
//     console.log(foods);

    ///////////////////////////////////////////////////////////////////////////////////////////

    const numArr = [1, 2, 3, 4];
    //원본 배열의 인덱스 1부터 2개의 요소를 제거, 그 자리에 30과 40을 넣는다.
    //const res = numArr.splice(1, 2, 30, 40);
    const res = numArr.splice(1,2);
    console.log(res);
    console.log(numArr);


    const numArr1 = [1, 2, 3, 1, 2];
    //배열에서 특정요소를 제거하려면 indexOf메서드를 통해
    //특정 요소의 인덱스를 가져오고 splice메서드를 사용

    function remove(arr, index){

        //제거할 item 요소의 인덱스
        const index = arr.indexOf(item);
        // 제거할 item이 있는지 판별, 있다면 제거해준다
        if(index !== -1) arr.splice(index, 1);
        return arr;
    }
    console.log(remove(numArr1,2));
    