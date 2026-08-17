// slide-11.js — 8.2.1 任务创建流程（步骤 + 入口说明）
const { C, sectionTitle, numBadge, calloutBar, mkSh } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 11, title: "任务创建流程" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "任务创建流程");
    const steps = [
      { t: "打开入口", d: "点击左侧边栏的“自动化”图标，进入自动化任务管理中心" },
      { t: "查看列表", d: "页面上方展示“已安排任务”和“已完成任务”的列表" },
      { t: "新建任务", d: "点击右上角的“添加”按钮，即可新建任务" },
    ];
    steps.forEach((it, i) => {
      const y = 1.3 + i * 0.7;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(it.t, { x: 1.35, y, w: 2.4, h: 0.55, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 3.9, y, w: 5.5, h: 0.55, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    s.addShape("rect", { x: 0.6, y: 3.5, w: 8.8, h: 0.95, fill: { color: C.bgCard }, shadow: mkSh() });
    s.addShape("rect", { x: 0.6, y: 3.5, w: 0.07, h: 0.95, fill: { color: C.accent } });
    s.addText("产品界面", { x: 0.95, y: 3.6, w: 1.6, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
    s.addText("创建和管理自动化任务的操作非常直观：WorkBuddy 主界面中，所有自动化功能都集中在专用的管理模块内。", {
      x: 0.95, y: 4.0, w: 8.2, h: 0.4, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0
    });
    calloutBar(s, "入口统一、列表清晰、操作直观——三步即可新建一个自动化任务。", 4.6);
    s.addText("官方文档《自动化》：https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Automation-Guide", {
      x: 0.6, y: 5.2, w: 8.8, h: 0.4,
      fontSize: 8.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};