//부모 클래스 생성
class Monster {
  //생성자로 클래스 내부에서 사용하는건 다 선언해야하는듯
  // constructor 생성자로 초기값을 정해줄 수 있다.
  constructor(name, power, def, move) {
    this.name = name;
    this.power = power;
    this.def = def;
    this.move = move;
    //this.user_hit = user_hit;
  }
  //공격
  attack(name, power) {
    // this.name = name;
    // this.power = power;
    console.log(
      "<" +
        this.name +
        ">" +
        " 몬스터에게 공격받았다! " +
        this.power * 1.2 +
        " 만큼의 피해를 입었다!"
    );
  }

  defens(name, user_hit, def) {
    // this.name = name;
    this.user_hit = user_hit * 2;
    // this.def = def;
    console.log(
      "<" +
        this.name +
        ">" +
        " 몬스터에게" +
        user_hit +
        "로 공격했다!" +
        user_hit -
        this.def +
        " 만큼의 데미지를 주었다!"
    );
  }

  moving(name, move) {
    // this.name = name;
    // this.move = move;
    console.log(
      "<" + this.name + ">" + " 몬스터가" + this.move + " 만큼 이동했다!"
    );
  }

  //이건 파라미터로 name받고 안에서 this.name해주니까 안된다,
  stop() {
    console.log("<" + this.name + ">" + " 몬스터가 멈췄다!");
  }

  userPower() {
    console.log("유저의 공격력 : " + this.user_hit);
  }
  //, user_hit
}

// 자식클래스 1 babyMonster 생성
class babyMonster extends Monster {
  attack(name, power) {
    // this.name = name;
    this.power = power * 1.2;
    console.log(
      "<" +
        this.name +
        ">" +
        " 몬스터에게 공격받았다! " +
        this.power +
        " 만큼의 피해를 입었다!"
    );
  }

  defens(name, user_hit, def) {
    this.user_hit = user_hit * 2;

    console.log(
      "<" +
        this.name +
        ">" +
        " 몬스터에게" +
        this.user_hit +
        "로 공격했다!" +
        (this.user_hit - this.def) +
        " 만큼의 데미지를 주었다!"
    );
  }

  moving(name, move) {
    this.name = name;
    this.move = move;
    console.log(
      "<" + this.name + ">" + " 아기 몬스터가" + this.move + " 만큼 이동했다!"
    );
  }

  stop() {
    super.stop();
  }
  userPower() {
    super.userPower();
  }
}

// 자식클래스2 bossMonster 생성
class bossMonster extends Monster {
  attack() {
    console.log(
      "보스몹 " +
        "<" +
        this.name +
        ">" +
        " 에게 공격받았다! " +
        this.power * 1.2 +
        " 만큼의 피해를 입었다!"
    );
  }

  defens(user_hit, def) {
    // this.name = name;
    this.user_hit = user_hit * 1.5;
    this.def = def * 2;
    console.log(
      "보스몹 " +
        "<" +
        this.name +
        ">" +
        " 몬스터에게" +
        this.user_hit +
        "로 공격했다!" +
        (this.user_hit - this.def) +
        " 만큼의 데미지를 주었다!"
    );
  }

  moving(name, move) {
    this.name = name;
    this.move = move * 2;
    console.log(
      "<" + this.name + ">" + " 몬스터가" + this.move + " 만큼 이동했다!"
    );
  }

  stop() {
    super.stop();
  }

  userPower() {
    super.userPower();
  }
}

let monster1 = new babyMonster("아기 멀록", 10, 5, 5);
monster1.attack("아기 멀록", 10);
monster1.defens("아기 멀록", 10, 10);
monster1.stop("아기 멀록");
monster1.moving("아기 멀록", 5);
monster1.userPower(10);

let boss1 = new bossMonster("기간테아", 5000, 2000, 50);
boss1.attack("기간테아", 1000);
