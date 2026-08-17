// slide-05.js — 4.1.2 技能的底层运行机制（四步骤）
const { C, sectionTitle, numBadge, card, bigCallout, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 5, title: "技能的底层运行机制" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "技能的底层运行机制");
    const steps = [
      { t: "AI 自主决策", d: "根据用户输入和上下文意图，自动判断是否需要调用技能、调用哪一个" },
      { t: "参数推理", d: "从对话中提取必要参数，信息不全时主动引导用户补充" },
      { t: "结果整合", d: "理解并组织工具返回的原始数据与执行状态，以自然语言回复用户" },
      { t: "多技能编排", d: "复杂任务依次调用多个技能，将它们串联成一条工具链" },
    ];
    steps.forEach((it, i) => {
      const x = 0.6 + i * 2.26;
      card(s, x, 1.5, 2.1, 1.9, i === 3 ? C.accent : C.primary);
      numBadge(s, x + 0.14, 1.62, i + 1, i === 3 ? C.accent : C.primary);
      s.addText(it.t, { x: x + 0.72, y: 1.6, w: 1.3, h: 0.5, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: x + 0.16, y: 2.2, w: 1.8, h: 1.1, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
      if (i < 3) {
        s.addText("→", { x: x + 2.12, y: 2.0, w: 0.3, h: 0.4, fontSize: 20, fontFace: "Microsoft YaHei", bold: true, color: C.secondary, align: "center", margin: 0 });
      }
    });
    bigCallout(s, "技能在底层本质上是预定义的工具函数（TOOL），WorkBuddy 通过 Function Calling 让 AI 模型与工具函数交互。", 3.7, 0.85);
    calloutBar(s, "示例工具链：先调用搜索技能获取信息，再调用文档技能生成报告。", 4.75);
  }
};