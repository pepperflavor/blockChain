let lottoNumber = [];


let myNum = new Array; //뽑은 6개 담을 배열
let lottoNumrand = []; // 로또 숫자각각 뽑힐 확률을 담은 배열
let pick=0;
let random=0;

function randomInt(){
    //1~45사이의 랜덤한 수 뽑아주는 함수
   pick=Math.floor((Math.random()*44)+1); 
   console.log("pick : " + pick);
}

for(let j=0; j<6;j++){

    randomInt();
    myNum[j] = pick;
    document.write(myNum[j] + "<br>");
}
   console.log(myNum);

   
   //중복된 건 안나오게




// //1~45가 담긴 배열
// for(let i=1; i<=45; i++){
//     lottoNumber.push(i);
// }   console.log(lottoNumber);
