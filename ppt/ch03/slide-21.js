// slide-21.js — 实验引导（三卡片）
const { C, sectionTitle, card, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 21, title: "实验引导" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "第 3 章配套实验（labs/ch03-labs.md）", C.bgLight);
    const labs = [
      { n: "3.1", t: "灵感大厅探索", d: "入口（更多→灵感）、场景分类浏览、案例详情与红心收藏", tag: "★ 必做", pre: "完成 1.1" },
      { n: "3.2", t: "“做同款”一键复刻", d: "Prompt 自动预填、Skill 与专家配置自动加载、微调生成与产物查看", tag: "★ 必做", pre: "完成 3.1" },
      { n: "3.3", t: "灵感 vs 从零创建对比", d: "复刻与自写任务的配置时间、追问次数与产物质量对比", tag: "★ 必做", pre: "完成 2.1、3.2" },
    ];
    labs.forEach((it, i) => {
      const x = 0.6 + i * 3.02;
      card(s, x, 1.5, 2.85, 2.6, C.primary);
      numBadge(s, x + 0.16, 1.62, it.n, C.primary);
      s.addText(it.t, { x: x + 0.75, y: 1.6, w: 2.0, h: 0.5, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      s.addText(it.d, { x: x + 0.16, y: 2.2, w: 2.55, h: 1.2, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textMid, valign: "top", margin: 0, lineSpacingMultiple: 1.25 });
      s.addText(it.tag, { x: x + 0.16, y: 3.55, w: 2.55, h: 0.3, fontSize: 10, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText("前置：" + it.pre, { x: x + 0.16, y: 3.85, w: 2.55, h: 0.25, fontSize: 9.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0 });
    });
    calloutBar(s, "实验顺序：3.1 → 3.2 → 3.3；3.2 依赖 3.1，3.3 依赖 3.2 与实验 2.1。", 4.45);
    calloutBar(s, "实验 3.3 是重点对比实验：用同一任务分别走“做同款”与“从零自写”，量化差距。", 5.0);
  }
};
