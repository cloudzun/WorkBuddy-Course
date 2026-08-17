// slide-22.js — 本章小结（深色结论 + 知识地图）试点特效版：装饰圆环 + 编号水印 + 圆点要点
const { C, sectionTitle, bigCallout } = require("./common");
module.exports = {
  slideConfig: { type: "summary", index: 22, title: "本章小结" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "本章小结", C.bgLight);
    // 装饰层：右上圆环 + 编号水印
    s.addShape("ellipse", { x: 7.7, y: -1.4, w: 3.8, h: 3.8, fill: { color: "FFFFFF", transparency: 80 }, line: { color: C.primary, width: 1.2, transparency: 55 } });
    s.addShape("ellipse", { x: 8.35, y: -0.75, w: 2.5, h: 2.5, fill: { color: C.primary, transparency: 88 }, line: { color: C.border, width: 1, transparency: 60 } });
    s.addText("03", {
      x: 8.0, y: 0.7, w: 2.0, h: 1.2,
      fontSize: 66, fontFace: "Arial", bold: true,
      color: C.primary, transparency: 78, align: "center", valign: "middle", margin: 0
    });
    s.addShape("ellipse", { x: -1.0, y: 4.4, w: 2.4, h: 2.4, fill: { color: C.accent, transparency: 88 }, line: { color: C.border, width: 1, transparency: 65 } });
    const points = [
      "灵感 = 完整案例（Prompt + Skill + 专家配置），点击“做同款 / 制作我的版本”即可一键复刻",
      "开箱即用：灵感固化“提示词组装”环节的最优配方，模型沿最优路径运行，省时省 Token",
      "四步操作闭环：探索（更多 → 灵感，七大场景）→ 预览评估（红心收藏）→ 复刻微调 → 产物交付",
      "核心差异：技能＝能做什么，专家＝谁能帮我做，灵感＝做出来是怎样的；口诀：能力找技能、建议找专家、成品找灵感",
      "本章通过“做同款”已接触技能、专家、连接器、模型等核心概念，为后续章节打下锚点",
    ];
    points.forEach((p, i) => {
      const y = 1.32 + i * 0.66;
      s.addShape("ellipse", { x: 0.62, y: y + 0.13, w: 0.28, h: 0.28, fill: { color: i === 4 ? C.accentWarm : C.primary } });
      s.addShape("ellipse", { x: 0.62, y: y + 0.13, w: 0.28, h: 0.28, fill: { color: "FFFFFF", transparency: 55 } });
      s.addText(String(i + 1), { x: 0.62, y: y + 0.1, w: 0.28, h: 0.3, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, align: "center", valign: "middle", margin: 0 });
      s.addText(p, { x: 1.1, y, w: 8.0, h: 0.55, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.15 });
    });
    bigCallout(s, "下一章：第 4 章 技能、专家与专家团——逐一拆解灵感背后的能力组件。", 4.7);
  }
};