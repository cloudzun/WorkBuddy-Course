// slide-15.js — 5.3.2 资料库功能优势（四卡片）
const { C, sectionTitle, card, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 15, title: "资料库功能优势" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "资料库功能优势");
    s.addText("资料库的深度集成带来了四大核心功能优势：", {
      x: 0.6, y: 1.1, w: 8.8, h: 0.35, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const items = [
      { t: "AI 与文档深度集成", d: "实现了“搜索即找到、点击即预览、一键即可开工”的流畅体验", strip: C.primary },
      { t: "产物一键存回", d: "经过 AI 处理生成的产物，可以直接一键保存回云端资料库，形成知识沉淀", strip: C.accent },
      { t: "账号灵活绑定", d: "支持多平台的账号授权，并且可以根据需要随时解除绑定或换绑账号", strip: C.secondary },
      { t: "无需切换应用", d: "所有的文档搜索、预览和处理动作都在 WorkBuddy 内部完成，极大地保持工作的专注度", strip: C.accentWarm },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + (i % 2) * 4.55;
      const y = 1.55 + Math.floor(i / 2) * 1.68;
      card(s, x, y, 4.3, 1.52, it.strip);
      s.addText(it.t, { x: x + 0.2, y: y + 0.12, w: 3.9, h: 0.42, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.58, w: 3.9, h: 0.85, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.25 });
    });
    calloutBar(s, "四大优势共同支撑“取资料 → AI 加工 → 存回沉淀”的闭环体验。", 4.95);
  }
};