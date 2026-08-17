// slide-11.js — 分隔页 9.4
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 11, title: "深度研究与轻量发布" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "9.4", "深度研究与轻量发布", [
      "9.4.1 深度研究方法论：明确目标 → 多源信息整合 → 结构化报告输出",
      "9.4.2 轻量发布：本地 HTML 一键发布为 workbuddy.link 在线链接",
      "定时任务：让 AI 每日生成特定领域的资讯简报（第 8 章展开实操）",
    ]);
  }
};