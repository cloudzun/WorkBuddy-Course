// slide-07.js — 1.1.4 典型用户与适用场景（卡片）
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 7, title: "典型用户与适用场景" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "典型用户与适用场景", C.bgLight);
    s.addText("典型用户画像（设计理念：零编程基础也能用 · 安全、简单、随时随地在场）", {
      x: 0.6, y: 1.1, w: 8.8, h: 0.4, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.secondary, margin: 0
    });
    const users = ["移动办公者", "创意产出者", "数据分析者", "OPC 创业者"];
    users.forEach((u, i) => {
      const x = 0.6 + i * 2.26;
      card(s, x, 1.55, 2.1, 1.0, C.primary);
      s.addText(u, { x: x + 0.15, y: 1.55, w: 1.8, h: 1.0, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", valign: "middle", margin: 0 });
    });
    s.addText("三大适用场景（官方文档《快速开始》）", {
      x: 0.6, y: 2.85, w: 8.8, h: 0.4, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.secondary, margin: 0
    });
    const scenes = [
      { t: "日常办公", d: "文档生成、数据分析、PPT/报告、深度研究、邮件周报、批量文件处理", strip: C.primary },
      { t: "代码开发", d: "代码编写与重构、脚本生成、技术方案设计", strip: C.secondary },
      { t: "设计创意", d: "设计稿、海报、演示文稿视觉、创意内容产出", strip: C.accent },
    ];
    scenes.forEach((it, i) => {
      const x = 0.6 + i * 3.0;
      card(s, x, 3.3, 2.85, 1.45, it.strip);
      s.addText(it.t, { x: x + 0.18, y: 3.42, w: 2.5, h: 0.4, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.18, y: 3.86, w: 2.5, h: 0.8, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, lineSpacingMultiple: 1.2, margin: 0, valign: "top" });
    });
    callout(s, "无论你在哪：微信/企业微信/飞书/QQ 等移动端都能远程派发任务（远程操控 Claw/助理）。");
    function callout(s, text) {
      s.addShape("rect", { x: 0.6, y: 4.95, w: 8.8, h: 0.45, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: 4.95, w: 0.05, h: 0.45, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y: 4.95, w: 8.3, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
