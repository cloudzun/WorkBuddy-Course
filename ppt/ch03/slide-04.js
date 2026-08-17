// slide-04.js — 什么是灵感（大结论条 + 说明）
const { C, sectionTitle, bigCallout, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "callout", index: 4, title: "什么是灵感" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "什么是灵感", C.bgLight);
    bigCallout(s, "灵感 = 一个完整的灵感案例：经过验证的 Prompt + 关联的 Skill + 特定领域的专家配置", 1.5, 1.1);
    s.addText("面向“不知如何向 AI 提问”或“难以配置最佳工具组合”的用户，灵感大厅汇聚了社区精选成品集。", {
      x: 0.6, y: 2.85, w: 8.8, h: 0.5, fontSize: 13, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0
    });
    const items = [
      { t: "观察窗口", d: "看到已打磨好的真实作品案例，了解“好方案长什么样”" },
      { t: "一键复刻", d: "点击“制作我的版本”，Prompt / Skill / 专家配置全部自动就位" },
      { t: "省时省钱", d: "免去从零设计 Prompt 的时间与试错消耗的 Token 成本" },
    ];
    items.forEach((it, i) => {
      const y = 3.5 + i * 0.55;
      s.addShape("rect", { x: 0.6, y: y + 0.06, w: 0.22, h: 0.22, fill: { color: C.accent } });
      s.addText(it.t, { x: 1.0, y, w: 1.7, h: 0.35, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 2.8, y, w: 6.6, h: 0.35, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "一句话：灵感是“别人做好的成品”，你可以直接拿走，而不是从零开始。");
  }
};
