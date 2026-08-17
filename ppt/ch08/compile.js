// compile.js — 第8章 自动化 PPT 编译脚本
const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "第8章 自动化";
pres.author = "WorkBuddy 效率进阶实训课程";

const TOTAL = 21;
for (let i = 1; i <= TOTAL; i++) {
  const mod = require(`./slide-${String(i).padStart(2, `0`)}.js`);
  mod.createSlide(pres);
}

pres.writeFile({ fileName: `./output/ch08-workbuddy-自动化.pptx` })
  .then(() => console.log(`✅ ch08-workbuddy-自动化.pptx 生成成功 (${TOTAL}页)`))
  .catch(err => console.error(err));