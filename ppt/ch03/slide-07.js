// slide-07.js — 高质量提示词四要素（四卡片）
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 7, title: "高质量提示词四要素" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "高质量提示词的四要素");
    s.addText("灵感模板之所以高效，是因为内部包含了一条结构完整的高质量指令：", {
      x: 0.6, y: 1.1, w: 8.8, h: 0.4, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const items = [
      { t: "角色设定", d: "让模型以特定身份/视角作答，如“资深数据分析师”", strip: C.primary },
      { t: "约束条件", d: "限定范围、风格、字数、格式等边界，防止跑偏", strip: C.secondary },
      { t: "结构化指令", d: "按“背景 → 任务 → 格式 → 约束”的逻辑组织要求", strip: C.accent },
      { t: "少样本示例", d: "给出 1-2 个范例，让模型“照着样子做”", strip: C.accentWarm },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + (i % 2) * 4.55;
      const y = 1.65 + Math.floor(i / 2) * 1.75;
      card(s, x, y, 4.3, 1.55, it.strip);
      s.addText(it.t, { x: x + 0.2, y: y + 0.12, w: 3.9, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.62, w: 3.9, h: 0.8, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.25 });
    });
    calloutBar(s, "任务描述的完整方法论见第 2 章——三要素公式（做什么 + 有什么 + 怎么样）。");
    function calloutBar(s, text, y) {
      const by = y || 4.75;
      s.addShape("rect", { x: 0.6, y: by, w: 8.8, h: 0.5, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: by, w: 0.05, h: 0.5, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y: by, w: 8.3, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
