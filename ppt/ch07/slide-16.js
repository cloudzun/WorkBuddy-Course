// slide-16.js — 分隔页 7.4
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 16, title: "企业级通信渠道接入指南" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "7.4", "企业级通信渠道接入指南", [
      "企业微信：长连接扫码（推荐）与 URL 回调（高级）双模式",
      "飞书 / 钉钉：开放平台创建自定义机器人应用后回填凭据",
      "统一逻辑：平台建应用 → 取凭据 → 选订阅模式 → 填入 WorkBuddy",
    ]);
  }
};