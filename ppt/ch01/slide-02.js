// slide-02.js — 学习目标
const { C, sectionTitle, numBadge } = require("./common");
module.exports = {
  slideConfig: { type: "objectives", index: 2, title: "学习目标" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "学习目标", C.bgLight);
    const goals = [
      "准确阐述 WorkBuddy 的核心能力以及与传统 AI 对话工具的差异",
      "独立完成桌面端安装、环境配置与首次登录验证",
      "熟练掌握主界面三大区域与新建任务栏的各项功能分区",
      "根据任务场景合理选择 Ask / Plan / Craft 三种工作模式",
      "了解专家中心、系统设置、模型配置、数据管理与记忆管理概览",
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
    callout(s, "学完本章，你将对 WorkBuddy 建立完整的产品全局认知，可直接进入第 2 章任务实操。");
    function callout(s, text) {
      s.addShape("rect", { x: 0.6, y: 4.85, w: 8.8, h: 0.45, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: 4.85, w: 0.05, h: 0.45, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y: 4.85, w: 8.3, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
