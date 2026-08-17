// slide-19.js — 1.4.2 Plan 模式
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 19, title: "Plan 模式（想一想）" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "Plan 模式：先规划后执行（Think first, do second）", C.bgLight);
    card(s, 0.6, 1.3, 8.8, 1.1, C.primary);
    s.addText("功能特点：不会立即修改，先生成详尽的执行计划（Todo List / 执行计划书）供您审核；确认并点击“执行”后才开始文件读写与操作。", {
      x: 0.95, y: 1.45, w: 8.2, h: 0.8, fontSize: 13.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.3
    });
    s.addText("适用场景", { x: 0.6, y: 2.65, w: 8.8, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.secondary, margin: 0 });
    const scenes = [
      { t: "多步骤任务", d: "分析年度财报 → 提取关键指标 → 生成汇报 PPT" },
      { t: "审阅改动范围", d: "代码重构、批量文件重命名：先看计划防意外损坏" },
      { t: "讨论协作", d: "不确定步骤时，通过 AI 的规划获得灵感并调整方向" },
    ];
    scenes.forEach((it, i) => {
      const x = 0.6 + i * 3.02;
      card(s, x, 3.1, 2.85, 1.4, C.secondary);
      s.addText(it.t, { x: x + 0.16, y: 3.22, w: 2.55, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.16, y: 3.66, w: 2.55, h: 0.75, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
    });
    callout(s, "推荐理由：安全可控——处理复杂任务或批量修改工作时的首选模式。");
    function callout(s, text) {
      s.addShape("rect", { x: 0.6, y: 4.8, w: 8.8, h: 0.45, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: 4.8, w: 0.05, h: 0.45, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y: 4.8, w: 8.3, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
