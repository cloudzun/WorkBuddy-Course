// slide-16.js — 9.5.2 自驱协作与提效技巧（自驱四要素四卡片）
const { C, sectionTitle, card, calloutBar, bigCallout } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 16, title: "自驱协作与提效技巧" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "9.5.2 自驱协作与提效技巧", C.bgLight);
    s.addText("为了让 AI 能够高度自主地完成复杂串联，必须掌握自驱四要素：", {
      x: 0.6, y: 1.05, w: 8.8, h: 0.4, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const items = [
      { t: "说清目标", d: "明确当前步骤的终点", strip: C.primary },
      { t: "指定输出", d: "规定产物的格式与结构", strip: C.secondary },
      { t: "限定边界", d: "说明哪些不需要做、哪些工具不可用", strip: C.accent },
      { t: "自检后交付", d: "要求 AI 在输出前基于目标进行自我核查", strip: C.accentWarm },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + (i % 2) * 4.55;
      const y = 1.55 + Math.floor(i / 2) * 1.45;
      card(s, x, y, 4.3, 1.25, it.strip);
      s.addText(it.t, { x: x + 0.2, y: y + 0.12, w: 3.9, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.56, w: 3.9, h: 0.55, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0 });
    });
    bigCallout(s, "自驱四要素是第 2 章任务描述三要素在复杂串联场景中的场景化应用——“自检后交付”是复合任务特有的新增量维度。", 3.15, 0.85);
    calloutBar(s, "小步快跑：遵循“小步快跑”的原则，将大项目拆解为多个子任务迭代进行，提高产物的最终质量与可控性。", 4.35);
    calloutBar(s, "参考：综合演练阶段 0 用自驱四要素把总目标写成任务描述（见 labs/ch09-labs.md）。", 4.95);
  }
};