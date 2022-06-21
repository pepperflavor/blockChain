// function loadJson() {     return fetch("도리의 모험(로그인).json")     .then((res) =>
// res.json())     .then((json) => json.player.user0)     .then((json) =>
// json.player.user1)     .then((json) => json.player.user2)     .then((json) =>
// json.player.user3)     .catch((rej) => { alert ("로그인 실패! 다시 로그인해주세요!")}); };
// loadJson().then()

$(document).ready(function () {
  $(".bgSlider").bxSlider({
    auto: true,
    speed: 1500,
    pause: 5000,
    mode: "fade",
    autoControls: false,
    controls: false,
    autoHover: true,
    pager: false,
    infiniteLoop: true,
    hideControlOnEnd: true,
  });
});

$(document).ready(function () {
  $("#event").bxSlider({
    auto: true,
    speed: 1500,
    pause: 5000,
    mode: "horizontal",
    autoControls: false,
    controls: false,
    autoHover: true,
    pager: false,
    infiniteLoop: true,
    hideControlOnEnd: true,
  });
});

let box = document.querySelector("footer");
let characterA = document.querySelector(".characterA");
let characterB = document.querySelector(".characterB");
box.getBoundingClientRect().top;
let boxPosition = box.getBoundingClientRect().top + window.pageYOffset;

window.onscroll = function () {
  let scroll = window.scrollY + (window.innerHeight * 98) / 99;
  // console.log(scroll);
  if (scroll > boxPosition) {
    if (!characterA.classList.contains("activeA")) {
      characterA.className += " activeA";
    }
    if (!characterB.classList.contains("activeB")) {
      characterB.className += " activeB";
    }
  } else {
    characterA.classList.remove("activeA");
    characterB.classList.remove("activeB");
  }
};

//=============게임 메뉴바 보여주기 시작

let listBar = document.querySelectorAll(".naviBar li"); //배열
let miniBar = document.querySelectorAll(".miniBar"); // 배열
let s_miniBar = document.querySelector(".miniBar"); // 배열
let gameMenu = document.querySelector(".gameMenu"); // 상세 리스트의 부모요소
let naviBar = document.querySelector(".naviBar");

let naviMenu = document.querySelector(".naviMenu");
//console.log(miniBar[0]); console.log(miniBar[0].dataset.num);
// 미니바의 data값 담아줌
let pick = new Array(miniBar.length);
for (let i = 0; i < pick.length; i++) {
  console.log(miniBar[i].dataset.num);
  pick[i] = miniBar[i].dataset.num;
}

//gameMenu.childNodes[i];

let i = miniBar[i].dataset.num;

window.onload = function () {
  switch (i) {
    case 0:
      naviBar.children[i].onmouseenter = function () {
        gameMenu.children[i].style.visibility = "visible ";
        document.querySelector("section").style.zIndex = -1;
      };
      naviMenu.onmouseleave = function () {
        naviMenu.style = "hidden";
        gameMenu.children[i].style.visibility = "hidden ";
        document.querySelector("section").style.zIndex = 1;
      };
      break;

    case 1:
      naviBar.children[i].onmouseenter = function () {
        gameMenu.children[i].style.visibility = "visible ";
        document.querySelector("section").style.zIndex = -1;
      };
      naviMenu.onmouseleave = function () {
        naviMenu.style = "hidden";
        gameMenu.children[i].style.visibility = "hidden ";
        document.querySelector("section").style.zIndex = 1;
      };
      break;

    case 2:
      naviBar.children[i].onmouseenter = function () {
        gameMenu.children[i].style.visibility = "visible";
        document.querySelector("section").style.zIndex = -1;
      };
      naviMenu.onmouseleave = function () {
        naviMenu.style = "hidden";
        gameMenu.children[i].style.visibility = "hidden ";
        document.querySelector("section").style.zIndex = 1;
      };
      break;

    case 3:
      naviBar.children[i].onmouseenter = function () {
        gameMenu.children[i].style.visibility = "visible";
        document.querySelector("section").style.zIndex = -1;
      };
      naviMenu.onmouseleave = function () {
        naviMenu.style = "hidden";
        gameMenu.children[i].style.visibility = "hidden ";
        document.querySelector("section").style.zIndex = 1;
      };
      break;

    default:
      break;
  }
};

// gameMenu.children[0].style.visibility = "visible";
// section; // 섹션-1
// console.log("마우스 올림22");
// console.log(gameMenu.children[0].style.visibility);

//naviBar.childNodes[i];

// naviMenu 를 보여주기 위한 조건문

// = function () {     gameIntdbar.addEventListener("mouseover", funtion(i){
// gameMenu.childNodes[i].style.visibility = "visivle",
// gameMenu.childNodes[i].style.zIndex = 999,     }, false); };

//if
// (naviBar.childNodes[0]) {     gameMenu.childNodes[0].style.visibility =
// "visivle";     gameMenu.childNodes[0].style.zIndex = 999;   }
// naviBar.onmouseenter = function () {   if (pick[0] == "0") {
// document.querySelector("#gameIntd").style.visibility = "visible";
// document.querySelector("section").style.zIndex = -1;
// document.querySelector(".gameMenu").style.zIndex = 999;   } else if (pick[1]
// == "1") {     document.querySelector("#gameInfm").style.visibility =
// "visible";   } else if (pick[2] == "2") {
// document.querySelector("#gameCommu").style.visibility = "visible";   } else
// if (pick[3] == "3") {
// document.querySelector("#gameSuppo").style.visibility = "visible";   } };
