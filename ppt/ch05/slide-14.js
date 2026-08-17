// slide-14.js — 5.3.1 深度集成与平台支持
const { C, sectionTitle, card, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 14, title: "深度集成与平台支持" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "深度集成与平台支持", C.bgLight);
    s.addText("日常工作中，资料往往散落在不同的平台和本地文件夹中。WorkBuddy 的资料库功能打破了这些信息孤岛（以当前最新版本为准）。", {
      x: 0.6, y: 1.1, w: 8.8, h: 0.42, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const items = [
      { t: "腾讯文档", d: "“连接腾讯文档”正是连接器机制在文档场景的具体应用", strip: C.primary },
      { t: "ima 知识库", d: "已实现与主流知识库的深度集成，支持连接", strip: C.accent },
      { t: "乐享知识库", d: "已实现与主流知识库的深度集成，支持连接", strip: C.accentWarm },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.02;
      card(s, x, 1.62, 2.85, 1.55, it.strip);
      s.addText(it.t, { x: x + 0.2, y: 1.74, w: 2.45, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: 2.24, w: 2.5, h: 0.82, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
    });
    s.addShape("rect", { x: 0.6, y: 3.5, w: 8.8, h: 0.75, fill: { color: C.bgCard } });
    s.addShape("rect", { x: 0.6, y: 3.5, w: 0.07, h: 0.75, fill: { color: C.accent } });
    s.addText("本地文件同样支持：", {
      x: 0.95, y: 3.56, w: 1.9, h: 0.35, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0
    });
    s.addText("无论是 Word、Excel、PPT 等办公文档，还是 PDF 格式的文件，都可以无缝接入到工作空间中进行 AI 分析与处理。", {
      x: 0.95, y: 3.92, w: 8.2, h: 0.3, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0
    });
    calloutBar(s, "系统当前已实现与腾讯文档、ima 知识库以及乐享知识库的深度集成——支持平台以当前最新版本为准。", 4.55);
  }
};