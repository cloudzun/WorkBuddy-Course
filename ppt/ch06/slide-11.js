// slide-11.js — 选型口诀（深色大结论页）
const { C } = require("./common");
module.exports = {
  slideConfig: { type: "callout", index: 11, title: "选型口诀" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.darkBg };
    s.addText("选型口诀", {
      x: 0.6, y: 0.7, w: 8.8, h: 0.6,
      fontSize: 22, fontFace: "Microsoft YaHei", bold: true, color: "B8E8DC", margin: 0
    });
    s.addShape("rect", { x: 0.6, y: 1.3, w: 1.0, h: 0.035, fill: { color: C.accent } });
    const lines = [
      { k: "日常问答", v: "Auto 自动模式保底", c: "B8E8DC" },
      { k: "多模态识图", v: "GLM / Kimi", c: "FFFFFF" },
      { k: "复杂推理与代码", v: "Hy3 混元 / DeepSeek", c: "B8E8DC" },
      { k: "Agent 执行", v: "GLM / MiniMax", c: "FFFFFF" },
    ];
    lines.forEach((it, i) => {
      const y = 1.7 + i * 0.88;
      s.addText(it.k, { x: 1.0, y, w: 2.6, h: 0.7, fontSize: 21, fontFace: "Microsoft YaHei", color: it.c, valign: "middle", margin: 0 });
      s.addText("→", { x: 3.7, y, w: 0.6, h: 0.7, fontSize: 24, fontFace: "Microsoft YaHei", bold: true, color: C.accent, align: "center", valign: "middle", margin: 0 });
      s.addShape("rect", { x: 4.35, y: y + 0.08, w: 3.6, h: 0.55, fill: { color: C.primary } });
      s.addText(it.v, { x: 4.35, y: y + 0.08, w: 3.6, h: 0.55, fontSize: 20, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, align: "center", valign: "middle", margin: 0 });
    });
    s.addText("—— 按任务场景匹配模型，而不是一律使用最强配置；复杂任务可随时切换思考模式", {
      x: 0.6, y: 5.0, w: 8.8, h: 0.4, fontSize: 13, fontFace: "Microsoft YaHei", italic: true, color: "C8E8E0", margin: 0
    });
  }
};