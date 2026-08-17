// slide-19.js — 5.4.2 资料获取与引用（两种方式）
const { C, sectionTitle, card, bigCallout } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 19, title: "资料获取与引用" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "资料获取与引用", C.bgLight);
    s.addText("连接成功后，即可开始获取并引用资料。在定位到目标文件后，你可以通过以下两种方式将其引入到当前任务中：", {
      x: 0.6, y: 1.1, w: 8.8, h: 0.42, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const items = [
      { t: "方式一：勾选添加", d: "勾选目标文件前面的复选框，然后点击页面上的“添加到任务”按钮", strip: C.primary },
      { t: "方式二：快捷图标", d: "将鼠标悬停在目标文件上，直接点击浮现的“添加到任务”快捷图标", strip: C.accent },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      card(s, x, 1.65, 4.3, 1.6, it.strip);
      s.addText(it.t, { x: x + 0.2, y: 1.78, w: 3.9, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: 2.3, w: 3.9, h: 0.85, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.25 });
    });
    bigCallout(s, "两种方式效果一致：目标文件被引入当前任务后，即可向 AI 描述加工任务。", 3.5, 0.8);
    s.addShape("rect", { x: 0.6, y: 4.5, w: 8.8, h: 0.6, fill: { color: C.bgCard } });
    s.addShape("rect", { x: 0.6, y: 4.5, w: 0.07, h: 0.6, fill: { color: C.accent } });
    s.addText("产品界面：资料库 → 定位目标文件 → “添加到任务”（勾选复选框或点击快捷图标）", {
      x: 0.95, y: 4.5, w: 8.2, h: 0.6, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0
    });
  }
};