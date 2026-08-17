// compile.js — 全套合集：课程总览（封面/路线图/九章回顾 前置，总结尾后置）+ 第1~9章
const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "WorkBuddy 效率进阶实训课程 · 全套合集（总览 + 第1-9章）";
pres.author = "WorkBuddy 效率进阶实训课程";

const pad = n => String(n).padStart(2, "0");
// 顺序：总览前2页（封面/路线图）→ 第1~9章全部 → 九章回顾 → 总结尾
const chapters = [
  { dir: "course", files: [1, 2] },      // 封面 / 路线图
  { dir: "ch01", count: 25 },
  { dir: "ch02", count: 25 },
  { dir: "ch03", count: 23 },
  { dir: "ch04", count: 25 },
  { dir: "ch05", count: 25 },
  { dir: "ch06", count: 27 },
  { dir: "ch07", count: 26 },
  { dir: "ch08", count: 21 },
  { dir: "ch09", count: 25 },
  { dir: "course", files: [3, 4] },      // 九章回顾 / 总结尾
];

let total = 0;
for (const ch of chapters) {
  const base = `../${ch.dir}/slide-`;
  if (ch.files) {
    for (const f of ch.files) {
      require(base + pad(f) + ".js").createSlide(pres);
      total++;
    }
  } else {
    for (let i = 1; i <= ch.count; i++) {
      require(base + pad(i) + ".js").createSlide(pres);
      total++;
    }
  }
}

pres.writeFile({ fileName: "./output/WorkBuddy-效率进阶实训课程-全套合集.pptx" })
  .then(() => console.log(`✅ WorkBuddy-效率进阶实训课程-全套合集.pptx 生成成功 (${total}页)`))
  .catch(err => console.error(err));