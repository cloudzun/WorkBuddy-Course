// slide-23.js — 配套实验：综合评分表（表格）
const { C, sectionTitle, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "table", index: 23, title: "综合评分表" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "配套实验：综合评分表（自评 + 讲师评）");
    const hdrOpts = { fill: { color: C.primary }, color: C.textLight, bold: true };
    const rows = [
      [{ text: "维度", options: hdrOpts },
       { text: "说明", options: hdrOpts },
       { text: "自评（1-5）", options: hdrOpts },
       { text: "讲师评（1-5）", options: hdrOpts }],
      [{ text: "目标完成度", options: { bold: true, color: C.primary } }, "阶段 0 目标是否全部达成、产物齐全", "", ""],
      [{ text: "能力覆盖度", options: { bold: true, color: C.primary } }, "是否覆盖 ≥5 类 WorkBuddy 能力并正确使用", "", ""],
      [{ text: "产物可交付性", options: { bold: true, color: C.primary } }, "报告/PPT/网页链接是否可直接对外交付", "", ""],
      [{ text: "自动化与编排", options: { bold: true, color: C.primary } }, "阶段 6 自动化是否稳定运行、编排思路清晰", "", ""],
      [{ text: "复盘质量", options: { bold: true, color: C.primary } }, "阶段 7 能力清单与改进清单是否扎实", "", ""],
    ];
    s.addTable(rows, {
      x: 0.6, y: 1.35, w: 8.8,
      colW: [1.7, 4.9, 1.1, 1.1],
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: C.textDark, border: { color: C.border, pt: 0.5 },
      align: "left", valign: "middle",
      rowH: [0.42, 0.6, 0.6, 0.6, 0.6, 0.6],
      fill: { color: C.bgWhite },
      autoPage: false,
    });
    calloutBar(s, "五个维度均以 1-5 分自评，再请讲师复核评分；完成后复盘文档可作为结课答辩材料。", 4.85);
  }
};