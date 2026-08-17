// slide-19.js — 执行自主性演进（深色强调页）
const { C, topAccentBar, bottomAccentBar } = require("./common");
module.exports = {
  slideConfig: { type: "callout", index: 19, title: "执行自主性演进" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.darkBg };
    topAccentBar(s);
    bottomAccentBar(s);
    s.addText("执行自主性：一路拉满", {
      x: 0.6, y: 0.7, w: 8.8, h: 0.6,
      fontSize: 22, fontFace: "Microsoft YaHei", bold: true, color: "B8E8DC", margin: 0
    });
    s.addShape("rect", { x: 0.6, y: 1.3, w: 1.0, h: 0.035, fill: { color: C.accent } });
    const lines = [
      { k: "第 2 章 · 手动执行", v: "Ask / Craft 亲自操作" },
      { k: "第 7 章 · 远程操控", v: "随时发起、远程受托执行" },
      { k: "第 8 章 · 无人值守", v: "自动化定时任务后台代劳" },
    ];
    lines.forEach((it, i) => {
      const y = 1.8 + i * 1.05;
      s.addText(it.k, { x: 1.0, y, w: 3.2, h: 0.7, fontSize: 18, fontFace: "Microsoft YaHei", color: "B8E8DC", valign: "middle", margin: 0 });
      s.addText("→", { x: 4.2, y, w: 0.6, h: 0.7, fontSize: 24, fontFace: "Microsoft YaHei", bold: true, color: C.accent, align: "center", valign: "middle", margin: 0 });
      s.addShape("rect", { x: 4.9, y: y + 0.08, w: 4.0, h: 0.55, fill: { color: C.primary } });
      s.addText(it.v, { x: 4.9, y: y + 0.08, w: 4.0, h: 0.55, fontSize: 16, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, align: "center", valign: "middle", margin: 0 });
    });
    s.addText("从手动执行（第 2 章）到远程操控（第 7 章）、再到无人值守（本章），WorkBuddy 的“执行自主性”已经拉满。", {
      x: 0.6, y: 4.95, w: 8.8, h: 0.4, fontSize: 13, fontFace: "Microsoft YaHei", italic: true, color: "C8E8E0", margin: 0
    });
  }
};