// slide-06.js — 1.1.3 与传统 AI 对话工具的差异（表格）
const { C, sectionTitle } = require("./common");
module.exports = {
  slideConfig: { type: "table", index: 6, title: "与传统 AI 对话的差异" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "与传统 AI 对话工具的差异");
    const hdr = { bold: true, color: C.textLight, fill: { color: C.primary }, align: "center", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 12 };
    const celA = { fill: { color: C.bgCard }, fontFace: "Microsoft YaHei", fontSize: 11.5, color: C.textDark, valign: "middle" };
    const celB = { fill: { color: C.bgWhite }, fontFace: "Microsoft YaHei", fontSize: 11.5, color: C.textDark, valign: "middle" };
    const mkF = (i) => ({ fill: { color: i % 2 ? C.bgWhite : C.bgCard }, fontFace: "Microsoft YaHei", fontSize: 11.5, color: C.primary, bold: true, valign: "middle" });
    const rows = [
      [{ text: "对比维度", options: hdr }, { text: "传统对话式 AI", options: hdr }, { text: "WorkBuddy 智能体工作台", options: hdr }],
      [{ text: "交互输出", options: mkF(0) }, { text: "仅输出文字回复或建议", options: celA }, { text: "交付可直接验收的产物", options: celB }],
      [{ text: "文件交互", options: mkF(1) }, { text: "手动复制粘贴或处理文件", options: celA }, { text: "自动操作本地文件，支持批量处理", options: celB }],
      [{ text: "任务复杂度", options: mkF(0) }, { text: "局限于单一步骤或简单问答", options: celA }, { text: "胜任多步骤、复杂项目型任务", options: celB }],
      [{ text: "核心定位", options: mkF(1) }, { text: "线上咨询助手", options: celA }, { text: "全场景职场执行平台", options: celB }],
    ];
    s.addTable(rows, {
      fontFace: "Microsoft YaHei",
      x: 0.6, y: 1.3, w: 8.8, colW: [1.8, 3.2, 3.8],
      border: { type: "solid", pt: 0.5, color: C.border },
      rowH: 0.6,
    });
    callout(s, "一句话：WorkBuddy 从“会聊天”进化为“会干活”，把建议变成可交付的产物。");
    function callout(s, text) {
      s.addShape("rect", { x: 0.6, y: 4.85, w: 8.8, h: 0.45, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: 4.85, w: 0.05, h: 0.45, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y: 4.85, w: 8.3, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
