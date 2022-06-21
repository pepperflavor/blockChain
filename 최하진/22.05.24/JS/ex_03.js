// 전역변수 지역변수
// 전역변수
// 1. 메모리 낭비- 프로그램 종료되기 던엔 메모리에 남아있음
// 2. 혹, 값이 섞일 수 있음

// 지역변수
//1. 생존시간이 해당 코드블럭이 실행되는 순간에만 살아있음

var a = 1;
for (let i = 0; i<2; i++) {

    const d = "const로 선언된 d"

    for (let k = 0; k < 2; k++) {
        console.log(d);

        if(true)
        {
            d = 2;
            let abc = 1;
            var sdfsdf = 3;
        }
        console.log(d);
        console.log(abc);
        console.log(sdfsdf);//zzzz이건나옴ㅋㅋㅋㅋ var 이쉨 ㄹㅇ....

    }
    
}