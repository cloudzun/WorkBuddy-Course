// compile.js — 课程总览（总封面 / 总目录 / 路线图 / 回顾 / 结尾）
const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "WorkBuddy 效率进阶实训课程 · 总览";
pres.author = "WorkBuddy 效率进阶实训课程";

const TOTAL = 4;
for (let i = 1; i <= TOTAL; i++) {
  const mod = require(`./slide-${String(i).padStart(2, `0`)}.js`);
  mod.createSlide(pres);
}

pres.writeFile({ fileName: `./output/course-workbuddy-课程总览.pptx` })
  .then(() => console.log(`✅ course-workbuddy-课程总览.pptx 生成成功 (${TOTAL}页)`))
  .catch(err => console.error(err));