// slide-22.js — 分隔页：配套实验
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 22, title: "配套实验" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "1.5", "配套实验：边学边验证", [
      "实验 1.1 安装、扫码登录与功能自检",
      "实验 1.2 主界面三区域与新建任务栏",
      "实验 1.3 Ask / Plan / Craft 三模式对比",
      "实验 1.4 系统设置与记忆管理（可选）",
    ]);
  }
};
