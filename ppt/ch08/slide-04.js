// slide-04.js — 8.1.1 核心概念（三卡片 + 官方口径 + 文档链接）
const { C, sectionTitle, card, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 4, title: "自动化任务：核心概念" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "自动化任务：核心概念");
    s.addText("自动化任务专为周期性、重复性工作设计。配置完成后，WorkBuddy 严格按照设定的时间表自动执行特定任务，并将生成的产物保存至指定目录。", {
      x: 0.6, y: 1.12, w: 8.8, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const items = [
      { t: "按时间表自动执行", d: "严格按照设定的时间表触发任务，无需人工干预", strip: C.primary },
      { t: "产物保存至指定目录", d: "执行结果自动生成并保存到配置的指定目录", strip: C.secondary },
      { t: "内置调度器支撑", d: "定时规则官方口径——“设置执行频率和生效日期区间”", strip: C.accent },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.02;
      card(s, x, 1.6, 2.85, 2.2, it.strip);
      s.addText(it.t, { x: x + 0.18, y: 1.72, w: 2.5, h: 0.5, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.18, y: 2.3, w: 2.5, h: 1.35, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.25 });
    });
    calloutBar(s, "文中“定时规则”等产品文案均以官方文档为口径；具体界面细节以产品实际展示为准。", 4.0);
    s.addText("官方文档《自动化》：https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Automation-Guide", {
      x: 0.6, y: 4.75, w: 8.8, h: 0.6,
      fontSize: 8.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};