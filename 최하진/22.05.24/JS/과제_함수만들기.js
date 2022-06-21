//1. min함수 만들기 a와 b중 작은 값을 반환

function min(a, b){
    if((a-b) < 0){
        return b;
    }else if((a-b)> 0 ){
        return a;
    }else{
        alert("a와 b의 값이 같습니다.");
    }
}

//2. pow(x, n)함수 만들기 x의 n제곱을 반환해주는 함수 만들기

let result = 0;
function pow(x, n){
  result= (x ** n);
    return result;
}
pow(2, 3);
