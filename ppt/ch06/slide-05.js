// slide-05.js — 两模式如何取舍（例子 + 判断标准）
const { C, sectionTitle, card, bigCallout, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 5, title: "两模式如何取舍" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "两模式如何取舍：用一个例子感受差异", C.bgLight);
    s.addText("让 AI 审查一段并发代码的竞态条件：", {
      x: 0.6, y: 1.1, w: 8.8, h: 0.4, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const cards = [
      { t: "标准推理模式", strip: C.primary, d: "可能直接给出结论" },
      { t: "深度思考模式（Thinking）", strip: C.accentWarm,
        d: "先推导执行时序、识别共享资源的冲突路径，再给出带论证过程的修复方案" },
    ];
    cards.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      card(s, x, 1.6, 4.3, 1.55, it.strip);
      s.addText(it.t, { x: x + 0.2, y: 1.72, w: 3.9, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: 2.25, w: 3.9, h: 0.8, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.25 });
    });
    bigCallout(s, "判断标准：任务越依赖“推理过程”，越值得启用 Thinking。", 3.55, 1.0);
    calloutBar(s, "最佳实践：日常任务用标准模式保效率，把深度思考留给高价值的复杂任务；两者可在任务执行中随时切换，不必一上来就选最贵的配置。", 4.72);
  }
};