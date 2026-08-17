// slide-02.js — 学习目标
const { C, sectionTitle, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "objectives", index: 2, title: "学习目标" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "学习目标", C.bgLight);
    const goals = [
      "阐述自动化任务的核心机制与适用场景",
      "区分自动化与手动执行的边界，并在实际业务中运用混合模式",
      "掌握在 WorkBuddy 中创建与管理自动化任务的核心配置项",
      "运用提示词最佳实践，设计高效、准确的自动化任务",
      "识别并规避自动化执行过程中的安全与权限风险",
    ];
    goals.forEach((g, i) => {
      const y = 1.28 + i * 0.7;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(g, {
        x: 1.35, y, w: 8.0, h: 0.55,
        fontSize: 14, fontFace: "Microsoft YaHei",
        color: C.textDark, valign: "middle", margin: 0
      });
    });
    calloutBar(s, "自动化把“人完全不在场”时的工作交给后台——学完本章，你将掌握配置、调度、提示词与安全边界。");
  }
};