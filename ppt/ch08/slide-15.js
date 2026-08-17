// slide-15.js — 8.2.3 典型场景模板应用（四卡片）
const { C, sectionTitle, card, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 15, title: "典型场景模板应用" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "典型场景模板应用");
    s.addText("为降低配置门槛，WorkBuddy 提供一系列常见场景的任务模板，用户可直接引用并微调：", {
      x: 0.6, y: 1.1, w: 8.8, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const items = [
      { t: "工作类", d: "每日行业新闻自动推送；每周五下班前的本周工作周报汇总", strip: C.primary },
      { t: "学习类", d: "每日生成特定领域的“为什么”科普知识；每天定时推送 10 个英语生词及例句", strip: C.secondary },
      { t: "生活类", d: "每周末提醒联系父母并生成问候语参考；每晚 9 点生成睡前故事；定期体检预约提醒", strip: C.accent },
      { t: "娱乐类", d: "根据个人喜好每周推荐高分电影；每日自动生成并更换桌面壁纸", strip: C.accentWarm },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + (i % 2) * 4.55;
      const y = 1.6 + Math.floor(i / 2) * 1.7;
      card(s, x, y, 4.3, 1.5, it.strip);
      s.addText(it.t, { x: x + 0.2, y: y + 0.12, w: 3.9, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.6, w: 3.9, h: 0.8, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
    });
    calloutBar(s, "不想从零编写提示词时，可直接使用任务模板，选择后按需修改即可。", 5.0);
  }
};