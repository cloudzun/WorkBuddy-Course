// slide-06.js — 7.1.2 典型应用场景（四卡片）
const { C, sectionTitle, card, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 6, title: "四大典型应用场景" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "典型应用场景");
    s.addText("助理机制广泛赋能移动办公——四大典型应用场景：", {
      x: 0.6, y: 1.05, w: 8.8, h: 0.3,
      fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const scenes = [
      { t: "通勤途中任务前置", d: "地铁上通过微信描述当日数据分析脚本需求，到公司后脚本已生成完毕，直接投入使用", strip: C.primary },
      { t: "客户现场即时响应", d: "会议室演示时需要一份不在U盘里的特定报告，手机指令让工位电脑自动检索并生成汇总材料发到手机", strip: C.secondary },
      { t: "非工作时间异步调度", d: "周末想起非紧急但耗时的抓取任务，无需专程打开电脑，让办公室待机的电脑彻夜执行", strip: C.accent },
      { t: "异地办公远程管控", d: "出差在外定期检查本地电脑的运行日志或服务器监控状态，并获取异常警报摘要", strip: C.accentWarm },
    ];
    scenes.forEach((it, i) => {
      const x = 0.6 + (i % 2) * 4.55;
      const y = 1.5 + Math.floor(i / 2) * 1.75;
      card(s, x, y, 4.35, 1.55, it.strip);
      s.addText(it.t, { x: x + 0.2, y: y + 0.12, w: 3.95, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.6, w: 3.95, h: 0.85, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
    });
    calloutBar(s, "四个场景的共通点：移动端发令、电脑端执行——人不在电脑前，但任务必须由电脑环境完成。", 4.85);
  }
};