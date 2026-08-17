// slide-27.js — 课后思考题
const { C, sectionTitle, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "objectives", index: 27, title: "课后思考题" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "课后思考题", C.bgLight);
    const questions = [
      "试说明深度思考模式（Thinking）虽然成本更高、速度更慢，但仍被引入核心工作流的原因。",
      "假设您的团队处于一个完全无外网连接的安全开发环境中，您应如何利用 WorkBuddy 的模型配置功能继续开展 AI 辅助工作？",
      "分析“提供商接入”与“Token Plan”在配置流程和适用人群上的主要差异。",
      "结合积分的消耗规律，为一位每天需要“批量生成周报 + 偶尔做代码审查”的用户设计两条成本优化建议。",
    ];
    questions.forEach((q, i) => {
      const y = 1.35 + i * 0.92;
      numBadge(s, 0.7, y + 0.05, i + 1);
      s.addText(q, {
        x: 1.35, y, w: 8.0, h: 0.8,
        fontSize: 13, fontFace: "Microsoft YaHei",
        color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.2
      });
    });
    calloutBar(s, "建议先独立思考，再回到配套实验（实验 6.1-6.5）动手验证你的答案。", 5.05);
  }
};