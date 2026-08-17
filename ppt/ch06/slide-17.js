// slide-17.js — 分隔页 6.5
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 17, title: "积分与成本管理" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "6.5", "积分与成本管理", [
      "6.5.1 积分的消耗逻辑：额度与模型 Token 定价、任务复杂度相关",
      "6.5.2 消耗差异的三条规律：模式差异 / 实体差异 / 上下文差异",
      "6.5.3 成本优化实践：按任务价值匹配模型与实体",
      "理解消耗逻辑，是控制使用成本的前提",
    ]);
  }
};