// slide-04.js — 2.1.1 三要素公式（三卡片 + 示例代码块）
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 4, title: "三要素公式" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "三要素公式：做什么 + 有什么 + 怎么样", C.bgLight);
    const items = [
      { t: "做什么", d: "明确核心动作与目标\n（整理、生成、分析……）", strip: C.primary },
      { t: "有什么", d: "提供输入素材与前置条件\n（文件、数据、参考）", strip: C.secondary },
      { t: "怎么样", d: "指定输出格式与质量标准\n（表格 / 条数 / 风格）", strip: C.accent },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.02;
      card(s, x, 1.25, 2.85, 1.55, it.strip);
      s.addText(it.t, { x: x + 0.16, y: 1.37, w: 2.55, h: 0.45, fontSize: 16, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.16, y: 1.85, w: 2.55, h: 0.85, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.3 });
    });
    const code = "把 D:/会议纪要/0320产品评审.docx 里的会议纪要整理成一份清单，包含：\n1）每个议题的结论；2）对应的责任人和截止日期；3）标记有争议、未决的事项。\n用表格输出，不需要开场白。";
    s.addShape("rect", { x: 0.6, y: 3.05, w: 8.8, h: 1.5, fill: { color: "2C3E50" }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
    s.addText("示例指令（官方正面示范）", { x: 0.85, y: 3.12, w: 8.2, h: 0.3, fontSize: 10.5, fontFace: "Microsoft YaHei", bold: true, color: "B8E8DC", margin: 0 });
    s.addText(code, { x: 0.85, y: 3.42, w: 8.2, h: 1.05, fontSize: 11, fontFace: "Consolas", color: "E0F2EC", valign: "top", margin: 0, lineSpacingMultiple: 1.25 });
    callout(s, "最佳实践：指定输出格式时，直接挂载一份“样板文件”，系统按范式生成。");
    function callout(s, text) {
      s.addShape("rect", { x: 0.6, y: 4.85, w: 8.8, h: 0.45, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: 4.85, w: 0.05, h: 0.45, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y: 4.85, w: 8.3, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
