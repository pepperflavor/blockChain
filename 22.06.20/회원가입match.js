// 값 검증하기 form에 있는 input 박스에 있는 값들 다 가져오기
let getItem = document.querySelector("form");
let container = []; // input 값 담을 배열
// 0번 : 이름, 1:아이디, 2번:연락처, 3: 이메일, 4:비밀번호, 5:비밀번호 확인 검사식 6: 개인정보 취급방침 (on off임)
let val="";
let nameReg = new RegExp(/^[가-힣\s]+$/);
//val.match(/^[가-힣\s]+$/); // 이름검증
let idReg = new RegExp(/^[0-9a-z]+$/); //아이디 검증
let telReg = new RegExp(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/); //전화번호 검증
let mailReg = new RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i); // 메일 검증
let pwdReg = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);  // 비밀번호 검증
let matchArr = []; // match로 걸러낸 값 담아줄 배열


 function check() {
     // input에 입력한값 그때그때 가져와서 배열에 담기
     for (let i = 0; i < getItem.length; i++) {
         container[i] = getItem
         .elements[i]
         .value;
        }
    //console.log(container[0].match(nameReg)); //string이랑 배열이 값비교가 당연히 안되지^^ㅎ
   // console.log(container[0]);

    // match로 거른 값 비교해주기 위해서 배열로 만들어주기
    for(let j=0; j < container.length-1; j++){
        switch (j) {
            case 0:
                matchArr.push(container[j].match(nameReg));
                
            case 1:
                matchArr.push(container[j].match(idReg));
                
            case 2:
                matchArr.push(container[j].match(telReg));
                
            case 3:
                matchArr.push(container[j].match(mailReg));
                
            case 4:
                matchArr.push(container[j].match(pwdReg));
                
            case 5:
                matchArr.push(container[j].match(idReg));
            default:
                break;
        }
    }




    // 값 검증하기 시작
    if (container[0] !== matchArr[0]) {
        // 이름검증
        alert("이름을 잘못 입력하셨습니다.");
    } else if (container[1] !== container[1]) {
        // id 검증
        alert("ID가 잘못된 형식입니다.");
    } else if  (container[2] !==  container[2]) {
        // 연락처 검증
        alert("연락처가 잘못된 형식입니다.");
    }else if(container[3] !== container[3]){
        // 메일검증
        alert("이메일이 잘못된 형식입니다.");
    }else if(container[4] !== container[4]){
        alert("비밀번호가 잘못된 형식입니다.");
    }else if(container[4] !== container[5]){
        alert(" '비밀번호 확인'란을 잘못 입력하셨습니다.");
    }else if(container[6] !== "on"){
        alert("개인정보 취급방침에 동의해주십시오");
    }
    else{
        alert("회원가입을 축하드립니다!");
    }
    
}
