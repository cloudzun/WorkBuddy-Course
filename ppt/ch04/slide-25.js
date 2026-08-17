// slide-25.js — 课后思考题
const { C, sectionTitle, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "objectives", index: 25, title: "课后思考题" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "课后思考题", C.bgLight);
    const questions = [
      "技能与普通对话在输出结果和适用场景上的核心区别是什么？",
      "WorkBuddy 调用技能的 Function Calling 过程包含哪几个主要步骤？面对可能产生风险的技能操作，系统提供了哪些安全保障机制？",
      "在什么业务场景下，你会毫不犹豫地选择创建一个“专家团”而非单个“专家”？",
      "简述 Multi-Agent 协作机制的五个关键阶段，团长在其中分别承担哪些职责？",
      "结合五类典型专家团中的任意一个说明其典型任务场景，并用一个“产品-内容-落地”的例子描述多团协作如何运作。",
    ];
    questions.forEach((q, i) => {
      const y = 1.35 + i * 0.72;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(q, {
        x: 1.35, y, w: 8.0, h: 0.62,
        fontSize: 13.5, fontFace: "Microsoft YaHei",
        color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.2
      });
    });
    calloutBar(s, "建议先独立思考，再回到 WorkBuddy 动手验证你的答案。", 5.1);
  }
};