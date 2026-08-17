// slide-25.js — 课后思考题
const { C, sectionTitle, numBadge } = require("./common");
module.exports = {
  slideConfig: { type: "objectives", index: 25, title: "课后思考题" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "课后思考题", C.bgLight);
    const questions = [
      "在 WorkBuddy 的体系中，技能、连接器和 MCP 协议分别扮演什么角色？试举例说明三者如何协同完成一个复杂任务。",
      "简述 OAuth 授权机制在连接器接入外部服务时如何保障用户的密码安全？",
      "在配置自定义 MCP 连接器的 mcp.json 文件时，command/args（stdio 模式）与 url/headers（HTTP 模式）分别起什么作用？",
      "简述语义搜索与关键词搜索的核心区别，并举例说明如何组合使用它们？",
      "在 WorkBuddy 中将一份本地 PDF 文档转化为云端总结报告的完整操作链路是怎样的？",
    ];
    questions.forEach((q, i) => {
      const y = 1.3 + i * 0.82;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(q, {
        x: 1.35, y, w: 8.0, h: 0.72,
        fontSize: 12.5, fontFace: "Microsoft YaHei",
        color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.2
      });
    });
    s.addShape("rect", { x: 0.6, y: 5.32, w: 8.8, h: 0.28, fill: { color: C.bgAccent } });
    s.addShape("rect", { x: 0.6, y: 5.32, w: 0.05, h: 0.28, fill: { color: C.accent } });
    s.addText("建议先独立思考，再回到配套实验（labs/ch05-labs.md）动手验证你的答案。", {
      x: 0.85, y: 5.32, w: 8.3, h: 0.28, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0
    });
  }
};