// slide-22.js — 实战示例：远程指令（深色页 + 官方示例命令）
const { C, codeBlock } = require("./common");
module.exports = {
  slideConfig: { type: "callout", index: 22, title: "远程指令示例" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.darkBg };
    s.addText("远程指令示例（官方实践六：远程遥控 WorkBuddy）", {
      x: 0.6, y: 0.7, w: 8.8, h: 0.6,
      fontSize: 22, fontFace: "Microsoft YaHei", bold: true, color: "B8E8DC", margin: 0
    });
    s.addShape("rect", { x: 0.6, y: 1.3, w: 1.0, h: 0.035, fill: { color: C.accent } });
    codeBlock(s, 1.0, 1.6, 8.0, 1.35,
      "我现在不在电脑前，请继续排查这个项目的报错问题，优先查看最近一次运行日志，并先告诉我原因和处理建议，再告诉我下一步如何完成跨端传输");
    s.addText("远程场景三条使用建议", {
      x: 1.0, y: 3.25, w: 8.0, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: "B8E8DC", margin: 0
    });
    const tips = [
      "▸ 先给清晰目标：远程场景下避免模糊指令",
      "▸ 减少高风险操作：涉及删除、覆盖、批量移动时，建议先要求预览",
      "▸ 保留关键文件名：跨端操作时明确文件名和目录，能显著提升成功率",
    ];
    tips.forEach((t, i) => {
      s.addText(t, { x: 1.0, y: 3.78 + i * 0.45, w: 8.0, h: 0.4, fontSize: 13, fontFace: "Microsoft YaHei", color: "DDF2EC", margin: 0 });
    });
    s.addText("官方文档《实践六：远程遥控 WorkBuddy》：https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Practice-Cases/Practice-Six", {
      x: 0.6, y: 5.1, w: 8.8, h: 0.35,
      fontSize: 9, fontFace: "Microsoft YaHei", color: "C8E8E0", margin: 0
    });
  }
};