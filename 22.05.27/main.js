// /*
//     객체(object)
//     기본 데이터 타입을 제외한 나머지 녀석들... 모두 객체라고 볼 수 있다
//     함수, 배열 , 정규표현식...
//     객체는  key, value로 구성되어있다. 자바스크립트에서 저 안의 요소들을 property라고 한다.

//     프로퍼티 : 객체의 상태를 나타내는 값.
//     메서드 : 프로퍼티를 참조하고 조작할 수 있는 동작
// */

// // const person = {
// //     name: 'Lee', //name<-key  Lee->value  property
// //     age : 20    //property
// // };

// let counter = {
//     num:0,  //->property
//     increase : function(){  // =메서드
//         this.num++;
//     }
// }

// let person = { //객체 리터럴(인간이 이해할 수 있는 표기법)
//     name : 'Lee',
//     Hello : function(){
//         console.log(`Hello My name is ${this.name}`);//작은 따옴표가 아니라 1옆에 `
//     }
// }
// // //console.log(typeof person); //object 라고 뜸
// // //console.log(person);
// // //console.log(person.name); // 오브젝트명에 점 ' . '을 찍으면 해당 객체의 프로퍼티에 접근할 수 있다.
// // console.log('여기'+ person.Hello());
// // person.Hello();


// //Hello.console.log(typeof person);
// //console.log(person);
// console.log(person.name);
// console.log(person.Hello);
// person.Hello();






// //중괄호 내에 프로퍼티를 정의하지 않으면 빈 객체 생성
// let empty = {};

// //객체 안에 객체를 넣을 수 있다.
// let student = {
//     list:{a:10, b:20, c:30}, //객체
//     print : function(){
//         console.log("나는 프린트");
//     }
// }

// //전역변수는 가급적 쓰지 않는것이 좋다 => 값이 변경되면 오류가 날 수 있기 때문
// //차라리 하나의 객체를 담는게 낫다
// //전역변수 남발하지 말아라....

// // 전역변수를 안쓰는게 좋지만 불가피하게 사용하게 된다면
// // 1. 하나의 객체를 전역변수로 만들고 객체의 속성으로 변수를 관리하면 된다.

// let myObj = {};
// myObj.cal = {a:null, b:null};
// myObj.test = {a:null, b:null};
// myObj.cal.a = 10;
// myObj.cal.b = 20;

// function sum(){
//     return myObj.cal.a + myObj.cal.b;
// }


// let Korea = {
//     a:500,
//     b:300,

//     seoul:{
//         a:100,
//         b:20,
//         c:50,
//     },
// };


// let circle = {
//     radius : 5,
//     getDiameter : function(){
//         return 2* this.radius; // =>객체 자신을 가리키는 참조변수. circle
//     }
// }
// //console.log(circle.getDiameter());

// // 프로퍼티 접근 방법
// // . 또는 [] ==> 대괄호로 접근하려면 안에 싱글쿼터 '' 작은따옴표로 감싼 문자열이어야함
// //console.log(circle.radius);
// //console.log(circle['radius']);

// let obj = {a:10, b:20, c:30};

// for(const key in obj){
//     console.log(key);
// }
// for(const val in obj){
//     console.log(obj[val]);
// }

// for(i in obj){
//     console.log("key : " + i + ' value : ' + obj[i]);
// }

// function User(name){
//     // this = {}; 이렇게 암시적으로 빈객체가 생성된다.
//     this.name = name;
//     this.isCheck = false;

//     //return this;
// }
// //let User = new User("홍길동");

function Person(name, age, cel, city){
    this.name = name;
    this.age = age;
    this.city = city;
    this.cel =cel;
    this.information = function(){
        console.log(" 나는 " +this.name + " 나이는 :"+this.age+ " 사는 곳은 :" +this.city)

    this.peopleSum = function(){
        console.log("이름은 : " + this.name + "합" + (this.age + this.cel) + "사는 곳 : " + this.city);
    } 
    }
}
// // //인스턴스
// // //클래스에 의해 메모리에 저장된 실체-> 객체가 메모리에 저장되어 실제로 존재하는 것.
// let p1 = new Person("사자", 19, "에버랜드"); // 에버랜드를 지웠더니 undefined라고 뜸
// let p2 = new Person("호랑이", 20 , "내 앞마당"); // 문자열이 아니라 숫자를 넣어도 됨=> 다른 자료형 데이터를 넣어도 OK
// p1.information(); 
// p2.information();
// // //console.log(p1 == p2); // 같지 않음 틀에 찍어서 새로 만든것


// // // 빈 객체를 만들어서 

// // /*  
// //     생성자 함수라고 한다. 
// //     보통함수와 비슷함
// //     함수 이름의 첫글자는 대문자
// // */


// // //////////////////////실습/////////////////////////////////////////
// // /* 1. 회사에 4명이 있어요.(모든 직원의 월급에 대한 정보를 담고 있는 객체가 있다.)
// // 모든 팀원의 월급을 합한 값(함수-메서드로 구현)을 출력하세요.
// // 2. 객체 A가 프로퍼티 값이 숫자인 경우 그 값을 두배로 늘려주는 함수 만들기
// // */  

// // // let Salary={
// // //     list : {A:200, B:300, C: 400, D:500},
// // // }

// //================================1번문제 답=====================================

let SalSum=0;
let Salary={
    A : 700,
    B : 300,
    C : 400,
    D : 500,
}

// //Object.values(객체이름) => 객체의 원하는 키/밸류 값을 배열로 바꿔줌
// //월급 합하는 함수
// //배열로 value만 뽑아서 계싼함
// function salarySum(obj){
//     let salValues = Object.values(obj);
//     for(let i=0; i<salValues.length;i++){
//         SalSum += salValues[i];
//     }
//     return SalSum;
// }

// console.log(salarySum(Salary));
// //================================1번문제 답=====================================.



// // function doubleSal(obj){
// //     let obj_value = Object.values(obj)
// //     for(let i=0; i<obj_value.length;i++){
// //         if(typeof(obj_value[i]) ==Number){
// //             obj_value[i] *2;
// //         }else{}
// //     }
// // }


// /*
// Object.keys(obj) – 객체의 키만 담은 배열을 반환합니다.
// Object.values(obj) – 객체의 값만 담은 배열을 반환합니다.
// Object.entries(obj) – [키, 값] 쌍을 담은 배열을 반환합니다.
// */



// //샐러리의 밸류값만 뽑아서 만든배열
// var doubleSal = Object.values(Salary); 

// console.log(doubleSal);
// //new Salary_val();
// // 월급값만 뽑아낸 배열에 각 *2 한걸 다시 배열로 뱉어서 그걸 넣어주면 되지않을까?



// //근데 배열형태로 뽑아왔다고 생각했는데 객체형태로나왔네...? => 배열맞음
// //2배로 뽑아줌
// //1. value값을 뽑아오고 index 순서도 뽑아와
// //value값만 뽑아서 썼더니 알아서 오름차순으로 정렬해줌
// doubleSal.forEach((value,index) =>{ //
//     console.log(value);
//     console.log(index);
//     //2. doubleSal에다가 각 인덱스에 value값을 뽑아서 넣어줘
//     doubleSal[index]=value*2;
// });

// //==============================키값 밸류값 다 뽑아오기===================

//2배 해줄 월급목록이 담긴 배열 그대로 복사
var doubleSal_2 = Object.entries(Salary); 
// //객체를 키값이랑 value값을 같이 갖고와서 배열로 바꾸면 2차원 배열이 된다.
// //console.log(doubleSal_2);
// //console.log("값 접근 " + doubleSal_2[0][1]);
// console.log(doubleSal_2);


// //////////잘못된 코드 시작//////////////////
// // function DDable(obj){
// //     for(let i=0; i<obj.length;i++){
// //         for(let k=0; k<2;k++){
// //             // 식이 맞았다고 생각했는데 undefind라고 계속 뜸
// //             // 왜 안됐냐??? k도 같이 0,1을 돌아서 문자열, 숫자 번갈아서 반복됐기 때문
// //             //그래서 2차원 배열에 두번째 값만 검사하는거니까 상수로 1을 넣어줌
// //             //그래서 월급이 적힌 부분만 *2 연산을 해줘서 제대로 나오게 됐음
// //             // 맞는 코드는 밑에 있다.
// //             if(typeof(obj[i][k]) === "number"){
// //                 console.log("배열요소"+obj[i][k]);
// //                 obj[i][k] = obj[i][k]*2;
// //             }else{
// //                 continue;
// //             }
// //             console.log(obj[i][1]);
// //         }
// //     }
// // }

// // console.log(DDable(doubleSal_2));
// /////////////====================잘못된 코드 끝===================/////////////





// ///////////////=======================맞는 코드 시작==================//////////////////////

var doubleSal_2 = Object.entries(Salary); 
//객체를 키값이랑 value값을 같이 갖고와서 배열로 바꾸면 2차원 배열이 된다.
//console.log(doubleSal_2);
//console.log("값 접근 " + doubleSal_2[0][1]);
var doubleSal_2 = Object.entries(Salary); 
//객체를 키값이랑 value값을 같이 갖고와서 배열로 바꾸면 2차원 배열이 된다.
//console.log(doubleSal_2);
//console.log("값 접근 " + doubleSal_2[0][1]);
console.log(doubleSal_2);
function DDable(obj){
    for(let i=0; i<obj.length;i++){
        console.log(typeof(obj[i][1]) === "number");
        if(typeof(obj[i][1]) === "number"){
            obj[i][1] = obj[i][1]*2;
            console.log("배열요소"+obj[i][1]);
        }else{
            continue;
        }
        return obj;
        // for(let k=0; k<2;k++){
        //     console.log(obj[i][1]);
        // }
    }
}
console.log("월급 따블 : " + DDable(doubleSal_2));










// // doubleSal_2.forEach((value,index) =>{ //
// //     console.log(value);
// //     console.log(index);
// //     //2. doubleSal에다가 각 인덱스에 value값을 뽑아서 넣어줘
// //     doubleSal_2[index]=value*2;
// // });



// // // doubleSal.forEach(function(item, index, doubleSal){
// // //     doubleSal[item*2, index];

// // // });

// // console.log("월급더블"+ doubleSal);