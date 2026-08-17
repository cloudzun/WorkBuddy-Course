// slide-10.js — 9.3.2 设计创意模式（四卡片）
const { C, sectionTitle, card, calloutBar, bigCallout } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 10, title: "设计创意模式" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "9.3.2 设计创意模式", C.bgLight);
    s.addText("除了标准商业排版，系统还内置了专为视觉工作流打造的设计创意模式。", {
      x: 0.6, y: 1.05, w: 8.8, h: 0.4, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const items = [
      { t: "界面设计稿", d: "界面设计稿的快速生成", strip: C.primary },
      { t: "复杂视觉排版", d: "复杂的 PPT 视觉排版", strip: C.secondary },
      { t: "交互原型", d: "交互原型的输出", strip: C.accent },
      { t: "Logo 与海报", d: "Logo 与营销海报的生成", strip: C.accentWarm },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + (i % 2) * 4.55;
      const y = 1.55 + Math.floor(i / 2) * 1.45;
      card(s, x, y, 4.3, 1.25, it.strip);
      s.addText(it.t, { x: x + 0.2, y: y + 0.12, w: 3.9, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.56, w: 3.9, h: 0.55, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0 });
    });
    bigCallout(s, "非设计专业的业务人员也能快速构建高质量的视觉素材。", 3.6, 0.7);
    calloutBar(s, "官方文档《设计创意》见教材 9.3.2；设计创意模式支持的能力以产品实际界面为准。", 4.5);
    s.addText("官方文档：https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Design-Idea", {
      x: 0.6, y: 5.12, w: 8.8, h: 0.3, fontSize: 8.5, fontFace: "Microsoft YaHei",
      color: C.textMid, align: "right", margin: 0
    });
  }
};