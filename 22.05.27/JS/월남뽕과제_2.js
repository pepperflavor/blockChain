//let arr = new Array(4).fill(new Array(13).fill(0));
//let arr = new Array(행개수).fill(new Array(열개수).fill(0));

//console.log(arr);

// 카드팩 껍데기 2차원 배열
let card_Pack = new Array(4).fill(new Array(13).fill(0));
//let card_Pack = new Array(4).fill(new Array(13).fill((new Array(2).fill(0))));
console.log(card_Pack);
//console.log(card_Pack.length);
let pattern = ["♦", "♥", "♣", "♠"];

// ["♦1","♦2"]

const SYMBOL = ["♦", "♥", "♣", "♠"]; // 4
const NUM = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "Q", "J", "K", "A"]; // 4 * 13 = 52
const pack = [];

SYMBOL.map((sym_val) => {
  // const sym_val = SYMBOL[0]
  // const sym_index = 0
  NUM.map((num_val) => {
    // ㅁ1, ㅁ2, ㅁ3
    pack.push(sym_val + num_val);
  });
});

const prob = pack[6].split("");

console.log(prob);

// console.log(pack);

// for (let i = 0; i < 4; i++) {
//   for (let k = 0; k < card_Pack[0].length; k++) {
//     card_Pack[0][k] = pattern[i];
//     //card_Pack[i][k].splice(0, 'k');
//   }
// }
// console.log(card_Pack);

// console.log(card_Pack[0][0]);
