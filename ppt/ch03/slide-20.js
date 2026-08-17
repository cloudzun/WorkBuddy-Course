// slide-20.js — 分隔页：配套实验
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 20, title: "配套实验 3.1-3.3" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "实验", "第 3 章配套实验（labs/ch03-labs.md）", [
      "实验 3.1 灵感大厅探索：入口、场景分类、案例详情与红心收藏",
      "实验 3.2 “做同款”一键复刻：Prompt 预填、Skill 与专家自动加载、微调生成",
      "实验 3.3 灵感 vs 从零创建对比：配置时间、追问次数与产物质量",
    ]);
  }
};
