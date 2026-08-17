// slide-19.js — 9.6.2 超级个体四大显著特征（四卡片）
const { C, sectionTitle, card, calloutBar, bigCallout } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 19, title: "超级个体四大特征" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "9.6.2 超级个体的四大显著特征", C.bgLight);
    s.addText("在 OPC 模式下，从业者往往会进化为“超级个体”。以下四大特征为本书归纳的教学框架，非官方文档定义。", {
      x: 0.6, y: 1.05, w: 8.8, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const items = [
      { t: "AI First 工作动线", d: "凡事优先思考如何利用 AI 来解决或提效", strip: C.primary },
      { t: "能力边界量级跃迁", d: "突破单一专业限制，拥有跨领域的执行力", strip: C.secondary },
      { t: "主动性极强", d: "具备自我驱动、主动迭代与终身学习的意识", strip: C.accent },
      { t: "影响力溢出", d: "借助杠杆效应，其产出的价值和影响力远超普通个体", strip: C.accentWarm },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + (i % 2) * 4.55;
      const y = 1.55 + Math.floor(i / 2) * 1.45;
      card(s, x, y, 4.3, 1.3, it.strip);
      s.addText(it.t, { x: x + 0.2, y: y + 0.12, w: 3.9, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.58, w: 3.9, h: 0.6, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.15 });
    });
    bigCallout(s, "关键的方向判断、战略决策与审美/品味层，依然必须由人类来主导。", 3.2, 0.7);
    calloutBar(s, "AI 在执行层主要提供内容生成、数据与代码、信息检索以及系统协同等能力（课程归纳）。", 4.15);
    calloutBar(s, "层级进阶：L1 单点放大 → L2 流程编排 → L3 系统自治（详见下页）。", 4.75);
  }
};