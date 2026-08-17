// compile.js — 第3章 灵感模块 PPT 编译脚本
const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "第3章 灵感模块";
pres.author = "WorkBuddy 效率进阶实训课程";

const TOTAL = 23;
for (let i = 1; i <= TOTAL; i++) {
  const mod = require(`./slide-${String(i).padStart(2, `0`)}.js`);
  mod.createSlide(pres);
}

pres.writeFile({ fileName: `./output/ch03-workbuddy-灵感模块.pptx` })
  .then(() => console.log(`✅ ch03-workbuddy-灵感模块.pptx 生成成功 (${TOTAL}页)`))
  .catch(err => console.error(err));
