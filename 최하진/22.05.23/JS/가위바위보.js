alert("가위, 바위, 보 게임을 시작합니다.");
// 유저의 패 입력받기

// 유저 돈
let user_money = 10000; 
//컴퓨터 돈
let computer_money = 10000;

//구경꾼 이 내게 돈을 줄 확률
function help_money(){
    
}

function DOBAK(){
let USER = Number(prompt("1:가위  2:바위  3:보 입니다. 숫자를 입력하세요 : "));

// 컴퓨처의 패 결정
let COM = Math.floor(Math.random()*10);
if(COM >= 7 && COM<= 9){
    COM = 3;
    console.log("컴퓨터= 보");
}
else if(COM>=4 && COM<=6){
    COM = 2;
    console.log("컴퓨터= 바위");
}
else if(COM>=0 && COM <=3){
    COM = 1;
    console.log("컴퓨터= 가위");
}


//승부 판단하기
if(USER == COM){
    alert("무승부입니다.");
}
// 유저가 가위를 냈을때
else if(USER == 1 && COM ==2){
    alert("유저 : 가위, 컴퓨터 : 바위  /   COMPUTER가 이겼습니다.");
}
else if(USER == 1 && COM ==3){
    alert("유저 : 가위, 컴퓨터 : 보   /  USER가 이겼습니다.");
}
// 유저가 바위를 냈을때
else if(USER == 2 && COM ==1){
    alert("유저 : 바위, 컴퓨터 : 가위   /  USER가 이겼습니다.");
}
else if(USER == 2 && COM ==3){
    alert("유저 : 바위, 컴퓨터 : 보   /  COMPUTER가 이겼습니다.");
}
// 유저가 보를 냈을때
else if(USER == 3 && COM ==1){
    alert("유저 : 보, 컴퓨터 : 가위   /  USECOMPUTER가 이겼습니다.");
}
else if(USER == 3 && COM ==2){
    alert("유저 : 보, 컴퓨터 :바위  /  USER가 이겼습니다.");
}
}