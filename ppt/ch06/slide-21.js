// slide-21.js — 分隔页 6.6
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 21, title: "模型管理最佳实践与常见问题" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "6.6", "模型管理最佳实践与常见问题", [
      "6.6.1 最佳实践五条：优先 Auto / 利用能力标记 / Ollama 离线首选 / 灵活自定义协议 / API Key 严格管控",
      "6.6.2 常见问题排查：无响应、能力缺失、本地连接失败",
      "把模型配置沉淀为可复用的管理习惯",
    ]);
  }
};