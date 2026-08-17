// slide-25.js — 课后思考题
const { C, sectionTitle, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "objectives", index: 25, title: "课后思考题" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "课后思考题", C.bgLight);
    const questions = [
      "在数据分析流程中，数据文件导入后，系统会自动执行哪些核心数据处理步骤？",
      "阐述让 AI 实现自主驱动的“自驱四要素”分别是什么，它们如何在复合任务中发挥作用？",
      "请结合“季度经营分析汇报”案例，描述如何将不同 AI 能力进行串联应用。",
      "简述 OPC（一人公司）的核心理念及其典型的商业模式。",
      "超级个体的“三层能力模型”分别包含哪些层次？结合你自己的规划，说明可以利用 WorkBuddy 走向哪一层。",
    ];
    questions.forEach((q, i) => {
      const y = 1.3 + i * 0.78;
      numBadge(s, 0.7, y + 0.06, i + 1);
      s.addText(q, {
        x: 1.35, y, w: 8.0, h: 0.7,
        fontSize: 13, fontFace: "Microsoft YaHei",
        color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.2
      });
    });
    calloutBar(s, "建议先独立思考，再回到综合演练（labs/ch09-labs.md）动手验证你的答案。", 4.9);
  }
};