// slide-22.js — 2.5.3 归档 vs 删除（对比表格 + 警示）
const { C, sectionTitle, warnBar } = require("./common");
module.exports = {
  slideConfig: { type: "table", index: 22, title: "归档 vs 删除" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "归档 vs 删除");
    const hdrOpts = { fill: { color: C.primary }, color: C.textLight, bold: true };
    const rows = [
      [{ text: "对比项", options: hdrOpts },
       { text: "归档（软清理）", options: hdrOpts },
       { text: "删除（硬清理）", options: hdrOpts }],
      ["操作入口", "任务右键 → 归档", "任务右键 → 删除"],
      ["确认方式", "直接归档，可随时找回", "二次确认，且不可恢复"],
      ["产物状态", "保留对话与产物，可重新打开", "对话与产物不可再查看"],
      ["后续能力", "可继续对话、重新打开", "无法查看、无法继续对话"],
      ["适用场景", "阶段性收尾，后续可能复用", "确定废弃，彻底清理"],
    ];
    s.addTable(rows, {
      x: 0.6, y: 1.35, w: 8.8,
      colW: [1.8, 3.5, 3.5],
      fontSize: 11.5, fontFace: "Microsoft YaHei",
      color: C.textDark, border: { color: C.border, pt: 0.5 },
      align: "left", valign: "middle",
      rowH: [0.42, 0.55, 0.55, 0.55, 0.55, 0.55],
      fill: { color: C.bgWhite },
      autoPage: false,
    });
    warnBar(s, "⚠ 删除是高风险操作：二次确认后，对话与产物将不可查看、不可继续对话。重要任务请优先归档。", 4.7);
  }
};
