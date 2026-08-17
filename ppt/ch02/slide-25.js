// slide-25.js — 本章小结（深色结论 + 知识地图）试点特效版：装饰圆环 + 编号水印 + 圆点要点
const { C, sectionTitle, bigCallout } = require("./common");
module.exports = {
  slideConfig: { type: "summary", index: 25, title: "本章小结" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "本章小结", C.bgLight);
    // 装饰层：右上圆环 + 编号水印
    s.addShape("ellipse", { x: 7.7, y: -1.4, w: 3.8, h: 3.8, fill: { color: "FFFFFF", transparency: 80 }, line: { color: C.primary, width: 1.2, transparency: 55 } });
    s.addShape("ellipse", { x: 8.35, y: -0.75, w: 2.5, h: 2.5, fill: { color: C.primary, transparency: 88 }, line: { color: C.border, width: 1, transparency: 60 } });
    s.addText("02", {
      x: 8.0, y: 0.7, w: 2.0, h: 1.2,
      fontSize: 66, fontFace: "Arial", bold: true,
      color: C.primary, transparency: 78, align: "center", valign: "middle", margin: 0
    });
    s.addShape("ellipse", { x: -1.0, y: 4.4, w: 2.4, h: 2.4, fill: { color: C.accent, transparency: 88 }, line: { color: C.border, width: 1, transparency: 65 } });
    const points = [
      "三要素公式（做什么 + 有什么 + 怎么样）：把模糊需求变成可执行、可验收的明确任务",
      "四种上下文挂载（@引用 / 粘贴截图 / 上传文件 / 补充说明）：让 WorkBuddy 充分理解你的输入",
      "对话闭环（追问 / 修正 / 打断 / 新建）：多轮上下文保持，基于部分结果继续，追问不成则果断新建",
      "结果区四类内容（概览：工作空间文件 / 浏览器 / 变更 / 产物）：交付前先检视，产物可分享到云盘 / 腾讯文档 / ima / 乐享",
      "工作空间与任务：任务六态流转，归档保数据、删除需谨慎，多任务并行互不干扰",
    ];
    points.forEach((p, i) => {
      const y = 1.32 + i * 0.66;
      s.addShape("ellipse", { x: 0.62, y: y + 0.13, w: 0.28, h: 0.28, fill: { color: i === 4 ? C.accentWarm : C.primary } });
      s.addShape("ellipse", { x: 0.62, y: y + 0.13, w: 0.28, h: 0.28, fill: { color: "FFFFFF", transparency: 55 } });
      s.addText(String(i + 1), { x: 0.62, y: y + 0.1, w: 0.28, h: 0.3, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, align: "center", valign: "middle", margin: 0 });
      s.addText(p, { x: 1.1, y, w: 8.0, h: 0.55, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.15 });
    });
    bigCallout(s, "下一章：第 3 章 灵感与提示词——从“会用”到“用得巧”。", 4.7, 0.45);
  }
};