// slide-01.js — 课程总封面（深绿底 + 半透明装饰环 + 能力标语，不展示章节内容）
const { C, topAccentBar, bottomAccentBar } = require("./common");
module.exports = {
  slideConfig: { type: "cover", index: 1, title: "课程总封面" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.darkBg };
    topAccentBar(s);
    bottomAccentBar(s);
    // 装饰：半透明大圆环 + 圆点（区别于单色章节封面）
    s.addShape("ellipse", { x: 7.2, y: -1.6, w: 4.6, h: 4.6, fill: { color: "28B894", transparency: 78 }, line: { color: "B8E8DC", width: 1, transparency: 40 } });
    s.addShape("ellipse", { x: -1.4, y: 3.6, w: 3.4, h: 3.4, fill: { color: "2E9E83", transparency: 72 }, line: { color: "B8E8DC", width: 1, transparency: 50 } });
    s.addShape("ellipse", { x: 9.0, y: 4.2, w: 1.5, h: 1.5, fill: { color: "A8895F", transparency: 65 } });
    s.addShape("rect", { x: 0, y: 0, w: 0.14, h: 5.625, fill: { color: "28B894", transparency: 60 } });
    // 顶部标签
    s.addText("WORKBUDDY 效率进阶实训 · 全场景 AI 办公工作台", {
      x: 0.9, y: 0.55, w: 8.2, h: 0.4,
      fontSize: 12.5, fontFace: "Microsoft YaHei", color: "B8E8DC", margin: 0, charSpacing: 2
    });
    // 主标题
    s.addText("WorkBuddy", {
      x: 0.85, y: 1.15, w: 8.4, h: 0.95,
      fontSize: 52, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, margin: 0
    });
    s.addText("效率进阶实训课程", {
      x: 0.9, y: 2.12, w: 8.4, h: 0.8,
      fontSize: 30, fontFace: "Microsoft YaHei", bold: true, color: "B8E8DC", margin: 0
    });
    s.addShape("rect", { x: 0.95, y: 3.0, w: 2.2, h: 0.04, fill: { color: "28B894" } });
    // 副标题
    s.addText("从新手到 OPC 一人公司 —— 让 AI 成为你的全场景生产力", {
      x: 0.9, y: 3.15, w: 8.6, h: 0.5,
      fontSize: 13.5, fontFace: "Microsoft YaHei", color: "DDF2EC", margin: 0
    });
    // 核心能力标语（不展示章节，提炼四大能力）
    const caps = ["理解语言", "规划执行", "多模态", "本地文件操作"];
    caps.forEach((t, i) => {
      const cw = 1.55, gap = 0.35;
      const total = caps.length * cw + (caps.length - 1) * gap;
      const x = 0.9 + i * (cw + gap);
      s.addShape("roundRect", { x, y: 3.95, w: cw, h: 0.5, rectRadius: 0.25, fill: { color: "FFFFFF", transparency: 88 }, line: { color: "B8E8DC", width: 0.75, transparency: 40 } });
      s.addText(t, { x, y: 3.95, w: cw, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", bold: true, color: "E4F6F0", align: "center", valign: "middle", margin: 0 });
    });
    // 规模标注（一行小字，不带章节明细）
    s.addText("体系化课程 · 配套实验 · 教学课件 · 官方文档全链接", {
      x: 0.9, y: 4.75, w: 8.6, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei", color: "9FD8C9", margin: 0
    });
    // 底部
    s.addText("WorkBuddy 效率进阶实训课程 · 2026 教育版", {
      x: 0.9, y: 5.25, w: 8.6, h: 0.3,
      fontSize: 10.5, fontFace: "Microsoft YaHei", color: "9FD8C9", margin: 0
    });
  }
};