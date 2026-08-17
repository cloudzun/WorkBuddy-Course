// compile.js — 第2章 任务创建与结果管理 PPT 编译脚本
const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "第2章 任务创建与结果管理";
pres.author = "WorkBuddy 效率进阶实训课程";

const TOTAL = 25;
for (let i = 1; i <= TOTAL; i++) {
  const mod = require(`./slide-${String(i).padStart(2, `0`)}.js`);
  mod.createSlide(pres);
}

pres.writeFile({ fileName: `./output/ch02-workbuddy-任务创建与结果管理.pptx` })
  .then(() => console.log(`✅ ch02-workbuddy-任务创建与结果管理.pptx 生成成功 (${TOTAL}页)`))
  .catch(err => console.error(err));
