// slide-18.js — 1.4.1 Ask 模式
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 18, title: "Ask 模式（问一问）" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "Ask 模式：纯问答（Talk only, hands off）", C.bgLight);
    card(s, 0.6, 1.3, 8.8, 1.1, C.primary);
    s.addText("功能特点：只读交互，仅提供问答服务，绝对不会修改您的任何本地文件；所有输出仅限于对话框内的文字回复。", {
      x: 0.95, y: 1.45, w: 8.2, h: 0.8, fontSize: 13.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.3
    });
    s.addText("适用场景", { x: 0.6, y: 2.65, w: 8.8, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.secondary, margin: 0 });
    const scenes = [
      { t: "了解内容", d: "快速阅读长篇文档并提取摘要" },
      { t: "确认需求", d: "动手前探讨技术方案或文章大纲" },
      { t: "安全审视", d: "检查代码漏洞、文章错别字，由你决定是否采纳" },
    ];
    scenes.forEach((it, i) => {
      const x = 0.6 + i * 3.02;
      card(s, x, 3.1, 2.85, 1.4, C.secondary);
      s.addText(it.t, { x: x + 0.16, y: 3.22, w: 2.55, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.16, y: 3.66, w: 2.55, h: 0.75, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
    });
    callout(s, "推荐理由：零风险——最适合处理敏感文件或初步的想法探索。");
    function callout(s, text) {
      s.addShape("rect", { x: 0.6, y: 4.8, w: 8.8, h: 0.45, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: 4.8, w: 0.05, h: 0.45, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y: 4.8, w: 8.3, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
