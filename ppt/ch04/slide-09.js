// slide-09.js — 分隔页 4.2
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 9, title: "常用零成本技能与最佳实践" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "4.2", "常用零成本技能与最佳实践", [
      "十大零成本技能：覆盖浏览器、办公文档、语音、视频、搜索、笔记等日常场景",
      "代表技能：Agent Browser / 办公文档四件套 / Local Whisper / Web Search",
      "技能应用最佳实践：仅启用相关技能、按场景切换、单一职责、触发清晰",
    ]);
  }
};