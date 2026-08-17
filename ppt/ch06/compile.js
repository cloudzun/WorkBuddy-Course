// compile.js — 第6章 模型配置 PPT 编译脚本
const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "第6章 模型配置";
pres.author = "WorkBuddy 效率进阶实训课程";

const TOTAL = 27;
for (let i = 1; i <= TOTAL; i++) {
  const mod = require(`./slide-${String(i).padStart(2, `0`)}.js`);
  mod.createSlide(pres);
}

pres.writeFile({ fileName: `./output/ch06-workbuddy-模型配置.pptx` })
  .then(() => console.log(`✅ ch06-workbuddy-模型配置.pptx 生成成功 (${TOTAL}页)`))
  .catch(err => console.error(err));