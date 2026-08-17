// slide-02.js — 学习目标
const { C, sectionTitle, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "objectives", index: 2, title: "学习目标" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "学习目标", C.bgLight);
    const goals = [
      "理解灵感模块的核心价值：灵感 = Prompt + Skill + 专家配置的完整案例",
      "理解“开箱即用”的底层执行链路（输入 → 提示词组装 → 推理 → 整合）",
      "熟练掌握从探索案例到“做同款”一键复刻、微调生成、产物交付的完整流程",
      "理解灵感、技能与专家的定位差异，用一句话速记三者区别",
      "能说出“灵感是什么”，并跑通一次完整的“做同款”实验",
    ];
    goals.forEach((g, i) => {
      const y = 1.3 + i * 0.72;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(g, {
        x: 1.35, y, w: 8.0, h: 0.55,
        fontSize: 14, fontFace: "Microsoft YaHei",
        color: C.textDark, valign: "middle", margin: 0
      });
    });
    calloutBar(s, "学完本章，你将告别“不知道从哪开始”的空白恐惧，一键复刻社区精选成品。");
  }
};
