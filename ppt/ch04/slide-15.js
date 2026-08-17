// slide-15.js — 一句话口诀（深色页）
const { C } = require("./common");
module.exports = {
  slideConfig: { type: "callout", index: 15, title: "一句话口诀" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.darkBg };
    s.addText("一句话速记", {
      x: 0.6, y: 0.7, w: 8.8, h: 0.6,
      fontSize: 22, fontFace: "Microsoft YaHei", bold: true, color: "B8E8DC", margin: 0
    });
    s.addShape("rect", { x: 0.6, y: 1.3, w: 1.0, h: 0.035, fill: { color: C.accent } });
    const lines = [
      { k: "想要能力", v: "找技能", c: "B8E8DC" },
      { k: "想要建议", v: "找专家", c: "FFFFFF" },
      { k: "想要团队协作攻坚", v: "找专家团", c: "B8E8DC" },
    ];
    lines.forEach((it, i) => {
      const y = 1.8 + i * 1.0;
      s.addText(it.k, { x: 1.0, y, w: 3.2, h: 0.7, fontSize: 20, fontFace: "Microsoft YaHei", color: it.c, valign: "middle", margin: 0 });
      s.addText("→", { x: 4.2, y, w: 0.6, h: 0.7, fontSize: 24, fontFace: "Microsoft YaHei", bold: true, color: C.accent, align: "center", valign: "middle", margin: 0 });
      s.addShape("rect", { x: 4.9, y: y + 0.08, w: 3.4, h: 0.55, fill: { color: C.primary } });
      s.addText(it.v, { x: 4.9, y: y + 0.08, w: 3.4, h: 0.55, fontSize: 20, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, align: "center", valign: "middle", margin: 0 });
    });
    s.addText("—— 能力进阶链：工具（Skill）→ 方法与角色（专家）→ 团队协同（专家团）", {
      x: 0.6, y: 4.85, w: 8.8, h: 0.4, fontSize: 13, fontFace: "Microsoft YaHei", italic: true, color: "C8E8E0", margin: 0
    });
  }
};