// 基礎文法
// 変数
let unko = "Hello world";
// unko = "Hello JS";

// 定数
const bigUnko = "Hello bigUnko";

// 配列
let inoki = ['いーち', 'にーい', 'さーん', 'だーー！'];

// ループ文
// let index = 0;
// while (index < inoki.length) {
//   // 繰り返したい命令
//   console.log(inoki[index]);
//   index++;
// }

// console.log(inoki[0]);

// 繰り返し文
// if (inoki.length > 5) {
//   console.log("ボンバイエ！");
// } else {
//   console.log("ボンバ...");
// }


// 関数
// const test = (arg) => {
//   // ここに実行したい命令
//   if (inoki.length > arg) {
//     console.log("ボンバイエ！");
//   } else {
//     console.log("ボンバ...");
//   }
// }

// test(3);

// オブジェクト
const unko2 = {
  color: 'pink',
  size: 'large',
  purfume: 'mint',
  goToilet: () => {
    console.log("Hello world");
  }
};

// console.log(document.getElementsByTagName('button')[0] );
document.getElementsByTagName('button')[0].addEventListener('click', () => {
  // 命令を書く
  window.alert('Hello World');
});
