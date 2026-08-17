// slide-08.js — 2.2 四种上下文挂载方式（2×2 卡片）
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 8, title: "四种上下文挂载方式" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "四种上下文挂载方式（官方文档《创建任务》）");
    const items = [
      { t: "@ 引用上下文", d: "输入 @ 引用文件、文档、规则等信息，关联到任务", strip: C.primary },
      { t: "粘贴截图", d: "Ctrl/Cmd + V 直接粘贴剪贴板图片，提供界面/图文信息", strip: C.secondary },
      { t: "上传文件", d: "点击上传按钮或拖拽本地文件（PDF、Excel 等）", strip: C.accent },
      { t: "补充说明", d: "明确目标、输入、输出格式、约束条件等关键信息", strip: C.accentWarm },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + (i % 2) * 4.55;
      const y = 1.35 + Math.floor(i / 2) * 1.7;
      card(s, x, y, 4.3, 1.5, it.strip);
      s.addText(it.t, { x: x + 0.2, y: y + 0.12, w: 3.9, h: 0.45, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.62, w: 3.9, h: 0.8, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.25 });
    });
    callout(s, "四种方式可以混用：文本 + 文件拖拽 + 截图粘贴 + @引用，一次提问全部带上。");
    function callout(s, text) {
      s.addShape("rect", { x: 0.6, y: 4.9, w: 8.8, h: 0.45, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: 4.9, w: 0.05, h: 0.45, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y: 4.9, w: 8.3, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
