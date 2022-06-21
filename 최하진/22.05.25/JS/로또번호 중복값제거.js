//let lottoNumber = [];

let myNum = 0;
let mylotto = []; // 로또번호 집어넣을 배열
let count = 1;

alert("로또번호를 뽑습니다!! 행운을 빌게요");

while(count !=0){
    mylotto.splice(0,6);

for (let i = 0; i < 6; i++) {
    myNum = Math.floor((Math.random() * 44) + 1);
    if (mylotto.indexOf(myNum) == -1) {
        mylotto.push(myNum);
    } else if (mylotto.indexOf(myNum) != -1) {

        i--;
    }
    alert("이번주 로또번호 : " + mylotto);

}
    count =Number(prompt("종료를 원한다면 '0'을 누르세요"));
}
