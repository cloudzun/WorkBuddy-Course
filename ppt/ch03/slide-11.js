// slide-11.js — 预览与评估（版式示意）
const { C, sectionTitle, card, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 11, title: "预览与评估" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "预览与评估案例", C.bgLight);
    // 左侧预览示意
    s.addShape("rect", { x: 0.6, y: 1.4, w: 4.6, h: 3.0, fill: { color: C.bgWhite }, shadow: mkSh() });
    s.addShape("rect", { x: 0.6, y: 1.4, w: 4.6, h: 0.5, fill: { color: C.primary } });
    s.addText("运行预览效果", { x: 0.75, y: 1.4, w: 4.3, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, valign: "middle", margin: 0 });
    s.addText("直观看到“它能做出什么”\n—— 网页 / 文档 / 表格等\n实际产物效果示意", {
      x: 0.8, y: 2.1, w: 4.2, h: 1.6, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textMid, valign: "top", margin: 0, lineSpacingMultiple: 1.4
    });
    // 右侧信息示意
    s.addShape("rect", { x: 5.45, y: 1.4, w: 3.95, h: 3.0, fill: { color: C.bgWhite }, shadow: mkSh() });
    s.addShape("rect", { x: 5.45, y: 1.4, w: 0.06, h: 3.0, fill: { color: C.accent } });
    s.addText("标签分类", { x: 5.7, y: 1.55, w: 3.5, h: 0.35, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
    s.addText("场景 / 用途 / 行业 等标签", { x: 5.7, y: 1.92, w: 3.5, h: 0.3, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0 });
    s.addText("背景介绍", { x: 5.7, y: 2.4, w: 3.5, h: 0.35, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
    s.addText("该案例的详细背景、适用对象\n与使用说明", { x: 5.7, y: 2.77, w: 3.5, h: 0.6, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.3 });
    // 收藏提示
    s.addShape("rect", { x: 5.7, y: 3.6, w: 3.4, h: 0.55, fill: { color: C.bgAccent } });
    s.addText("❤ 红心收藏：暂不需要时先收藏，方便日后随时取用", {
      x: 5.85, y: 3.6, w: 3.2, h: 0.55, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0
    });
    calloutBar(s, "先“看效果”再决定：预览让你在复刻前就确认“这是不是我想要的”。", 4.7);
    function mkSh() {
      return { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 };
    }
  }
};
