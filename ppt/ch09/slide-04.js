// slide-04.js — 9.1.1 典型文档生成（文档类型 + 任务描述关键）
const { C, sectionTitle, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 4, title: "典型文档生成" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "9.1.1 典型文档生成");
    s.addText("撰写报告与文档是日常工作中极其高频的需求，WorkBuddy 高效应对多类典型文档：工作报告、技术文档、会议纪要等。", {
      x: 0.6, y: 1.05, w: 8.8, h: 0.4, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0
    });
    ["工作报告", "技术文档", "会议纪要"].forEach((t, i) => {
      const x = 0.6 + i * 3.05;
      s.addShape("rect", { x, y: 1.55, w: 2.85, h: 0.5, fill: { color: C.bgCard }, shadow: mkSh() });
      s.addShape("rect", { x, y: 1.55, w: 0.06, h: 0.5, fill: { color: C.primary } });
      s.addText(t, { x, y: 1.55, w: 2.85, h: 0.5, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.primary, align: "center", valign: "middle", margin: 0 });
    });
    s.addText("写好任务描述的关键", {
      x: 0.6, y: 2.35, w: 8.8, h: 0.35, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0
    });
    const steps = [
      "清晰描述目标：做什么、给谁看、要达到什么效果",
      "一次性说清结构化要求",
      "明确对话对象与输出语气",
      "通过多轮对话进行迭代修改",
    ];
    steps.forEach((t, i) => {
      const y = 2.8 + i * 0.5;
      numBadge(s, 0.7, y + 0.03, i + 1, C.accent);
      s.addText(t, { x: 1.35, y, w: 8.0, h: 0.5, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "最佳实践：给 AI 分配一个明确的专家身份，并提供一个优秀的样例，往往胜过千言万语的抽象要求。", 4.85);
    s.addText("官方文档《WorkBuddy 简介》：https://www.workbuddy.cn/docs/workbuddy/Overview", {
      x: 0.6, y: 5.12, w: 8.8, h: 0.3, fontSize: 8.5, fontFace: "Microsoft YaHei",
      color: C.textMid, align: "right", margin: 0
    });
    function mkSh() {
      return { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 };
    }
  }
};