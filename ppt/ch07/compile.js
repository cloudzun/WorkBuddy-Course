// compile.js — 第7章 助理连接配置 PPT 编译脚本
const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "第7章 助理连接配置";
pres.author = "WorkBuddy 效率进阶实训课程";

const TOTAL = 26;
for (let i = 1; i <= TOTAL; i++) {
  const mod = require(`./slide-${String(i).padStart(2, `0`)}.js`);
  mod.createSlide(pres);
}

pres.writeFile({ fileName: "./output/ch07-workbuddy-助理连接配置.pptx" })
  .then(() => console.log(`✅ ch07-workbuddy-助理连接配置.pptx 生成成功 (${TOTAL}页)`))
  .catch(err => console.error(err));