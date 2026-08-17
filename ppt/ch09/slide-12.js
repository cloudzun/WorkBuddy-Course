// slide-12.js — 9.4.1 深度研究方法论（三卡片 + 提示条 + 大结论）
const { C, sectionTitle, card, calloutBar, bigCallout } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 12, title: "深度研究方法论" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "9.4.1 深度研究方法论");
    s.addText("对于需要深入调研的任务，系统能够对复杂问题进行深度调研并输出报告。", {
      x: 0.6, y: 1.05, w: 8.8, h: 0.4, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const items = [
      { t: "明确研究目标", d: "任务编排的第一步：明确且一次性说清研究目标", strip: C.primary },
      { t: "多源信息整合", d: "联网多渠道搜索与本地文件交叉验证", strip: C.accent },
      { t: "结构化报告输出", d: "含核心结论、数据图表、引用来源与行动建议（具体呈现以产品实际为准）", strip: C.secondary },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      card(s, x, 1.5, 2.85, 1.65, it.strip);
      s.addText(it.t, { x: x + 0.2, y: 1.62, w: 2.45, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: 2.1, w: 2.45, h: 0.95, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
    });
    calloutBar(s, "定时任务：你还可以设置定时任务，让 AI 每日生成特定领域的资讯简报（定时任务在第 8 章展开实操）。", 3.45);
    bigCallout(s, "对复杂问题进行深度调研并输出报告——结构化报告含核心结论、数据图表、引用来源与行动建议。", 4.1, 0.8);
    s.addText("官方文档《WorkBuddy 简介》：https://www.workbuddy.cn/docs/workbuddy/Overview", {
      x: 0.6, y: 5.1, w: 8.8, h: 0.3, fontSize: 8.5, fontFace: "Microsoft YaHei",
      color: C.textMid, align: "right", margin: 0
    });
  }
};