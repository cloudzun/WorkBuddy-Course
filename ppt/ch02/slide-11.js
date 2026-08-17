// slide-11.js — 2.3 分隔页：任务对话与追问
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 11, title: "任务对话与追问" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "2.3", "任务对话与追问技巧", [
      "闭环过程：输入 → 补充 → 执行 → 验收 → 追问",
      "上下文保持与边界（固定锚点）",
      "软修正与硬打断",
      "分步确认与“追问 vs 新建”判断",
    ]);
  }
};
