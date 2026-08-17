// slide-09.js — 2.2.1 支持的文件类型（分类卡片）
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 9, title: "支持的文件类型" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "支持的文件类型（官方文档《任务对话》）", C.bgLight);
    const items = [
      { t: "文档类", d: "PDF / Word / TXT / Markdown / RTF", strip: C.primary },
      { t: "表格类", d: "Excel / CSV / TSV", strip: C.secondary },
      { t: "演示类", d: "PPT", strip: C.accent },
      { t: "图片类", d: "JPG / PNG / GIF / BMP", strip: C.accentWarm },
      { t: "压缩包", d: "ZIP / RAR", strip: C.primary },
      { t: "代码文件", d: "各类编程语言源码", strip: C.secondary },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + (i % 3) * 3.02;
      const y = 1.35 + Math.floor(i / 3) * 1.5;
      card(s, x, y, 2.85, 1.3, it.strip);
      s.addText(it.t, { x: x + 0.16, y: y + 0.1, w: 2.55, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.16, y: y + 0.52, w: 2.55, h: 0.7, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
    });
    warn(s, "安全提示：文件夹级授权属高风险操作，遵循“最小权限”，只授权必要的项目子目录。");
    function warn(s, text) {
      s.addShape("rect", { x: 0.6, y: 4.55, w: 8.8, h: 0.45, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: 4.55, w: 0.05, h: 0.45, fill: { color: C.accentWarm } });
      s.addText(text, { x: 0.85, y: 4.55, w: 8.3, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
