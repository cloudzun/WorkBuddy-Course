// slide-18.js — 2.4.2 交付五步检（步骤）
const { C, sectionTitle, numBadge } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 18, title: "交付五步检" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "产物交付前的“五步检”");
    const steps = [
      { t: "完整性检查", d: "信息是否截断？要求的字段是否都有体现？" },
      { t: "符合预期", d: "格式、语气、深浅程度是否与三要素约定相符？" },
      { t: "敏感信息排查", d: "是否包含需脱敏的 IP、姓名或商业机密？" },
      { t: "分享方式选择", d: "按接收者习惯选择源文件、PDF 或云文档链接" },
      { t: "一句话说明", d: "附上背景与核心结论，降低接收者阅读门槛" },
    ];
    steps.forEach((it, i) => {
      const y = 1.25 + i * 0.68;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(it.t, { x: 1.35, y, w: 2.6, h: 0.55, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 4.1, y, w: 5.2, h: 0.55, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    callout(s, "口诀：完整 → 达标 → 脱敏 → 选路 → 一句话。");
    function callout(s, text) {
      s.addShape("rect", { x: 0.6, y: 4.85, w: 8.8, h: 0.4, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: 4.85, w: 0.05, h: 0.4, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y: 4.85, w: 8.3, h: 0.4, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
