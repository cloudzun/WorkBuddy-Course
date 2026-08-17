// slide-20.js — 9.6.2 三层能力模型（深色分层页）
const { C, topAccentBar, bottomAccentBar } = require("./common");
module.exports = {
  slideConfig: { type: "callout", index: 20, title: "超级个体三层能力模型" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.darkBg };
    topAccentBar(s);
    bottomAccentBar(s);
    s.addText("超级个体的三层能力模型", {
      x: 0.6, y: 0.6, w: 8.8, h: 0.6,
      fontSize: 22, fontFace: "Microsoft YaHei", bold: true, color: "B8E8DC", margin: 0
    });
    s.addShape("rect", { x: 0.6, y: 1.2, w: 1.0, h: 0.035, fill: { color: C.accent } });
    const layers = [
      { l: "L1", t: "单点放大", d: "利用 AI 完成单一任务，如写文章、画图" },
      { l: "L2", t: "流程编排", d: "将多个单点能力串联，形成自动化或半自动化的工作流" },
      { l: "L3", t: "系统自治", d: "构建多 Agent 协同体系，实现复杂业务模块的自我运行与自我修复" },
    ];
    layers.forEach((it, i) => {
      const y = 1.65 + i * 1.05;
      s.addShape("rect", { x: 0.8, y: y + 0.1, w: 0.8, h: 0.55, fill: { color: C.primary } });
      s.addText(it.l, { x: 0.8, y: y + 0.1, w: 0.8, h: 0.55, fontSize: 16, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, align: "center", valign: "middle", margin: 0 });
      s.addText(it.t, { x: 1.8, y: y - 0.02, w: 2.4, h: 0.45, fontSize: 18, fontFace: "Microsoft YaHei", bold: true, color: "FFFFFF", valign: "middle", margin: 0 });
      s.addText(it.d, { x: 4.3, y: y + 0.02, w: 5.2, h: 0.7, fontSize: 12, fontFace: "Microsoft YaHei", color: "DDF2EC", valign: "middle", margin: 0, lineSpacingMultiple: 1.15 });
      if (i < 2) {
        s.addText("▲", { x: 8.9, y: y + 0.75, w: 0.4, h: 0.3, fontSize: 12, fontFace: "Microsoft YaHei", color: "B8E8DC", align: "center", margin: 0 });
      }
    });
    s.addText("—— 三层模型为课程归纳的教学框架，非官方文档定义；AI 负责执行层，方向判断、战略决策与审美/品味由人类主导。", {
      x: 0.6, y: 4.95, w: 8.8, h: 0.4, fontSize: 12.5, fontFace: "Microsoft YaHei", italic: true, color: "C8E8E0", margin: 0
    });
  }
};