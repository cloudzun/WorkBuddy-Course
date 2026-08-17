// slide-17.js — 1.4 分隔页：三大工作模式
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 17, title: "三大工作模式" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "1.4", "三大工作模式：Ask / Plan / Craft", [
      "Ask：只读问答，绝不修改文件",
      "Plan：先规划后执行，计划确认后才动手",
      "Craft：直接执行，最高自动化",
      "模式选择：安全性 × 自动化程度的平衡",
    ]);
  }
};
