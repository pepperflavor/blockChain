// 자바스크립트는 프로토타입 기반 객체지향 언어다
// 프로토타입에 대해서 정리 - 생성자 함수와 비슷해보임
//class
// 기본형태
// class Student{
//     //생성자
//     constructor(params){
//     }
// }
// 0개 이상의 메서드만 정의할 수 있다.
// 생성자, 프로토타입 메서드, 정적메서드 3가지를 정의할 수 있다.
class CStudent {
  //생성자
  constructor(age, phone, city) {
    this.age = age;
    this.phone = phone;
    this.city = city;
  }
  getInfo() {
    return (
      "나이는  : " +
      this.age +
      " 살, " +
      "핸드폰 번호는 : " +
      this.phone +
      " 사는 곳은 : " +
      this.city
    );
  }
}

let st = new CStudent(10, 10, "서울시 강남구"); //인스턴스 생성

console.log(st);
console.log(st.age);
console.log(st.getInfo());

// getter, setter
// 클래스는 프로퍼티의 값을 가져오거나 프로퍼티의 값을 설정하기 위해 getter, setter를 제공한다
// 클래스 필드에 접근할 때 직접 변수에 접근하는 형태가 아닌 get, set을 통한 접근하는 방법이다.
// 외부에 값을 전달하거나 외부로부터 가지고 올때 추가적인 조작이 가능하고
// 내부구조를 캡슐화 하는데에도 유리하다.
// 기본적으로 public <= 모두가 접근가능
// private 자신만 접근가능, 외부에서 접근 불가 <- 자바스크립트에서는 공인 X
// 할 수는 있다.
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  // get 접근자 설정자
  get getName() {
    //은행에서 돈빼올때 은행원을 통하는 것처럼 뭔가를 통해서 값을 가져옴
    return "제품명 : " + this.name;
  }
  set setPrice(price) {
    this.price = price;
  }
}

let pr = new Product("아이폰 14 언제 출시함? ", 100000);
console.log(pr);
console.log(pr.getName);
pr.setPrice = 20000;
console.log(pr);

// class Person {
//   name = "Lee";
// }
// const me = new Person();
// console.log(me.name);

//private 식별자  => #
class Person {
  #name = "Lee";

  constructor(name) {
    this.#name = name;
  }
}
const me = new Person();
//console.log(me.#name); // class 외부에서 접근 불가능
//그럼 어떻게해?
// getter , setter 를 이용하면 된다.
