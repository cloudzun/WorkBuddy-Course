// slide-23.js — 课后思考题
const { C, sectionTitle, numBadge } = require("./common");
module.exports = {
  slideConfig: { type: "objectives", index: 23, title: "课后思考题" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "课后思考题", C.bgLight);
    const questions = [
      "灵感模块是如何在底层简化 AI 执行链路的？它为用户节省了哪些成本？",
      "简述通过灵感模块复刻一个优秀案例的完整操作步骤。",
      "如果你需要撰写一份完全没有接触过的行业调研报告，应优先使用技能、专家还是灵感？为什么？",
      "什么是提示词工程中的核心要素？灵感模板是如何体现这些要素的？",
    ];
    questions.forEach((q, i) => {
      const y = 1.4 + i * 0.85;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(q, {
        x: 1.35, y, w: 8.0, h: 0.7,
        fontSize: 13.5, fontFace: "Microsoft YaHei",
        color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.2
      });
    });
    calloutBar(s, "建议先独立思考，再回到灵感大厅动手验证你的答案。", 4.9);
    function calloutBar(s, text, y) {
      s.addShape("rect", { x: 0.6, y, w: 8.8, h: 0.45, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y, w: 0.05, h: 0.45, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y, w: 8.3, h: 0.45, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
