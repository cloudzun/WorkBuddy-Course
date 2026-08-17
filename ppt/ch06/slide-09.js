// slide-09.js — 分隔页 6.3
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 9, title: "模型选择策略" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "6.3", "模型选择策略", [
      "四类场景策略：日常问答 / 多模态 / 复杂推理与代码 / Agent 执行",
      "按任务场景匹配模型，而非一律使用最强配置",
      "日常 Auto（自动模式）保底，速度与稳定性最佳",
      "熟记选型口诀，四句话记住四类场景的推荐模型",
    ]);
  }
};