// slide-06.js — 2.1.3 消除歧义（列表 + 代码示例）
const { C, sectionTitle, numBadge } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 6, title: "提供上下文与消除歧义" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "提供上下文与消除歧义", C.bgLight);
    const items = [
      { t: "角色指代", d: "把模糊人称替换为具体角色或姓名" },
      { t: "时间要求", d: "把“昨天 / 最近”替换为具体日期或时间范围" },
      { t: "数量指标", d: "把“一些 / 几个”替换为明确数字" },
      { t: "质量标准", d: "把“高大上 / 专业”转化为可验证的排版或语言规则" },
    ];
    items.forEach((it, i) => {
      const y = 1.3 + i * 0.6;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(it.t, { x: 1.35, y, w: 2.2, h: 0.5, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 3.65, y, w: 5.7, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    callout(s, "宏大多层级任务：拆解为有序独立步骤，配合 Plan 模式逐步攻克。");
    function callout(s, text) {
      s.addShape("rect", { x: 0.6, y: 4.35, w: 8.8, h: 0.45, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: 4.35, w: 0.05, h: 0.45, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y: 4.35, w: 8.3, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
