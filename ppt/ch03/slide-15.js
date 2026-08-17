// slide-15.js — 查看与管理产物（卡片）
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 15, title: "查看与管理产物" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "查看与管理产物", C.bgLight);
    const items = [
      { t: "产物页查看", d: "生成内容展示在界面右侧的产物页面中", strip: C.primary },
      { t: "内置浏览器预览", d: "网页、文档等特殊格式产物，可直接即时预览", strip: C.secondary },
      { t: "下载到本地", d: "支持下载产物继续编辑，便于二次加工", strip: C.accent },
      { t: "保存到工作空间", d: "一键存入工作空间，与团队共享、持续管理", strip: C.accentWarm },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + (i % 2) * 4.55;
      const y = 1.4 + Math.floor(i / 2) * 1.75;
      card(s, x, y, 4.3, 1.55, it.strip);
      s.addText(it.t, { x: x + 0.2, y: y + 0.12, w: 3.9, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.62, w: 3.9, h: 0.8, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.25 });
    });
    calloutBar(s, "完整闭环：探索 → 预览 → 收藏 → 复刻 → 微调 → 交付，灵感模块一次跑通。");
    function calloutBar(s, text, y) {
      const by = y || 4.95;
      s.addShape("rect", { x: 0.6, y: by, w: 8.8, h: 0.4, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: by, w: 0.05, h: 0.4, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y: by, w: 8.3, h: 0.4, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
