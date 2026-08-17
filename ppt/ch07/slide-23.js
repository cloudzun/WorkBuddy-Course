// slide-23.js — 分隔页 配套实验
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 23, title: "配套实验（实验 7.1-7.6）" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "实验", "配套实验：助理连接配置", [
      "必做主线：7.1 四前提 → 7.2 微信助理 → 7.5 远程特性 → 7.6 排查演练",
      "可选实验：7.3 微信小程序多端协同（需手机微信与微信小程序）",
      "可选实验：7.4 企业微信接入（需企业微信管理员权限）",
      "★ 必做仅需 WorkBuddy 与手机微信；○ 可选需管理员权限或开发者认证",
    ]);
  }
};