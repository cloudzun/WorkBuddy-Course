// slide-16.js — 8.2.4 移动端推送配置（步骤 + 前置提醒）
const { C, sectionTitle, numBadge, warnBar, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 16, title: "移动端推送配置" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "移动端推送配置", C.bgLight);
    s.addText("除了在本地生成产物，WorkBuddy 还支持将自动化任务的执行结果推送到移动端，让您随时随地掌握信息。", {
      x: 0.6, y: 1.1, w: 8.8, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const steps = [
      { t: "开启开关", d: "在自动化任务配置页的底部，勾选“推送到 WorkBuddy 微信小程序”开关" },
      { t: "云端同步", d: "WorkBuddy 通过加密通道将执行结果同步至云端" },
      { t: "小程序分发", d: "执行结果随后分发至您绑定的微信小程序中" },
    ];
    steps.forEach((it, i) => {
      const y = 1.6 + i * 0.68;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(it.t, { x: 1.35, y, w: 2.4, h: 0.55, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 3.9, y, w: 5.5, h: 0.55, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    warnBar(s, "注意：使用该功能前，必须先完成微信小程序绑定——在客户端账号设置中完成绑定流程（绑定方法见第 7 章）。", 3.85);
    calloutBar(s, "开启后无需守在电脑前：加密通道同步云端 → 绑定小程序即可收到执行结果，移动端随时掌握。", 4.45);
  }
};