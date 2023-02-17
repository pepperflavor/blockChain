alert("가위바위보 게임에 오신것을 환영합니다.");

let RockSissorPapper = new Array();
RockSissorPapper[0] = "IMG/가위.jpg";
RockSissorPapper[1] = "IMG/바위.jpg";
RockSissorPapper[2] = "IMG/보.jpg";

let index = Math.floor(Math.random() * 3);

//컴퓨터의 패 정하는 함수
function showComCard(index) {
  let showCard = document.getElementById("Card");
  showCard.src = RockSissorPapper[index];
}
