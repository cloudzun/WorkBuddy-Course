// slide-17.js — 核心差异速记（三卡片）
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 17, title: "核心差异速记" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "核心差异速记", C.bgLight);
    const items = [
      { t: "技能 Skill", q: "能做什么", d: "工具属性，提供底层能力：\n网页抓取、代码运行、翻译、格式转换等", strip: C.primary },
      { t: "专家", q: "谁能帮我做", d: "角色属性，能力 + 经验：\n专业视角与系统性方法论，如架构师规划系统", strip: C.secondary },
      { t: "灵感", q: "做出来是怎样的", d: "成品属性，完整解决方案：\n有目标但不知从哪开始时的现成方案", strip: C.accent },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.02;
      card(s, x, 1.5, 2.85, 2.55, it.strip);
      s.addText(it.t, { x: x + 0.16, y: 1.65, w: 2.55, h: 0.5, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.q, { x: x + 0.16, y: 2.18, w: 2.55, h: 0.4, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: it.strip === C.accent ? C.accent : C.secondary, margin: 0 });
      s.addText(it.d, { x: x + 0.16, y: 2.62, w: 2.55, h: 1.3, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.3 });
    });
    calloutBar(s, "定位差异：技能回答“能做什么”，专家回答“谁能帮我做”，灵感回答“做出来是怎样的”。", 4.35);
    calloutBar(s, "本章先以“成品”视角理解三者关系，第 4 章将逐一拆解完整机制。", 4.95);
    function calloutBar(s, text, y) {
      s.addShape("rect", { x: 0.6, y, w: 8.8, h: 0.45, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y, w: 0.05, h: 0.45, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y, w: 8.3, h: 0.45, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
