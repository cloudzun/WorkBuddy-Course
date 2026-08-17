// slide-02.js — 学习目标
const { C, sectionTitle, numBadge } = require("./common");
module.exports = {
  slideConfig: { type: "objectives", index: 2, title: "学习目标" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "学习目标", C.bgLight);
    const goals = [
      "掌握“三要素公式”与任务描述黄金法则，写出高质量任务描述",
      "熟练运用四种上下文挂载方式（@引用 / 截图 / 上传 / 补充说明）",
      "掌握任务对话的追问、修正与打断技巧，判断追问 vs 新建任务",
      "熟练使用结果区四类内容检视产物，完成分享与交付检验",
      "理解工作空间与任务的容器关系，掌握归档 vs 删除",
    ];
    goals.forEach((g, i) => {
      const y = 1.3 + i * 0.72;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(g, {
        x: 1.35, y, w: 8.0, h: 0.55,
        fontSize: 14, fontFace: "Microsoft YaHei",
        color: C.textDark, valign: "middle", margin: 0
      });
    });
    callout(s, "学完本章，你将具备指挥 WorkBuddy 完成单点复杂任务的能力。");
    function callout(s, text) {
      s.addShape("rect", { x: 0.6, y: 4.85, w: 8.8, h: 0.45, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: 4.85, w: 0.05, h: 0.45, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y: 4.85, w: 8.3, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
