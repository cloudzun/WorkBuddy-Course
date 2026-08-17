// slide-05.js — 7.1.1 助理任务 vs 普通任务（表格）
const { C, sectionTitle, bigCallout } = require("./common");
module.exports = {
  slideConfig: { type: "table", index: 5, title: "助理任务 vs 普通任务" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "助理任务 vs 普通任务", C.bgLight);
    const hdrOpts = { fill: { color: C.primary }, color: C.textLight, bold: true };
    const rows = [
      [{ text: "维度", options: hdrOpts },
       { text: "助理任务", options: hdrOpts },
       { text: "普通任务", options: hdrOpts }],
      [{ text: "工作目录", options: { bold: true, color: C.primary } }, "固定使用“助理专属文件夹”（不可随意切换）", "可自由切换工作目录"],
      [{ text: "会话数量", options: { bold: true, color: C.primary } }, "仅支持单一活跃会话", "支持多会话并行处理"],
      [{ text: "上下文管理", options: { bold: true, color: C.primary } }, "保留完整对话历史，不可清空", "可清空历史重新开始"],
    ];
    s.addTable(rows, {
      x: 0.6, y: 1.35, w: 8.8,
      colW: [1.5, 4.0, 3.3],
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: C.textDark, border: { color: C.border, pt: 0.5 },
      align: "left", valign: "middle",
      rowH: [0.42, 0.8, 0.8, 0.8],
      fill: { color: C.bgWhite },
      autoPage: false,
    });
    bigCallout(s, "差异根源：助理任务要经云端中转与移动端交互，用“受控”（固定目录、单会话、历史保留）换“可远程”。", 4.4, 0.75);
    s.addText("官方文档《助理（远程任务）》：https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Assistant", {
      x: 0.6, y: 5.2, w: 8.8, h: 0.3,
      fontSize: 9, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};