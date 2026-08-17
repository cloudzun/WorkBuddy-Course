// slide-24.js — 本章小结（深色结论 + 知识地图）试点特效版：装饰圆环 + 编号水印 + 圆点要点
const { C, sectionTitle, bigCallout } = require("./common");
module.exports = {
  slideConfig: { type: "summary", index: 24, title: "本章小结" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "本章小结", C.bgLight);
    // 装饰层：右上圆环 + 编号水印
    s.addShape("ellipse", { x: 7.7, y: -1.4, w: 3.8, h: 3.8, fill: { color: "FFFFFF", transparency: 80 }, line: { color: C.primary, width: 1.2, transparency: 55 } });
    s.addShape("ellipse", { x: 8.35, y: -0.75, w: 2.5, h: 2.5, fill: { color: C.primary, transparency: 88 }, line: { color: C.border, width: 1, transparency: 60 } });
    s.addText("09", {
      x: 8.0, y: 0.7, w: 2.0, h: 1.2,
      fontSize: 66, fontFace: "Arial", bold: true,
      color: C.primary, transparency: 78, align: "center", valign: "middle", margin: 0
    });
    s.addShape("ellipse", { x: -1.0, y: 4.4, w: 2.4, h: 2.4, fill: { color: C.accent, transparency: 88 }, line: { color: C.border, width: 1, transparency: 65 } });
    const points = [
      "四大典型办公链路：文档生成、数据分析、PPT 制作、深度研究",
      "三大进阶能力：人机双写（MD 审阅与 AI 修订）、设计创意模式、轻量发布（workbuddy.link）",
      "多能力串联：季度经营分析案例（数据 → 报告 → PPT → 讲稿），用自驱四要素 + 小步快跑驱动",
      "OPC 一人公司：AI 时代以个体为核心的新型创业形态，覆盖六大商业模式方向",
      "超级个体：四大显著特征 + 三层能力模型（L1 单点放大 / L2 流程编排 / L3 系统自治），战略与审美由人类主导",
    ];
    points.forEach((p, i) => {
      const y = 1.32 + i * 0.66;
      s.addShape("ellipse", { x: 0.62, y: y + 0.13, w: 0.28, h: 0.28, fill: { color: i === 4 ? C.accentWarm : C.primary } });
      s.addShape("ellipse", { x: 0.62, y: y + 0.13, w: 0.28, h: 0.28, fill: { color: "FFFFFF", transparency: 55 } });
      s.addText(String(i + 1), { x: 0.62, y: y + 0.1, w: 0.28, h: 0.3, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, align: "center", valign: "middle", margin: 0 });
      s.addText(p, { x: 1.1, y, w: 8.0, h: 0.55, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.15 });
    });
    bigCallout(s, "从新手到 OPC 一人公司——WorkBuddy 效率进阶实训课程收官。", 4.7);
  }
};