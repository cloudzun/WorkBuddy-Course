// slide-05.js — 2.1.2 明确目标与验收标准（卡片）
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 5, title: "明确目标与验收标准" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "明确目标与验收标准");
    const items = [
      { t: "描述终点而非路线", d: "重点向系统索要结果，不要过度规定中间的推演过程", strip: C.primary },
      { t: "提供可量化的“尺子”", d: "字数限制、章节长度、层级结构、语言风格等验收标准", strip: C.secondary },
      { t: "一次说清关键信息", d: "读者身份、专有名词、负面清单（明确“不做什么”）", strip: C.accent },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.02;
      card(s, x, 1.5, 2.85, 1.8, it.strip);
      s.addText(it.t, { x: x + 0.16, y: 1.62, w: 2.55, h: 0.45, fontSize: 14.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.16, y: 2.12, w: 2.55, h: 1.05, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.3 });
    });
    callout(s, "验收标准是“尺子”：越具体，产物越接近你想要的。");
    function callout(s, text) {
      s.addShape("rect", { x: 0.6, y: 4.1, w: 8.8, h: 0.45, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: 4.1, w: 0.05, h: 0.45, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y: 4.1, w: 8.3, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
