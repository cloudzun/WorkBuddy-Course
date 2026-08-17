// slide-21.js — 1.4.4 模式选择提示（三模式对比表 + 口诀）
const { C, sectionTitle } = require("./common");
module.exports = {
  slideConfig: { type: "table", index: 21, title: "三种模式对比" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "三种工作模式对比与选择");
    const hdr = { bold: true, color: C.textLight, fill: { color: C.primary }, align: "center", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 12 };
    const celA = { fill: { color: C.bgCard }, fontFace: "Microsoft YaHei", fontSize: 11.5, color: C.textDark, valign: "middle" };
    const celB = { fill: { color: C.bgWhite }, fontFace: "Microsoft YaHei", fontSize: 11.5, color: C.textDark, valign: "middle" };
    const mkF = (i) => ({ fill: { color: i % 2 ? C.bgWhite : C.bgCard }, fontFace: "Microsoft YaHei", fontSize: 11.5, color: C.primary, bold: true, valign: "middle" });
    const rows = [
      [{ text: "模式", options: hdr }, { text: "行为", options: hdr }, { text: "安全性", options: hdr }, { text: "适合", options: hdr }],
      [{ text: "Ask 问一问", options: mkF(0) }, { text: "只读问答，不碰文件", options: celA }, { text: "最高", options: celA }, { text: "探索、敏感文件", options: celA }],
      [{ text: "Plan 想一想", options: mkF(1) }, { text: "先出计划，确认后执行", options: celA }, { text: "高", options: celA }, { text: "多步骤/批量修改", options: celA }],
      [{ text: "Craft 做一做", options: mkF(0) }, { text: "直接执行，立即落盘", options: celA }, { text: "中", options: celA }, { text: "日常高频、有把握", options: celA }],
    ];
    s.addTable(rows, {
      fontFace: "Microsoft YaHei",
      x: 0.6, y: 1.3, w: 8.8, colW: [1.9, 2.9, 1.3, 2.7],
      border: { type: "solid", pt: 0.5, color: C.border },
      rowH: 0.55,
    });
    const code = "新手 → 先 Ask 探索 / Plan 看路径；熟练 → Craft 解放双手";
    s.addShape("rect", { x: 0.6, y: 4.15, w: 8.8, h: 0.7, fill: { color: "2C3E50" }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
    s.addText(code, { x: 0.9, y: 4.15, w: 8.2, h: 0.7, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: "E0F2EC", valign: "middle", margin: 0 });
    callout(s, "模式选择口诀：陌生任务先 Ask/Plan，熟练琐事放心 Craft——安全性 × 自动化程度，你来做平衡。");
    function callout(s, text) {
      s.addShape("rect", { x: 0.6, y: 5.0, w: 8.8, h: 0.4, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: 5.0, w: 0.05, h: 0.4, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y: 5.0, w: 8.3, h: 0.4, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
