// slide-12.js — 2.3.1 对话闭环与上下文保持（卡片）
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 12, title: "对话闭环与上下文保持" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "对话闭环与上下文保持", C.bgLight);
    const flow = ["输入需求", "补充上下文", "查看思考与执行", "验收", "追问调整"];
    flow.forEach((f, i) => {
      const x = 0.5 + i * 1.82;
      card(s, x, 1.35, 1.65, 1.1, C.primary);
      s.addText(f, { x: x + 0.1, y: 1.35, w: 1.45, h: 1.1, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", valign: "middle", margin: 0 });
      if (i < 4) s.addText("→", { x: x + 1.62, y: 1.35, w: 0.3, h: 1.1, fontSize: 18, fontFace: "Microsoft YaHei", color: C.accentWarm, align: "center", valign: "middle", margin: 0 });
    });
    card(s, 0.6, 2.9, 8.8, 1.3, C.secondary);
    s.addText("上下文保持：同一任务会话自动保留全部历史，追问无需重复前置条件；跨任务对话相互隔离。", {
      x: 0.95, y: 3.0, w: 8.2, h: 0.5, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0
    });
    s.addText("实践技巧：长对话中用“固定锚点”——定期让 AI 总结已确认的阶段性成果，再继续下一轮（经验建议，官方未设轮数上限）。", {
      x: 0.95, y: 3.5, w: 8.2, h: 0.6, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.25
    });
    callout(s, "追问只需说“改什么”：不用重复背景，WorkBuddy 接着上下文继续。");
    function callout(s, text) {
      s.addShape("rect", { x: 0.6, y: 4.6, w: 8.8, h: 0.45, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: 4.6, w: 0.05, h: 0.45, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y: 4.6, w: 8.3, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
