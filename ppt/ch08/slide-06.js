// slide-06.js — 8.1.1 调度机制：循环 vs 单次（双卡片 + 运行前提）
const { C, sectionTitle, card, calloutBar, warnBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 6, title: "调度机制：循环与单次" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "调度机制：循环与单次");
    s.addText("WorkBuddy 内置强大的调度器支撑自动化运行，教材将定时规则归纳为两种调度模式：", {
      x: 0.6, y: 1.12, w: 8.8, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const items = [
      { t: "循环模式", d: "适用于需要长期重复执行的任务。系统按设定的执行频率触发，例如设定每天早上 9 点准时执行。", strip: C.primary },
      { t: "单次模式", d: "适用于只需在未来某一具体时间点执行一次的任务，执行一次后不再触发。", strip: C.secondary },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      card(s, x, 1.6, 4.3, 1.9, it.strip);
      s.addText(it.t, { x: x + 0.2, y: 1.74, w: 3.9, h: 0.5, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: 2.3, w: 3.9, h: 1.05, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.25 });
    });
    calloutBar(s, "定时规则官方口径“设置执行频率和生效日期区间”：超出生效日期区间后，任务将自动失效。", 3.75);
    warnBar(s, "运行前提：电脑开机、WorkBuddy 客户端运行、网络连接正常，且该任务未被手动禁用（运行前提详见第 7 章）。", 4.35);
    s.addText("官方文档《自动化》：https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Automation-Guide", {
      x: 0.6, y: 4.95, w: 8.8, h: 0.5,
      fontSize: 8.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};