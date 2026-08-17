// slide-09.js — 8.1.3 安全与权限边界（深色强调页 · 三条底线）
const { C, numBadge, topAccentBar, bottomAccentBar } = require("./common");
module.exports = {
  slideConfig: { type: "callout", index: 9, title: "安全与权限边界" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.darkBg };
    topAccentBar(s);
    bottomAccentBar(s);
    s.addText("安全与权限边界", {
      x: 0.6, y: 0.7, w: 8.8, h: 0.6,
      fontSize: 22, fontFace: "Microsoft YaHei", bold: true, color: "B8E8DC", margin: 0
    });
    s.addShape("rect", { x: 0.6, y: 1.3, w: 1.0, h: 0.035, fill: { color: C.accent } });
    s.addText("自动化任务在后台静默运行，安全与权限控制尤为重要——必须建立强烈的权限校验意识。", {
      x: 0.6, y: 1.5, w: 8.8, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei", color: "DDF2EC", margin: 0
    });
    const rows = [
      { t: "防范敏感数据外发", d: "仔细检查任务所涉及的工作空间内容，避免将公司机密或个人隐私数据配置到会向外部发送的任务中" },
      { t: "核心操作人工介入", d: "对于涉及对外发送邮件、发布公开文章等具有影响力的任务，建议在自动化流程中保留人工确认环节" },
      { t: "警惕不可逆操作", d: "避免配置删除文件、覆写重要配置等不可逆的危险操作，以免发生意外的数据丢失" },
    ];
    rows.forEach((it, i) => {
      const y = 2.15 + i * 1.05;
      s.addShape("rect", { x: 0.9, y, w: 8.2, h: 0.9, fill: { color: C.primary } });
      numBadge(s, 1.05, y + 0.22, i + 1, C.accent);
      s.addText(it.t, { x: 1.7, y: y + 0.08, w: 7.2, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 1.7, y: y + 0.46, w: 7.2, h: 0.4, fontSize: 10.5, fontFace: "Microsoft YaHei", color: "EAF8F4", valign: "middle", margin: 0 });
    });
    s.addText("三条底线 = 自动化任务上线前的“安全体检清单”", {
      x: 0.6, y: 5.25, w: 8.8, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei", italic: true, color: "C8E8E0", margin: 0
    });
  }
};