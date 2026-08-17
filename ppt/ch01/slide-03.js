// slide-03.js — 1.1 分隔页：产品定位
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 3, title: "产品定位" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "1.1", "产品定位：WorkBuddy 是什么", [
      "全场景 AI 办公工作台，腾讯出品",
      "四大核心能力：理解语言 / 规划执行 / 多模态 / 本地文件操作",
      "与传统对话式 AI 的本质差异",
      "典型用户与三大适用场景",
    ]);
  }
};
