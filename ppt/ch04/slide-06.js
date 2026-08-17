// slide-06.js — 4.1.3 技能的安全沙箱机制
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 6, title: "技能的安全沙箱机制" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "技能的安全沙箱机制", C.bgLight);
    const items = [
      { t: "隔离工作目录", d: "系统为技能执行分配隔离的工作目录，防止技能随意读取或修改用户系统的敏感文件。", strip: C.primary },
      { t: "按需授权", d: "技能权限“按需授予”，仅开放其完成任务所必需的接口。", strip: C.secondary },
      { t: "人工确认", d: "涉及删除文件或调用外部高危接口等危险操作时，系统会弹出确认框，要求用户手动授权，过程完全由用户可控。", strip: C.accent },
      { t: "谨慎来源", d: "建议优先使用官方推荐技能——非官方技能可能存在恶意提示词注入、越权访问、后门程序等隐患。", strip: C.accentWarm },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + (i % 2) * 4.55;
      const y = 1.35 + Math.floor(i / 2) * 1.6;
      card(s, x, y, 4.3, 1.45, it.strip);
      s.addText(it.t, { x: x + 0.2, y: y + 0.12, w: 3.9, h: 0.4, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.55, w: 3.9, h: 0.82, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
    });
    // 安全提示（两行警示条，手工绘制以容纳长文本）
    s.addShape("rect", { x: 0.6, y: 4.62, w: 8.8, h: 0.72, fill: { color: C.bgAccent } });
    s.addShape("rect", { x: 0.6, y: 4.62, w: 0.05, h: 0.72, fill: { color: C.accentWarm } });
    s.addText("安全提示：面对系统弹出的危险操作确认框，请务必仔细阅读该操作即将执行的内容和涉及的路径，切勿盲目点击同意；对非信任的外部插件，建议保持默认的最小权限原则。", {
      x: 0.85, y: 4.62, w: 8.3, h: 0.72,
      fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.2
    });
    s.addText("官方文档《技能》：https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Skills-Market", {
      x: 0.6, y: 5.42, w: 8.8, h: 0.2,
      fontSize: 8, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};