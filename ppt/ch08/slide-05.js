// slide-05.js — 8.1.1 典型应用场景（四卡片）
const { C, sectionTitle, card, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 5, title: "典型应用场景" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "自动化任务的典型应用场景");
    const items = [
      { t: "每日晨间资讯简报", d: "定时自动搜集并汇总当日资讯", strip: C.primary },
      { t: "AI 行业新闻汇总", d: "每天上午 9 点自动汇总 AI 行业新闻", strip: C.secondary },
      { t: "本周工作汇总", d: "周末自动生成本周工作汇总", strip: C.accent },
      { t: "业务数据与个人提醒", d: "定期整理业务数据，或触发体检、学习计划提醒", strip: C.accentWarm },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + (i % 2) * 4.55;
      const y = 1.55 + Math.floor(i / 2) * 1.75;
      card(s, x, y, 4.3, 1.55, it.strip);
      s.addText(it.t, { x: x + 0.2, y: y + 0.14, w: 3.9, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.64, w: 3.9, h: 0.8, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.25 });
    });
    calloutBar(s, "场景共性：时间规律、重复执行、输出格式相对固定——这正是自动化最擅长的任务类型。", 5.0);
  }
};