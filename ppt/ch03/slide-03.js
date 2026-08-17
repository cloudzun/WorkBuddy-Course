// slide-03.js — 分隔页 3.1
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 3, title: "灵感模块概述" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "3.1", "灵感模块概述", [
      "什么是灵感：一个完整的灵感案例（Prompt + Skill + 专家配置）",
      "为何能“开箱即用”：固化提示词组装阶段的最优配方",
      "四大功能优势：场景全覆盖 / 节省 Token / 一键复刻 / 社区智慧",
    ]);
  }
};
