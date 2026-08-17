// slide-13.js — 分隔页 7.3
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 13, title: "腾讯生态其他渠道接入指南" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "7.3", "腾讯生态其他渠道接入指南", [
      "元宝派：凭据型（AppID + Secret）认证，适合定制需求",
      "QQ 机器人：QQ 开放平台创建应用机器人，需开发者实名认证",
      "共同流程：平台侧建应用 → 取 AppID/AppSecret → 回填 WorkBuddy",
    ]);
  }
};