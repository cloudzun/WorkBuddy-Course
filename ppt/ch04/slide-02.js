// slide-02.js — 学习目标
const { C, sectionTitle, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "objectives", index: 2, title: "学习目标" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "学习目标", C.bgLight);
    const goals = [
      "深入理解技能与普通对话的核心区别，以及技能的底层运行机制",
      "掌握技能的多种安装方式与日常管理操作，熟悉常用零成本技能",
      "区分专家与专家团的概念，及二者在不同复杂度任务中的适用场景",
      "掌握召唤与创建自定义专家、专家团的完整流程，理解 Multi-Agent 协作原理",
      "对比 Skill、专家与专家团的差异，熟悉专家中心的领域覆盖与五类典型专家团的应用",
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
    calloutBar(s, "学完本章，你将能拆解灵感背后的能力体系：技能（工具）→ 专家（方法与角色）→ 专家团（协作）。");
  }
};