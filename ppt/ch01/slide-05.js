// slide-05.js — 1.1.2 四大核心能力（2×2 卡片）
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 5, title: "四大核心能力" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "四大核心能力");
    const items = [
      { t: "理解自然语言", d: "用日常说话的方式下达任务，无需学习复杂操作或命令，系统精准捕捉关键意图与任务要素", strip: C.primary },
      { t: "自主规划执行", d: "给定目标后自动拆解任务、规划执行路径并自主走完——你给目标，它给路径", strip: C.secondary },
      { t: "多模态多任务", d: "一句话同时下达多个需求，后台并行处理；支持文档、表格、PPT、数据分析等多种模态", strip: C.accent },
      { t: "本地文件操作", d: "读取并操作经授权的本地文件夹，单文件修改到批量处理——从“AI 帮你想”到“AI 帮你做”", strip: C.accentWarm },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + (i % 2) * 4.55;
      const y = 1.35 + Math.floor(i / 2) * 1.95;
      card(s, x, y, 4.3, 1.75, it.strip);
      s.addText(it.t, {
        x: x + 0.2, y: y + 0.12, w: 3.9, h: 0.45,
        fontSize: 16, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0
      });
      s.addText(it.d, {
        x: x + 0.2, y: y + 0.62, w: 3.9, h: 1.05,
        fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark,
        lineSpacingMultiple: 1.25, margin: 0, valign: "top"
      });
    });
    callout(s, "核心承诺：让 AI 从“咨询顾问”变成能交付实际产物的“数字员工”。");
    function callout(s, text) {
      s.addShape("rect", { x: 0.6, y: 5.0, w: 8.8, h: 0.45, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: 5.0, w: 0.05, h: 0.45, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y: 5.0, w: 8.3, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
