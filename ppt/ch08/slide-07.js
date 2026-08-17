// slide-07.js — 8.1.2 自动化 vs 手动执行（对比表格 + 边界结论）
const { C, sectionTitle, bigCallout, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "table", index: 7, title: "自动化与手动执行的协同" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "自动化与手动执行的协同");
    const hdrOpts = { fill: { color: C.primary }, color: C.textLight, bold: true };
    const rows = [
      [{ text: "对比维度", options: hdrOpts },
       { text: "自动化任务", options: hdrOpts },
       { text: "手动执行（Ask / Craft 模式）", options: hdrOpts }],
      [{ text: "任务特征", options: { bold: true, color: C.primary } }, "重复性高、时间规律性强、输出格式相对固定", "一次性探索、需要高度人工判断、创意性极强"],
      [{ text: "推荐方式", options: { bold: true, color: C.primary } }, "采用自动化模式，强烈建议以节省精力", "手动执行，带来更好的交互体验"],
      [{ text: "换挡时机", options: { bold: true, color: C.primary } }, "流程跑通、输出稳定后转为自动化", "新任务首次执行、结果待验证时先手动"],
    ];
    s.addTable(rows, {
      x: 0.6, y: 1.35, w: 8.8,
      colW: [1.3, 3.75, 3.75],
      fontSize: 10.5, fontFace: "Microsoft YaHei",
      color: C.textDark, border: { color: C.border, pt: 0.5 },
      align: "left", valign: "middle",
      rowH: [0.42, 0.7, 0.7, 0.7],
      fill: { color: C.bgWhite },
      autoPage: false,
    });
    bigCallout(s, "边界判定：任务能否“重复 + 规律 + 固定格式”三连？能 → 交给自动化后台代劳；不能 → 留给人机对话慢慢打磨。", 4.0, 0.85);
    calloutBar(s, "上线自动化之前，建议采用“混合模式”过渡：先手动跑通并验证，再转换为自动化任务。", 4.95);
  }
};