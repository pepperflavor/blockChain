// 조건문


let number = 1;
let number2 = 2;

// 만약 조건문이 참이라면(true)
if(조건){
    //여기를 실행해라
}

if(number < number2){
    console.log(1);
}

if(조건2){
    //실행코드
}

const age = 10;
const age1 = 20;

if(age<age1){
    sadasd
}
else if(age<age1){
 console.log("바로 위에 있는 if문이 거짓일때만 여기 실핼")
}
else {
    console.log("위 조건들이 모두 참이 아니면 여기가 실행ㄱ")
}

///////////////////////////
const isCheck =(a&&b) || (c&&d)

// 조건식을 변수로 만들어서  코드길이를 줄이는 방법이있다.
if(isCheck){

}

//////////////////////////

let inputNum = Number(prompt("아무 숫자나 입력"));

if(inputNum<10){
    console.log("내가 입력한 값 : ", inputNum);
}
//현재조건에 부합하는 코드만 실행한후 바로 빠져나감
else if(inputNum>10 || inputNum<20){
    console.log("첫번째 else if 실행");
    console.log("내가 입력한 값 : ", inputNum);
}
else if(inputNum>10 && inputNum<20){
    console.log("두번째 else if 실행");
    console.log("내가 입력한 값 : ", inputNum);
}
else{
    console.log("else 실행");
}

// if문은 조건을 만족해도 그 아래에 있는 모드 ㄴif문을 모두 검사함
// else if문은 조건에 부합해 실행되는 코드가 있으면 그다음 조건문이 부합해도
// 무시하고 넘어감

