// slide-20.js — 1.4.3 Craft 模式
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 20, title: "Craft 模式（做一做）" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "Craft 模式：直接执行（You say, I do）", C.bgLight);
    card(s, 0.6, 1.3, 8.8, 1.1, C.primary);
    s.addText("功能特点：最高自动化级别——“数字员工”的核心模式。具备完整文件读写权限，跳过计划确认，直接在工作空间创建、修改或删除文件。", {
      x: 0.95, y: 1.45, w: 8.2, h: 0.8, fontSize: 13.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.3
    });
    s.addText("适用场景", { x: 0.6, y: 2.65, w: 8.8, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.secondary, margin: 0 });
    const scenes = [
      { t: "文档生成", d: "几句提示词快速生成请假条、通告" },
      { t: "表格处理", d: "对指定数据进行格式化、求和或透视" },
      { t: "文件整理", d: "桌面图片按日期分类放入对应文件夹" },
    ];
    scenes.forEach((it, i) => {
      const x = 0.6 + i * 3.02;
      card(s, x, 3.1, 2.85, 1.4, C.secondary);
      s.addText(it.t, { x: x + 0.16, y: 3.22, w: 2.55, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.16, y: 3.66, w: 2.55, h: 0.75, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
    });
    callout(s, "推荐理由：效率最高——适合日常高频常规操作或对结果有绝对把握的任务。");
    function callout(s, text) {
      s.addShape("rect", { x: 0.6, y: 4.8, w: 8.8, h: 0.45, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: 4.8, w: 0.05, h: 0.45, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y: 4.8, w: 8.3, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
