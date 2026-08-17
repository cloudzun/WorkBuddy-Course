// slide-04.js — 1.1.1 什么是 WorkBuddy（四卡片）
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 4, title: "什么是 WorkBuddy" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "什么是 WorkBuddy", C.bgLight);
    const items = [
      { t: "腾讯出品", d: "腾讯推出的全场景 AI 办公工作台（官方文档《WorkBuddy 简介》）", strip: C.primary },
      { t: "办公好搭子", d: "说出要求 → 开始执行任务 → 交付完整成果\n完美连接腾讯办公生态", strip: C.secondary },
      { t: "动手执行", d: "一句话描述需求，自主拆解执行，直接交付产物\n突破纯对话局限", strip: C.accent },
      { t: "能力底座", d: "人机双写 / MD 审阅 / 私有知识库问答\n数据轻应用与看板搭建", strip: C.accentWarm },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + (i % 2) * 4.55;
      const y = 1.4 + Math.floor(i / 2) * 1.85;
      card(s, x, y, 4.3, 1.65, it.strip);
      s.addText(it.t, {
        x: x + 0.2, y: y + 0.12, w: 3.9, h: 0.45,
        fontSize: 16, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0
      });
      s.addText(it.d, {
        x: x + 0.2, y: y + 0.62, w: 3.9, h: 0.95,
        fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark,
        lineSpacingMultiple: 1.3, margin: 0, valign: "top"
      });
    });
  }
};
