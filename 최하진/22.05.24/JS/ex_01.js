// // document.write(1);

// //반복문
// // for(변수 선언문 or 할당문; 조건식; 증감식;){

// //         조건식이 참인경우 반복 실행될 실행문
// // }


// // 조건식 결과가 false가 될때까지 실행문 반복실행
// for(let i =0; i<2;i++){
//     document.write(i + "<br/>");
// }

//1부터 100까지의 합
// let res =0;
// for(let i=1; i<=100; i++){
//     res = res+i;
//     //console.log(res);
//     //=> res += i;
// }
// console.log(res);



// for(let i =0; i<10; i++){

//     if(i==2){
//         continue; // i=2이면 연산하지 말고 건너뛰어라.라는 뜻
//     }
//     console.log(i);
// }

// for(let i=5; i>=0; i--){
//     console.log(i);
// }


// //2중 for문
// for(let i=0; i<3; i++){
//     for(let j=0; j<3; j++){
//         console.log(i, j);
//     }
// }

// 펏번째 i의 조건식이 참이어서 안의 실행문 실행-> j가 있는 두번째 for문
// 두번째 for문의 조건식이 참인동안 console.log로 찍어냄-> 그다음 다시 i+1 상태로
// j의 조건식이 참인동안 또 찍어냄


// let result =0;
// for(let a =2; a<=9; a++){
//     document.write("<b>" + "구구단 " + a + " 단" + "</b>" +"<br>");
//     for(let i=1; i<=9; i++){
//         document.write((a*i)+"<br>");
//     }
//     document.write("<br>");
// }


//기본적으로 무한루프
//종료조건이 있어야 한다.
// let number=0;
// while(number < 10){

//     number++;
//     console.log(number);
//     if(number===10)break;
// }

// while(number<10){

//     number++;
//     if(number){
//         console.log(number);
//     }
// }

// let number=0;
// while(number<10){

//     number++;
//     if(number %2 !=0){ continue; //2로 나눈 나머지가 0이 아니라면 건너뛰어라 코테에 나오기도함
//         console.log(number);
//     }
// }

//왼쪽 직각삼각형 별 찍기
for(let i=0; i<5; i++){
    for(let k=0; k<=i; k++){
        document.write('*');
    }
    document.write('<br>');
}




//역방향 왼쪽 직각삼각형 별 찍기
for(let i =5; i>=0; i--){
    for(let k=1; k<=i; k++){
        document.write('*');
    }
    document.write('<br>');
}


// //오른쪽 직각삼각형 별 찍기
for(let i=5; i>0; i--){
    for(let k=2;k<=i ;k++){
        document.write("&nbsp");
    }
    for(let j=0; 6-i>j; j++){
    document.write('*');
}
document.write('<br>');
}

//d오른쪽 직삼각형역방향 별찍ㄱ
for(let i =5; i>0; i--){
    for(let k=0; 5-i>k;k++){
        document.write("&nbsp"); //0~4개 공백
    }
    for(let j=0;i-j>0 ; j++){
        document.write('*');
    }
    document.write('<br>');
}

//     *
//    ***
//   *****
//  *******
// *********

// //정삼각형 만들기
// for(let i=5; i>=0; i--){
//     for(let k=1; k<=i-1; k++){
//         document.write("&nbsp");
//     }
//     // for(let j=0;(2*j)/3<(2*i)/3 ;j++){ //1, 3, 5, 7, 9번 씩반복되게
//     //     document.write('*');
//     // }
//     for(let j=0; j<=0 || (j*2)/3 <=(5-i)*2 ;j++){

//         document.write('*');
//     }

//     document.write('<br>');
// // }


// for(let i=5; i>=0; i--){
//     for(let k=1; k<=i-1; k++){
//         document.write("&nbsp");
//     }
//     // for(let j=0;(2*j)/3<(2*i)/3 ;j++){ //1, 3, 5, 7, 9번 씩반복되게
//     //     document.write('*');
//     // }
//     for(let j=1; ;j++){
                   
//         document.write('*');
//     }

//     document.write('<br>');
// }
