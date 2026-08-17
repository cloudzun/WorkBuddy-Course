// slide-11.js — 4.2.2 技能应用最佳实践（四卡片）
const { C, sectionTitle, card, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 11, title: "技能应用最佳实践" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "技能应用最佳实践", C.bgLight);
    const items = [
      { t: "仅启用当前相关技能", d: "同时开启过多技能会导致模型在判断调用哪个工具时产生混淆，增加延迟和出错率。请只启用当前任务所需的技能。", strip: C.primary },
      { t: "按场景切换", d: "为不同的工作场景（如开发、写作、数据分析）组合开启相应的技能组，保持工作空间的纯净。", strip: C.accent },
      { t: "单一职责", d: "在使用或开发自定义技能时，确保每个技能包或工具函数只专注解决一个具体问题，避免功能过度耦合。", strip: C.secondary },
      { t: "触发清晰", d: "在对话中调用技能时，使用明确的动词和清晰的参数描述，帮助 AI 更精准地命中你想要调用的技能。", strip: C.accentWarm },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + (i % 2) * 4.55;
      const y = 1.35 + Math.floor(i / 2) * 1.7;
      card(s, x, y, 4.3, 1.55, it.strip);
      s.addText(it.t, { x: x + 0.2, y: y + 0.12, w: 3.9, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.62, w: 3.9, h: 0.82, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.25 });
    });
    calloutBar(s, "四条原则一句话：技能是“工具箱”，用得精、用得准，才能又快又稳。", 4.85);
  }
};