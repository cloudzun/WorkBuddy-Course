// slide-13.js — 9.4.2 轻量发布（步骤卡片 + 大结论 + 安全警示）
const { C, sectionTitle, numBadge, card, bigCallout, warnBar } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 13, title: "轻量发布" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "9.4.2 轻量发布", C.bgLight);
    s.addText("完成交互式数据看板或轻量内部工具后，可通过轻量发布功能将本地 HTML 一键发布为 workbuddy.link 在线链接。", {
      x: 0.6, y: 1.02, w: 8.8, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0
    });
    const steps = [
      { t: "制作 HTML", d: "完成交互式数据看板或轻量的内部工具" },
      { t: "一键发布", d: "本地 HTML 一键发布为 workbuddy.link 在线链接" },
      { t: "搭建轻应用", d: "配合 CSV 数据还可以搭建轻应用" },
      { t: "分享访问", d: "任何获得链接的人均可访问" },
    ];
    steps.forEach((it, i) => {
      const x = 0.6 + i * 2.26;
      card(s, x, 1.5, 2.1, 1.5, i === 1 ? C.accent : C.primary);
      numBadge(s, x + 0.14, 1.62, i + 1, i === 1 ? C.accent : C.primary);
      s.addText(it.t, { x: x + 0.72, y: 1.6, w: 1.3, h: 0.45, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: x + 0.16, y: 2.12, w: 1.8, h: 0.85, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
      if (i < 3) {
        s.addText("→", { x: x + 2.12, y: 1.95, w: 0.3, h: 0.4, fontSize: 20, fontFace: "Microsoft YaHei", bold: true, color: C.secondary, align: "center", margin: 0 });
      }
    });
    bigCallout(s, "打通从“想法”到“上线”的最后一公里，无需繁复的服务器配置。", 3.2, 0.7);
    warnBar(s, "⚠️ 安全提示：在进行外网轻量发布时，请确保数据文件已脱敏，不包含企业机密信息或敏感用户数据。", 4.15);
    s.addText("官方文档《轻量发布》：https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Library/Lightweight-Publish", {
      x: 0.6, y: 4.9, w: 8.8, h: 0.3, fontSize: 8.5, fontFace: "Microsoft YaHei",
      color: C.textMid, align: "right", margin: 0
    });
  }
};