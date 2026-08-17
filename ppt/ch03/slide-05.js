// slide-05.js — 灵感的三件套（三卡片）
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 5, title: "灵感的三件套" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "一个灵感案例里的“三件套”");
    s.addText("一个完整的灵感案例由三部分自动组装而成，复刻时无需手工配置：", {
      x: 0.6, y: 1.1, w: 8.8, h: 0.4, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const items = [
      { t: "Prompt（提示词）", q: "怎么对话", d: "经过验证的高质量指令：角色设定、约束条件、结构化指令、少样本示例", strip: C.primary },
      { t: "Skill（技能）", q: "能做什么", d: "案例依赖的具体能力：网页抓取、代码运行、数据处理等", strip: C.secondary },
      { t: "专家配置", q: "谁来帮我", d: "特定领域的专家角色：提供专业视角与系统性方法论", strip: C.accent },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.02;
      card(s, x, 1.7, 2.85, 2.4, it.strip);
      s.addText(it.t, { x: x + 0.16, y: 1.85, w: 2.55, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.q, { x: x + 0.16, y: 2.38, w: 2.55, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", bold: true, color: it.strip === C.accentWarm ? C.accentWarm : C.secondary, margin: 0 });
      s.addText(it.d, { x: x + 0.16, y: 2.85, w: 2.55, h: 1.15, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.25 });
    });
    calloutBar(s, "复刻瞬间：Prompt 自动预填对话框，Skill 与专家配置在后台自动加载，开箱即用。", 4.4);
    function calloutBar(s, text, y) {
      s.addShape("rect", { x: 0.6, y, w: 8.8, h: 0.5, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y, w: 0.05, h: 0.5, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y, w: 8.3, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
