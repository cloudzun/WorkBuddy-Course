// slide-02.js — 学习目标
const { C, sectionTitle, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "objectives", index: 2, title: "学习目标" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "学习目标", C.bgLight);
    const goals = [
      "掌握文档生成、数据分析、PPT 制作及深度研究的全流程应用方法",
      "熟练运用人机双写、设计创意模式及轻量发布等进阶能力",
      "应用自驱四要素与高频提效技巧，实现多场景的无缝串联与自动化协作",
      "理解 OPC（One Person Company）概念及其在 AI 时代的商业潜力",
      "识别超级个体的四大核心特征与三层能力模型",
    ];
    goals.forEach((g, i) => {
      const y = 1.25 + i * 0.72;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(g, {
        x: 1.35, y, w: 8.0, h: 0.55,
        fontSize: 14, fontFace: "Microsoft YaHei",
        color: C.textDark, valign: "middle", margin: 0
      });
    });
    calloutBar(s, "本章是收官之章：从日常办公提升到商业模式层面，看 OPC 一人公司与超级个体如何借助 WorkBuddy 完成商业闭环。");
  }
};