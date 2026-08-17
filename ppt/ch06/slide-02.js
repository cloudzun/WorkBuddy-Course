// slide-02.js — 学习目标
const { C, sectionTitle, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "objectives", index: 2, title: "学习目标" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "学习目标", C.bgLight);
    const goals = [
      "阐述标准推理与深度思考模型的工作原理及适用场景",
      "熟悉内置模型家族与能力标记，理解各类任务场景的模型选择策略",
      "配置并管理各类本地及云端大模型，掌握四种接入方式的适用边界与配置要素",
      "理解积分的消耗逻辑与成本差异规律，能够制定合理的成本优化策略",
    ];
    goals.forEach((g, i) => {
      const y = 1.35 + i * 0.85;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(g, {
        x: 1.35, y, w: 8.0, h: 0.75,
        fontSize: 14, fontFace: "Microsoft YaHei",
        color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.2
      });
    });
    calloutBar(s, "学完本章，你将能为不同任务配置最合适的“大脑”，并管住每一分积分成本。");
  }
};