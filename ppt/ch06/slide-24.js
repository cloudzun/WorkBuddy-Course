// slide-24.js — 分隔页 配套实验
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 24, title: "配套实验" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "实验", "配套实验总览（6.1-6.5）", [
      "实验 6.1 推理模式与 Auto（★ 必做）",
      "实验 6.2 能力标记验证（★ 必做）",
      "实验 6.3 自定义模型接入（○ 可选）",
      "实验 6.4 Ollama 本地部署（○ 可选）",
      "实验 6.5 积分消耗观察（★ 必做）",
    ]);
  }
};