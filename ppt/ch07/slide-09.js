// slide-09.js — 分隔页 7.2
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 9, title: "微信生态渠道接入指南" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "7.2", "微信生态渠道接入指南", [
      "官方 6 大 IM 平台 + 元宝派 + 微信小程序 = 8 类渠道",
      "最推荐：微信助理——零配置，扫码即用",
      "微信小程序：云上模式与连接电脑双重执行环境",
      "微信客服号：习惯服务号窗口交互的另一种选择",
    ]);
  }
};