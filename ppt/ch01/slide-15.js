// slide-15.js — 1.3.4 专家 / 技能 / 专家团体系（三卡片）
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 15, title: "专家与专家团体系" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "专家中心：Skill / 专家 / 专家团", C.bgLight);
    const items = [
      { t: "Skill（技能）", d: "单一的、具体的操作能力\n例如“解析 Excel”“网页抓取”", strip: C.primary },
      { t: "专家（Agent）", d: "能力 + 经验：独立人设 + 方法论 + 工具链\n系统内置大量领域专家（数量以产品界面为准）", strip: C.secondary },
      { t: "专家团（Team）", d: "多位专家组成的协作流程\n团长 + 分工机制 + 协作网络，攻克大型项目", strip: C.accent },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.02;
      card(s, x, 1.5, 2.85, 2.3, it.strip);
      s.addText(it.t, { x: x + 0.16, y: 1.65, w: 2.55, h: 0.5, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.16, y: 2.2, w: 2.55, h: 1.4, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.35 });
    });
    callout(s, "一句话速记：想要能力找技能；想要建议找专家；想要团队攻坚找专家团（召唤流程详见第 4 章实操）。");
    function callout(s, text) {
      s.addShape("rect", { x: 0.6, y: 4.35, w: 8.8, h: 0.5, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: 4.35, w: 0.05, h: 0.5, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y: 4.35, w: 8.3, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
