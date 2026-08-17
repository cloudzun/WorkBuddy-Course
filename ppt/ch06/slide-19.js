// slide-19.js — 消耗差异的三条规律（三卡片）
const { C, sectionTitle, card, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 19, title: "消耗差异的三条规律" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "消耗差异的三条规律");
    const items = [
      { t: "模式差异", d: "深度思考模式（Thinking）的积分消耗显著高于标准推理模式——用更长的推理换取更高质量的答案", strip: C.primary },
      { t: "实体差异", d: "专家团涉及多个模型协同运作，消耗通常明显高于单专家，单专家又高于纯技能调用", strip: C.accent },
      { t: "上下文差异", d: "长文档挂载、多轮追问、多模态输入都会增加 Token 用量，进而推高消耗", strip: C.accentWarm },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.02;
      card(s, x, 1.55, 2.85, 2.75, it.strip);
      numBadge(s, x + 0.16, 1.67, i + 1, it.strip);
      s.addText(it.t, { x: x + 0.75, y: 1.65, w: 2.0, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      s.addText(it.d, { x: x + 0.16, y: 2.3, w: 2.55, h: 1.85, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textMid, valign: "top", margin: 0, lineSpacingMultiple: 1.3 });
    });
    calloutBar(s, "具体消耗以实际任务与官方《积分》说明为准：https://www.workbuddy.cn/docs/workbuddy/Credits", 4.6);
  }
};