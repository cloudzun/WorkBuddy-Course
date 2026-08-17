// compile.js — 第1章 WorkBuddy 产品与基础入门 PPT 编译脚本
const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "第1章 WorkBuddy 产品与基础入门";
pres.author = "WorkBuddy 效率进阶实训课程";

const TOTAL = 25;
for (let i = 1; i <= TOTAL; i++) {
  const mod = require(`./slide-${String(i).padStart(2, `0`)}.js`);
  mod.createSlide(pres);
}

pres.writeFile({ fileName: `./output/ch01-workbuddy-产品与基础入门.pptx` })
  .then(() => console.log(`✅ ch01-workbuddy-产品与基础入门.pptx 生成成功 (${TOTAL}页)`))
  .catch(err => console.error(err));
