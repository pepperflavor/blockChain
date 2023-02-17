//  카드 52장 포커카드 / j =11 / q=12 k=13/ Ace=1
//  1. 카드 2장을 무작위로 보여줌
//  2. 판단은 문양 상관없이 숫자만
//  3. 1턴이 지나면 사용된 카드는 빼야함(범위로 뽑은 카드도 버려짐-총3장)
//  4. 승리조건- 범위로 뽑은 카드의 작은숫잠, 큰숫자 a<이길수있는 숫자<b
// 5. 종료조건 17판 또는 돈을 다쓰거나(도박룰은 가위바위보랑 같음)  자료형 변수이름[배열크기] /* 문양을 나중에 할당 / 보여주는
// 숫자는 3개 문양 문양 의미두지말고 나중에 배정 1~13까지 숫자 랜덤픽-> 유저 것만 따로 배정해주고, 두개로 범위 설정 조건문으로 승패
// 결정
// */ let pattern = ["♦", "♥", "♣", "♠"];
let card = []; //문양 4개 * 1~13이니까 총 52장
let pattern = new Array(3); // 크기가 3인 배열 선언 패턴을 0,1,2,3으로 나눠서 배정해주기 위해서
let num = new Array(3); // 숫자도 예외인 J,K,Q,A 를 0, 1, 2, 3 의 경우로 나눠서 배정, 숫자는 그대로 비교 가능
let used_card = 0;
let user_betting = 0; //유저가 베팅할 돈
let user_money = 10000; // 초기자금
let com_money = 10000; // 컴퓨터의 돈
let user_num = 0; //유저의 카드 보여주기 위한 변수
let user_pattern = "♦";
//랜덤함수로 뽑은 카드
let pick_Card = 0;
//게임을 진행한 횟수
let count = 1;

//카드팩 만들기 카드에 0~51까지 담음
for (let i = 0; i < 52; i++) {
    card[i] = i;
}

//유저가 입력한 돈 1000원 단위로 검증하기
function right_Money(input_Money, unit) {
    const calmoney = Math.floor(input_Money / unit);
    let resultmoney = calmoney * unit;
    return resultmoney;
}

//매판 3장씩 버려짐 while (user_betting != 0 && count < 18) { 1~52중에 랜덤 숫자를 뽑는다
alert("어서오세요!! \n ☆★월남뽕 게임★☆에 오신것을 환영합니다!!");
while (count <= 2) {
    if (user_money <= 0 || com_money <= 0 || used_card == 52) {
        break;
    }
    if (used_card == 52) {
        alert("남은 카드가 없기 때문에 게임이 종료됩니다. \n 이용해주셔서 감사합니다.");
        break;
    } else if (count == 19) {
        alert("최대 게임 횟수를 진행하셨기 때문에 게임이 종료됩니다.\n 이용해주셔서 감사합니다.");
    } else {
        alert("현재 게임 진행 회차 : " + count + " 회 ");
        for (let i = 0; i < 3; i++) {
            // 버린카드와 이번에 뽑은 카드의 합이 52가 넘지 않아야 함
            pick_Card = Math.floor((Math.random() * 51) + 1) - used_card;
            // console.log(pick_Card+" pick_Card"); 문양 안나옴ㅠㅠ
            pattern[i] = Math.floor(card[pick_Card] / 13);
            // console.log("패턴 i 값 : " + Math.floor(card[pick_Card + used_card] / 13));
            // pattern[i]의 결과값  =>  0~12 : 0 / 13~25 : 1 / 26~38 : 2 / 39~52 : 3
            num[i] = card[pick_Card] % 13;
            // 나머지가 0, 10, 11, 12 인경우 문자카드를 걸러낼 수 있음, 1~9는 숫자로
            used_card += 3; //사용한 카드 버려줌
            // console.log("used_card : 패턴바로찍 " + used_card); console.log("pick_Card : 숫자바로찍
            // " + pick_Card); ============ 문양 할당 시작=======================
            // console.log(num[0]+" 컴 숫자 "); console.log(pattern[0] + "컴 패턴");
            // console.log(num[1]+" 컴 숫자 "); console.log(pattern[2] + "유저 패턴");
            // console.log(num[2]+" 유저 숫자 "); console.log(pattern[2] + "유저 패턴");

            switch (pattern[i]) {
                case 0:
                    console.log("♦");
                    user_pattern = "♦";
                    break;

                case 1:
                    console.log("♥");
                    user_pattern = "♥";
                    break;

                case 2:
                    console.log("♣");
                    user_pattern = "♣";
                    break;

                case 3:
                    console.log("♠");
                    user_pattern = "♠";
                    break;
            }
            //==============문양할당 끝====================== =========숫자할당 시작=============
            switch (num[i]) {
                case 0:
                    console.log("A");
                    user_num = "A";
                    break;

                case 10:
                    console.log("J");
                    user_num = "J";
                    break;

                case 11:
                    console.log("Q");
                    user_num = "Q";
                    break;

                case 12:
                    console.log("K");
                    user_num = "K";
                    break;

                case 13:
                    console.log("13임");
                    user_num = "13, 스페이드 에이스입니다.";
                    break;
                default:
                    console.log(num[i]);
                    user_num = num[i] + 1;
                    break;
            }
            // } else {      x + used_card > 52면     continue;   } if (pick_Card + used_card
            // <= 52) {} 승패 계산 count++; 게임 진행횟수 증가
            //

            //게임 진행시작
            alert("패가 결정되었습니다. 배팅할 금액을 입력해주세요. "); //\n 배팅을 원하지 않는다면 '0'을 입력하세요.
            user_betting = Number(prompt(" 최소 배팅 금액은 1000원 단위입니다."));
            // if (user_betting == 0) {
            //     alert("이번 게임에서 배팅을 하지 않았기 때문에 다음 게임으로 진행됩니다.");
            //     continue;
            // } //======흨.... 다음 게임으로 카운트가 제대로 안된다....
            if (isNaN(user_betting)) {
                alert("1000원 단위로 숫자만 입력해주세요");
                continue;
            } else if (user_betting > user_money) {
                alert("고객님의 보유 잔고보다 큰 금액은 걸 수 없습니다.");
                continue;
            } else {
                user_betting = right_Money(user_betting, 1000);
                alert("고객님이 입력하신 배팅 금액은 : " + user_betting + " 원 으로 설정됩니다.");
                // console.log(num[2]+" 유저 숫자 "); console.log(pattern[2] + "유저 패턴");

                if ((num[0] < num[2] && num[2] < num[1]) || (num[1] < num[2] && num[2] < num[0])) {
                    user_money = (user_money - user_betting) + user_betting * 2;
                    com_money = com_money - user_betting * 2;
                    alert(
                        " 배팅에 성공했습니다!!! \n 고객님의 카드 : " + user_pattern + user_num + "\n고객님이 얻은 돈 : " +
                        user_betting * 2 + " 원 "
                    );

                    alert(" 고객님의 총 잔액 = " + user_money);
                } else {
                    user_money = (user_money - user_betting) - user_betting * 2;
                    com_money = com_money + user_betting * 2;
                    alert(
                        " OMG !! 배팅에 실패 했습니다. ㅜ ㅜ \n 고객님의 카드 : " + user_pattern + user_num + "\n 고객님이 잃" +
                        "으신 돈 : " + user_betting * 2 + " 원 "
                    );
                    alert(" 고객님의 총 잔액 = " + user_money);
                    if (user_money <= 0) {
                        alert(" 고객님의 보유금액이 없으므로 게임이 종료됩니다.");
                        break;
                    } else if (com_money <= 0) {
                        alert("더이상 딸 수 있는 돈이 없기 때문에 게임이 종료됩니다.");
                        break;
                    } else {
                        alert(" 다음 게임으로 진행됩니다.");// " 현재 게임 진행 횟수 : " + count + 
                        console.log(count + "  count 회");
                    }
                }
            }
            count++;
        }
    }
    //continue;
}


// 게임회차 제대로 카운팅 안됨 0입력해서 배팅 안했을 시에
// 버린카드 맞는지 확인