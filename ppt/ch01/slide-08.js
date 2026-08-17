// slide-08.js — 1.2 分隔页：安装与首次登录
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 8, title: "安装与首次登录" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "1.2", "桌面端安装与首次登录", [
      "系统要求：Windows 10+ / macOS 12+",
      "Windows 与 macOS 安装步骤",
      "微信扫码登录与功能验证",
    ]);
  }
};
