// slide-05.js — 9.1.2 人机双写（双写协同 + 多人多 Agent 协作）
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 5, title: "人机双写" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "9.1.2 人机双写", C.bgLight);
    s.addText("为进一步提升长文档与复杂协作的效率，WorkBuddy 提供了人机双写模式——支持人类用户与 AI 之间的无缝协同编辑。", {
      x: 0.6, y: 1.05, w: 8.8, h: 0.4, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0
    });
    card(s, 0.6, 1.6, 4.35, 1.55, C.primary);
    s.addText("双写协作方式", { x: 0.85, y: 1.72, w: 3.9, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
    s.addText("生成初稿后，直接在编辑器中与 AI 一起修改内容；AI 的修改以修订建议形式呈现，接受后才写入正文（MD 审阅与 AI 修订）。", {
      x: 0.85, y: 2.18, w: 3.85, h: 0.9, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2
    });
    card(s, 5.05, 1.6, 4.35, 1.55, C.accent);
    s.addText("多人多 Agent 协作", { x: 5.3, y: 1.72, w: 3.9, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
    s.addText("资料库支持多人多 Agent 的在线协作，确保大型项目文档的快速推进与版本一致。", {
      x: 5.3, y: 2.18, w: 3.85, h: 0.9, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2
    });
    const flow = ["生成初稿", "AI 修订建议", "人工接受/拒绝", "写入正文"];
    flow.forEach((t, i) => {
      const x = 0.6 + i * 2.24;
      s.addShape("rect", { x, y: 3.4, w: 1.9, h: 0.55, fill: { color: C.bgCard }, shadow: mkSh() });
      s.addText(t, { x, y: 3.4, w: 1.9, h: 0.55, fontSize: 10.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", valign: "middle", margin: 0 });
      if (i < 3) {
        s.addText("→", { x: x + 1.9, y: 3.4, w: 0.32, h: 0.55, fontSize: 16, fontFace: "Microsoft YaHei", bold: true, color: C.secondary, align: "center", valign: "middle", margin: 0 });
      }
    });
    s.addShape("rect", { x: 0.6, y: 4.3, w: 8.8, h: 1.0, fill: { color: C.bgBlue } });
    s.addText("产品界面：右侧边栏的【协同编辑器】与文档审阅入口（具体位置以实际产品界面为准）。", {
      x: 0.85, y: 4.4, w: 8.3, h: 0.28, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0
    });
    s.addText("官方文档《人机双写》：https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Knowledge-Base/Cowriting", {
      x: 0.85, y: 4.72, w: 8.3, h: 0.26, fontSize: 8.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    s.addText("官方文档《多人多 Agent 协作》：https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Library/Collaboration", {
      x: 0.85, y: 4.98, w: 8.3, h: 0.26, fontSize: 8.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    function mkSh() {
      return { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 };
    }
  }
};