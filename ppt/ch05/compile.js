// compile.js — 第5章 连接器与资料库 PPT 编译脚本
const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "第5章 连接器与资料库";
pres.author = "WorkBuddy 效率进阶实训课程";

const TOTAL = 25;
for (let i = 1; i <= TOTAL; i++) {
  const mod = require(`./slide-${String(i).padStart(2, `0`)}.js`);
  mod.createSlide(pres);
}

pres.writeFile({ fileName: `./output/ch05-workbuddy-连接器与资料库.pptx` })
  .then(() => console.log(`✅ ch05-workbuddy-连接器与资料库.pptx 生成成功 (${TOTAL}页)`))
  .catch(err => console.error(err));