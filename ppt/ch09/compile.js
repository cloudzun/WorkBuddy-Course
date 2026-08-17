// compile.js — 第9章 典型办公场景综合实战与 OPC 一人公司 PPT 编译脚本
const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "第9章 典型办公场景综合实战与 OPC 一人公司";
pres.author = "WorkBuddy 效率进阶实训课程";

const TOTAL = 25;
for (let i = 1; i <= TOTAL; i++) {
  const mod = require(`./slide-${String(i).padStart(2, `0`)}.js`);
  mod.createSlide(pres);
}

pres.writeFile({ fileName: `./output/ch09-workbuddy-办公场景综合实战与OPC.pptx` })
  .then(() => console.log(`✅ ch09-workbuddy-办公场景综合实战与OPC.pptx 生成成功 (${TOTAL}页)`))
  .catch(err => console.error(err));