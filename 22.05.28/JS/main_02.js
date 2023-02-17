class Mother {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    return console.log(
      "내 이름은 : " + this.name + "이고" + "나이는" + this.age
    );
  }
}

let a = new Mother("바보", 20);
a.getInfo();

// extends => 이 키워드로 상속을 받을 수 있다.
// 자식 클래스가 부모클래스를 상속 받아서 자식클래스에서 부모클래스의 기능을 물려받아서 사용할 수 잇다.
// (부모클래스) 기존에 존재하던 기능을 토대로 새로운 기능을 만들수 있다.
class Child extends Mother {
  //   constructor(a) {
  //     super(name);
  //     this.name = a;
  //   }
}
let b = new Child("나는 자식", 30);
b.getInfo();

class Animal {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }
  run(speed) {
    this.speed += speed;
    console.log(this.name + "은 " + this.speed + "로 달린다.", "나는 부모");
  }
  stop() {
    this.speed = 0;
    console.log(this.name + "가 멈췄다.");
  }
}
let ani = new Animal("동물");
ani.run(5);
ani.stop();

//부모코드 상속
class Cat extends Animal {
  //constructor가 없는 경우 비어있는 생성자가 만들어진다.

  //run함수가 없으면 Aniaml
  // 부모의 함수를 받아서 재정의 해서 사용(함수 오버라이딩)
  run(speed) {
    this.speed = speed;
    console.log(this.name + "은 " + this.speed + "로 달린다", "나는 자식");
  }

  speak() {
    console.log("야옹야옹");
  }

  stop() {
    // 부모의 stop을 실행 -> 재정의 해서 사영할 수도 있지만.
    //super 키워드를 이용해서 부모의 함수를 실행할 수 있다.
    super.speak();
    // this.speed();
  }
}
let cat = new Cat("고양이");
cat.run(2);
cat.stop();

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Man extends Human {
  // 아래 생성자 처럼 생성자를 정의하면 오류가 난다.
  // 상속을 받는 클래스에서는 반드시 부모클래스를 호출해야하는데
  // super를 호출해야한다.
  // 일반적인 함수에서는 new 키워드와 함께 실행되면 빈 객체가 만들어지고
  // this 키워드에 이 객체를 할당한다.
  // 반면 상속클래스의 생성자 함수가 실행되면 일반함수에서 일어나는 일이
  // 일어나지 않는다. this에 객체를 할당하는 일을 부모클래스 생성자가
  // 처리해주기 바라기 때문임
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let ma = new Man("경일", 30);
console.log(ma);

function hi() {
  console.log("하이");
}

function func() {
  window.Function();
  console.log(func() === window.func()); // true.
}
//this : c++에서는 멤버함수가 속한 클래스를 가르키는 포인터
// JS에서의 this는 실행 컨텍스트가 생성될 때 결정이 되고 실행 컨텍스트는
//함수 호출할 때 생성되므로 this는 함수가 호출될때 결정된다(호출하는 방법에 따라 틀리다.)

var abc = 5;
console.log(abc);
console.log(window.a);
console.log(this.a);

function win() {
  if (windod === this) {
    console.log("윈도우는 this");
  }
}
f();

// var Student={
//     name : "homg",
//     st : function(){
//         console.log(this);
//     },
// };
// Student.st();

// 전역공간에 있으므로 실행주체는 window 객체가 되기 때문에 아래의 this는 전역객체인
// 아래의 this는 전역객체인
var s = Student.st;
s();
