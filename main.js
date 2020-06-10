/*==================
ラッキーから診断
・構文
    配列
・メソッド
    addEventListener
    Math floor
    Math random
===================*/

const colors = ["赤","青","緑","黄","ピンク"];
const color = Math.floor(Math.random() * colors.length);
button.addEventListener("click", () => {
    document.write(`あなたのラッキーカラーは ${colors[color]}色 です。`);
});