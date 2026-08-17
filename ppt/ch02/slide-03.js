// slide-03.js — 2.1 分隔页：任务描述
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 3, title: "任务描述" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "2.1", "任务描述的黄金法则", [
      "三要素公式：做什么 + 有什么 + 怎么样",
      "明确目标与可量化的验收标准",
      "提供上下文、消除歧义",
      "样板文件技巧",
    ]);
  }
};
