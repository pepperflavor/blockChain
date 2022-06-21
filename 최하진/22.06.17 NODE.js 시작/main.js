// 정규 표현식 정규 표현식은 문자 검색과 교체에 사용되는 패턴을 제공한다. 자바스크립트에서 RegExp 객체의 문자 함수를 조합해 정규
// // 사용할 수 있다. box변수에 box 태그를 선택자로 담아 놓고
// let box = document.querySelector(".box");

// box의 innerHTML 안녕하세요를 대입 box.innerHTML = "안녕하세요"; let reg = new RegExp("안녕");
// RegExp는 두개의 매개변수 string | RegExp, flag?: string 앞은 찾는 문자 두번째는 플래그 플래그는 정규표현식에
// 영향을 주는 옵션 플래그의 종료에는 i : 대소문자 구분없이 구별할 수 있다. A, a g : 패턴과 일치하는 모든 것을 찾는다. g가
// 없으면 일치하는 것에서 첫번째 것만 가져온다. m : 다중 행모드 줄이 내려져 잇어도 찾아옵니다. 백틱 같은걸로 행차이가 있어도 ! let
// string = "안녕하세요";  문자열 함수 match('찾는 문자열' , '플래그'); box.innerHTML =
// string.match("무아"); match로 안녕만 찾아서 꺼낸것 없으면 아무것도 안꺼내줌, 오류안냄 let string2 =
// "하하하하하핳핳하하하하하핳핳";  슬래시는  " / " 자바스크립트에서 정규표현식을 생성하고 있다는 것을 알려줘요  문자열에 따옴표를 쓰는
// 것과 같다. box.innerHTML = string2.match(/하/g); g는 패턴과 일치하는 모든 문자를 찾는데 ' , '로 구분
// 정규식을 사용하는 이유는 이메일형식인지 아이디 등등 값 체크하는 정규식  i 플래그 사용  i는 대소문자 구별 없이 문자를 찾는다. let
// str = "나는 아아아아abc abc, abcabc , 나는 문자열"; let str2 = str.match(/aBc/i);
// box.innerHTML = str2; console.log(str2);  groups : 원하는 문자열이 복수개인지, index 는
// 처음으로 일치하는 문자열의 시작 인덱스 시점인 듯? console.log("배열" + str2[0]);  원하는 문자열을 찾아서 배열형태로
// 잡아줌 console.log(typeof str2); 나는 웹개발자 본인 이름
// //

// let intMe = "나는 웹 개발자 최하진";

// // let me = intMe.match(/나는/g); let web = intMe.match(/웹/g); let make =
// // intMe.match(/개발자/g); let name = intMe.match(/최하진/g); match로 가져올때 띄어쓰기 를 넣어도
// // 가져올 수 있음 box.innerHTML = me + "&nbsp;" + web + "&nbsp;" + make + "&nbsp;" +
// // name; 편하게 바꿔보기 name2에 box.innerHTML 넣으면 내용은 "나는 웹개발자 본인이름" 이렇게 들어있고 해당 문자열을
// // 찾아서 바꿔주는 편리한 아이 replace
// let name2 = "나는 웹 개발자 본인 이름";
// name2 = name2.replace(/ 본인 이름/i, "  최하진22");

// box.innerHTML = name2;

// // name2에 다시 대입하는데 name2를 문자열 함수 replace를 사용해서 " 본인 이름"이 문자열을 찾고 찾은 문자열을 "최하진"<-
// // 이 문자열로 교체한 후에 name2에 대입해줌 그래서  let name2 = "나는 웹 개발자 본인 이름"; => "나는 웹 개발자
// // 최하진22" 이렇게 바뀐것 replace의 두번째 매개변수에 특수문자를 입력하면 특수한 방법으로 문자열을 교체할 수 있다. 특수한 방법에는
// // $& 패턴과 일치하는 부분의 문자열 $`일치하기 전의 문자열의 일부를 대입 $' 일치한 후 문자열의 일부를 대입

// let name3 = box.innerHTML;
// box.innerHTML = name3.replace(/최하진/, "$' 집에 가고싶다"); // 중간에도 들어가짐 문자열도 배열

//이제 해보기
//1. input을 2개 만들고 하고싶은일, 이름 (입력받는것은 버튼으로 처리)
//2. 두개가 box안의 내용이나 콘솔에 나오고
//3. 교체 버튼을 누르면 바뀌기
//4. 이름 뒤로 하고싶은 일을 대입시키기(두개의 위치를 바꿔보기)
//5. 버튼은 총 2개 출력해주는 버튼, 위치 바꾸는 버튼

// let wish = document.querySelector("");

// 배열형태로 form 태그 내의 입력값 가져옴
let arr = document.querySelector("form");
let onOff = 0; // 버튼 눌렀을때 onoff 유무 확인
let text = ""; // 입력받은 텍스트 넣어줄 string
let onOff2 = 0; // change 함수의 버튼 눌렀을때 onoff 유무 확인
let text_C = ""; //change 함수의 text유무 확인
let txtArr = [];
let changArr = []; //change 함수에서 쓸 텍스트 받을 arr

// 입력받은 값을 배열에 그냥 미리 담아주자
// -2 한 이유는 버튼태그가 form안에 들어있기 때문!
for (let j = 0; j < arr.length - 2; j++) {
  txtArr[j] = arr.elements[j].value;
}

console.log(txtArr);
// 입력받은대로 출력해주는 함수
function print() {
  if (onOff == 0) {
    for (let i = 0; i < txtArr.length; i++) {
      //배열 내용 지워서 배열 초기화해주기
      text += txtArr[i] + "&nbsp;";
    }
    // 태그가 class면 이렇게 변수처럼 사용못함 id로 선언해줘야한다.
    print22.innerHTML = text;
    onOff = 1;
    onOff2 = 0;
  } else if (onOff == 1) {
    print22.innerHTML = " ";
    onOff = 0;
    onOff2 = 0;

    //담은 내용 지워주기
    txtArr.splice(0, txtArr.length);
  }
}

// 위치 바꿔서 출력해주는 함수
//console.log(index);
function change() {
  //let index = new Array(txtArr.length);
  let index = txtArr.length;
  if (onOff2 == 0) {
    //자리 바꿔서 출력해줄것이기 때문에 내용을거꾸로 담아준다.
    // 처음에 for문을 2개 만들었는데 그렇게 하니까 changArr의 첫번쨰 인덱스에 원본txt내용이 돌아가면서 쭉 들어갔다가 결국
    // 마지막 텍스트만 들어간채로 끝남
    // 그래서 변수를 하나 만들고 그걸로 인덱스 역할을 하게 만들었다.
    for (let j = 0; j < txtArr.length; j++) {
      changArr[index] = txtArr[j];
      // 이렇게 하면 끝번째부터 값을 넣기 때문에 j번째 0번째일때 값이 비어있음
      // 그래서 아래에서 switchBtn.innerHTML = text_C;로 출력해줄때 비어있던것...!!
      text_C += changArr[j] + "&nbsp;";
      index--;
      //console.log("for문 안" + changArr);
    }
    //console.log("for문 밖22" + changArr);
    //changArr.join(" "); 이건 그냥 배열로 넣으면 , 로 구분자가 같이 출력되는데 ,를 띄어쓰기로
    // 대체해준다.
    switchBtn.innerHTML = changArr.join(" ");
    onOff2 = 1;
  } else if (onOff == 1) {
    switchBtn.innerHTML = " ";
    onOff2 = 0;
    changArr.splice(0, changArr.length);
  }
  //   changArr.splice(0, changArr.length);
}
///요렇게 쓰니까 배열에 계속 값이 추가되어서 배열의 내용 지워주는 조건이 더 필요함!!
//undefined가 왜 들어가는거지?
