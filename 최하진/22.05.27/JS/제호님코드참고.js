/**
 * 객체(object)
 * 기본 데이터 타입을 제외한 나머지 녀석들.. 모두 객체라고 볼 수 있다.
 * 함수, 배열, 정규표현식... 객체는 (key, value)가 존재한다.
 */

 const person = {
    name: "LEE",
    age: 20,
    myName: function () {
      // console.log("my name is", this.name, "and", this.age, "years old");
    },
  };
  
  person.myName();
  
  const counter = {
    num: 0,
    increase: function () {
      this.num++;
    },
  };
  
  counter.increase();
  console.log(counter.num);
  
  const test = [false, true, false, true, false, true, true];
  
  // console.log(test.some((val) => val === true)); //  return true
  
  const test1 = [false, false, false, false, false, false];
  
  // console.log(test1.some((val) => val === true)); // return false
  
  // 전역변수 남발하지 말기 -> 어쩔수 없이 쓰게 된다면 객체로 관리하자
  /**1. 하나의 객체를 전역변수로 만들고 객체의 속성으로 변수를 관리
   *
   */
  
  let myObj = {};
  
  myObj.cal = { a: null, b: null };
  myObj.test = { c: null, d: null };
  myObj.cal.a = 10;
  myObj.cal.b = 20;
  
  let korea = {
    a: 500,
    b: 300,
  
    seoul: {
      a: 100,
      b: 200,
      c: 50,
    },
  };
  
  const circle = {
    radius: 8,
    getDiameter: function () {
      return 2 * this.radius;
    },
  };
  
  console.log(circle.getDiameter());
  
  let testObj = {
    a: 100,
    b: 200,
    c: 50,
    d: 100,
    e: 200,
    g: 50,
    w: 100,
    z: 200,
  };
  
  for (const key in testObj) {
    //   console.log(testObj[key]);
  }
  
  [1, 2, 3, 4, 5, 6, 7];
  
  let result = [];
  
  for (let i = 0; i < 8; i++) {
    //% 3/2 = 0.5
    // 5 = true  0 = false
    if (false) {
      result.push(i);
    }
  }
  
  // console.log(result);
  
  function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  
    this.information = function () {
      // console.log("나는", this.name);
    };
  }
  
  let a = new Person("가", "나", "다");
  let b = new Person("가", "나", "다");
  let c = new Person("가", "나", "다");
  let d = new Person("가", "나", "다");
  
  /**
   * array [1,2,3,4]  => array.concat([])
   *
   * object {"a": 1, "b":2} => object.assign({})
   *
   */
  
  //[3,3,3]
  function isSame(input) {
    // 입력값이 undefined (처음 while )
    let list;
    if (input === undefined) list = [1, 1, 1];
    else list = input;
  
    // [true, true, true]
    const result = list.map((val, idx) => {
      //original 값 유지
      const loopList = list.concat([]);
      //내 값을 루프리스트에서 빼기
      loopList.splice(idx);
      //나를 뺀 루프리스트에 중복값이
      //0보다 크면(중복값이 있으면) true 아니면 false
      return loopList.indexOf(val) >= 0 ? true : false;
    });
  
    //true or false 출력
    return result.some((val) => true === val);
  }
  
  let test2;
  while (isSame(test2)) {
    if (test2 === undefined) test2 = prompt("값을 입력하세요.");
    else {
      test2 = prompt("중복되었습니다.");
    }
    test2 = test2.split(""); //[1,1,1]
  }
  
  function Company() {
    staff = [];
    //[{name:"사원1", salary:100},{name:"사원1", salary:100}, {name:"사원1", salary:100}]
  
    this.init_staff = function (name, salary) {
      this.staff.push({ name: name, salary: salary });
    };
  
    this.sumSalary = function () {
      let sum = 0;
  
      // staff push 사원들을 
      for (const staff of this.staff) {
        sum += 사원3.salary;
      }
      return sum;
    };
    this.testsumSalary = this.company;
  }
  
  let company = new Company();
  
  company.init_staff("p1", 100);
  company.init_staff("p2", 100);
  company.init_staff("p3", 100);
  company.init_staff("p4", 100);
  company.init_staff("p5", 100);
  company.init_staff("p6", 100);
  company.init_staff("p7", 100);
  company.init_staff("p8", 100);
  company.init_staff("p9", 100);
  
  console.log(company.sumSalary());
  
  
  
  class ClassCompany {
    staff = [];
  
    addStaff = (input_name, input_salary) =>
      this.staff.push({ name: input_name, salary: input_salary });
  
    sumSalary = () => this.staff.reduce((prev, curr) => prev + curr);
  
    getStaff = () => this.staff;
  }
  
  const classCompany = new ClassCompany();
  
  classCompany.addStaff("p1", 100);
  classCompany.addStaff("p2", 100);
  classCompany.addStaff("p3", 100);
  classCompany.addStaff("p4", 100);
  classCompany.addStaff("p5", 100);
  classCompany.addStaff("p6", 100);
  classCompany.addStaff("p7", 100);
  classCompany.addStaff("p8", 100);
  classCompany.addStaff("p9", 100);
  
  console.log("곱하기 : ", classCompany.product(5));
  
  console.log(company.sumSalary());