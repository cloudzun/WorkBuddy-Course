// slide-21.js — 课后思考题
const { C, sectionTitle, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "objectives", index: 21, title: "课后思考题" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "课后思考题", C.bgLight);
    const questions = [
      "自动化任务与手动执行的 Ask/Craft 模式在适用场景上有何根本区别？",
      "在编写自动化任务的提示词时，为什么必须包含“异常处理逻辑”？请举例说明。",
      "简述在配置涉及公司业务数据的自动化任务时，应采取哪些安全防范措施。",
      "如果一个每天上午 10 点执行的自动化任务未能如期推送结果，请列举至少三种可能的排查方向。",
    ];
    questions.forEach((q, i) => {
      const y = 1.35 + i * 0.9;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(q, {
        x: 1.35, y, w: 8.0, h: 0.8,
        fontSize: 13, fontFace: "Microsoft YaHei",
        color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.2
      });
    });
    calloutBar(s, "建议先独立思考，再回到自动化页面与配套实验（labs/ch08-labs.md）动手验证你的答案。", 5.0);
  }
};