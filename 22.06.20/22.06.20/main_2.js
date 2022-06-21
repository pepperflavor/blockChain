// 문자 클래스의 반대
// 반대 클래스

// 1. \D : /d의 반대 숫자가 아닌 것들을 리턴

// 2. \S : \s의 반대 공백이 아닌 것들 리턴

// 3. \W : \w의 반대, 단어, 숫자가 아닌 것들 리턴

let str3 = "a1a2a3a4a5a6a7a8a9gg123456789";
//replaceAll 함수는 해당되는 전체문자 변환
console.log(str3.replaceAll("a", ""));
// 숫자가 아닌 것들 전테
console.log(str3.replaceAll(/\D/g, ""));

// 특별한 문자 클래스

// .(점) : 줄바꿈 문자를 제외하고 모든 문자 (\n)
// 특수문자도 잡을 수 있고 모든 문자 그냥 줄바꿈 제외 다 찾는다.
console.log("-12345".match(/\w/)); // 특수문자 잡을 수 없음
console.log(" 12345".match(/./)); // 특수문자 잡을 수 있음
console.log("==12345".match(/./)); // 특수문자 잡을 수 있음

// 문자 클래스 여러개 문자를 조건으로 검사
// 조건식 해석 \w 첫글자 (문자나 숫자) \d (0~9까지 숫자) \s (공백 포함) \w 마지막 (문자나 숫자)
// 이렇게 검사해서 맞으면
console.log("ww 2".match(/\w\d\s\w/));

// 수량 {몇 개}
console.log("123 456555 77789".match(/\d{3}/));

//'^[a-zA-z]'
