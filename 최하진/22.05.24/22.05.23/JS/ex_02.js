/* 
1. 4과목의 점수를 입력 받고
2. 평균값을 구한다.
평균값이 70~79 C
80~89 B 
90~100 A
70미만이다 낙제
*/
let ko = Number(prompt("국어 점수를 입력하세요"));
let math = Number(prompt("수학 점수를 입력하세요"));
let engl = Number(prompt("영어 점수를 입력하세요"));
let sience = Number(prompt("과학 점수를 입력하세요"));

const avg = (ko + math + engl + sience)/4 ;

if(avg>=90 || avg<=100){
    alert( "당신의 학점은 A입니다.");
}
else if( avg>=80 || avg <=89){
    alert( "당신의 학점은 B입니다.");
}
else if( avg>=70 || avg <=79){
    alert( "당신의 학점은 C입니다.");
}
else{
    alert( "당신은 낙제입니다.");
}


