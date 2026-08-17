// slide-14.js — 2.3.3 分步确认 + 追问 vs 新建（卡片）
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 14, title: "分步确认与任务新建策略" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "分步确认与“追问 vs 新建”", C.bgLight);
    s.addText("分步确认（强依赖中间确认的任务，首选 Plan 模式）", { x: 0.6, y: 1.15, w: 8.8, h: 0.4, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.secondary, margin: 0 });
    const steps = [
      { t: "长报告", d: "先确认大纲，后填充细节" },
      { t: "批量处理", d: "先在一个测试文件上跑样例，验收后批量" },
      { t: "代码重构", d: "先讨论技术方案，再生成实施代码" },
    ];
    steps.forEach((it, i) => {
      const x = 0.6 + i * 3.02;
      card(s, x, 1.6, 2.85, 1.3, C.primary);
      s.addText(it.t, { x: x + 0.16, y: 1.72, w: 2.55, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.16, y: 2.16, w: 2.55, h: 0.65, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
    });
    card(s, 0.6, 3.25, 8.8, 1.35, C.accent);
    s.addText("判断标准：核心目标是否发生实质性变化", { x: 0.85, y: 3.38, w: 8.2, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
    s.addText("· 仍在完善初始任务 → 继续追问\n· 产生全新灵感或独立子模块 → 果断新建任务", {
      x: 0.85, y: 3.82, w: 8.2, h: 0.7, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.3
    });
    callout(s, "口诀：修补旧目标用追问，开启新目标用新建。");
    function callout(s, text) {
      s.addShape("rect", { x: 0.6, y: 4.85, w: 8.8, h: 0.4, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: 4.85, w: 0.05, h: 0.4, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y: 4.85, w: 8.3, h: 0.4, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
