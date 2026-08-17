// slide-09.js — 1.2.1 系统要求（两卡片）
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 9, title: "系统要求" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "系统要求", C.bgLight);
    const items = [
      { t: "Windows", d: "Windows 10 及以上版本\n不支持 Windows 7 / 8 / 8.1", strip: C.primary },
      { t: "macOS", d: "macOS 12 (Monterey) 及以上版本", strip: C.secondary },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      card(s, x, 1.6, 4.3, 2.0, it.strip);
      s.addText(it.t, { x: x + 0.2, y: 1.75, w: 3.9, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: 2.35, w: 3.9, h: 1.1, fontSize: 14, fontFace: "Microsoft YaHei", color: C.textDark, lineSpacingMultiple: 1.4, margin: 0, valign: "top" });
    });
    callout(s, "以当前最新版本为准：产品界面与功能迭代较快，系统要求请以官方安装指南为准。");
    function callout(s, text) {
      s.addShape("rect", { x: 0.6, y: 4.5, w: 8.8, h: 0.45, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: 4.5, w: 0.05, h: 0.45, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y: 4.5, w: 8.3, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
