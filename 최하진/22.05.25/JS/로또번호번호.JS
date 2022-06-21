let lottoNumber=[];

let myNum = Math.floor(Math.random()*44)+1; //랜덤번호 뽑기

for(let i=0; i<6; i++){
    if(lottoNumber.indexOf(myNum) == -1){
        lottoNumber.push(myNum);
    }else if(lottoNumber.indexOf(myNum) != -1){
        i--;
    }

}

document.write("오늘의 로또번호는 <br>" + lottoNumber);