// slide-01.js — 封面（试点特效版：水印大数字 + 半透明圆环 + 竖线 + 装饰点阵）
const { C, topAccentBar, bottomAccentBar } = require("./common");
module.exports = {
  slideConfig: { type: "cover", index: 1, title: "任务创建与结果管理" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.darkBg };
    topAccentBar(s);
    bottomAccentBar(s);
    // ── 装饰层（先画所有背景元素，再画文字使其浮于上层）──
    // 水印大数字 "02"
    s.addText("02", {
      x: 5.6, y: 0.1, w: 4.4, h: 4.4,
      fontSize: 190, fontFace: "Arial", bold: true,
      color: "28B894", transparency: 80, align: "center", valign: "middle", margin: 0
    });
    // 右上大圆环 + 内环
    s.addShape("ellipse", { x: 7.7, y: -1.5, w: 4.2, h: 4.2, fill: { color: "FFFFFF", transparency: 92 }, line: { color: "B8E8DC", width: 1.5, transparency: 55 } });
    s.addShape("ellipse", { x: 8.35, y: -0.85, w: 2.9, h: 2.9, fill: { color: "28B894", transparency: 88 }, line: { color: "B8E8DC", width: 1, transparency: 60 } });
    // 左下圆环
    s.addShape("ellipse", { x: -1.4, y: 3.9, w: 2.9, h: 2.9, fill: { color: "2E9E83", transparency: 85 }, line: { color: "B8E8DC", width: 1, transparency: 60 } });
    // 顶部小圆点点缀
    s.addShape("ellipse", { x: 7.2, y: 0.45, w: 0.4, h: 0.4, fill: { color: "B8E8DC", transparency: 55 } });
    s.addShape("ellipse", { x: 6.9, y: 0.25, w: 0.22, h: 0.22, fill: { color: "A8895F", transparency: 45 } });
    s.addShape("ellipse", { x: 0.6, y: 5.0, w: 0.5, h: 0.5, fill: { color: "B8E8DC", transparency: 70 } });
    // 左侧品牌竖线
    s.addShape("rect", { x: 0.8, y: 1.0, w: 0.07, h: 2.6, fill: { color: "B8E8DC" } });
    // ── 标题区 ──
    s.addText("第 2 章", {
      x: 1.2, y: 1.02, w: 7.5, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei", bold: true, color: "B8E8DC", margin: 0
    });
    s.addText("任务创建与结果管理", {
      x: 1.2, y: 1.55, w: 8.2, h: 1.0,
      fontSize: 42, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, margin: 0
    });
    s.addShape("rect", { x: 1.25, y: 2.72, w: 2.2, h: 0.045, fill: { color: "28B894" } });
    s.addText("三要素公式 · 上下文挂载 · 对话追问 · 结果区与产物 · 工作空间", {
      x: 1.2, y: 2.98, w: 8.2, h: 0.6,
      fontSize: 15, fontFace: "Microsoft YaHei", italic: true, color: "DDF2EC", margin: 0
    });
    // 底部章节进度点
    for (let i = 0; i < 9; i++) {
      s.addShape("ellipse", {
        x: 1.2 + i * 0.3, y: 4.5, w: 0.15, h: 0.15,
        fill: { color: i < 2 ? "28B894" : "FFFFFF", transparency: i < 2 ? 20 : 75 }
      });
    }
    s.addText("WorkBuddy 效率进阶实训课程 · 配套实验（实验 2.1-2.5）", {
      x: 1.2, y: 4.9, w: 8.0, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei", color: "C8E8E0", margin: 0
    });
  }
};