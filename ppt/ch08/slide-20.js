// slide-20.js — 本章小结（深色结论 + 知识地图）试点特效版：装饰圆环 + 编号水印 + 圆点要点
const { C, sectionTitle, bigCallout } = require("./common");
module.exports = {
  slideConfig: { type: "summary", index: 20, title: "本章小结" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "本章小结", C.bgLight);
    // 装饰层：右上圆环 + 编号水印
    s.addShape("ellipse", { x: 7.7, y: -1.4, w: 3.8, h: 3.8, fill: { color: "FFFFFF", transparency: 80 }, line: { color: C.primary, width: 1.2, transparency: 55 } });
    s.addShape("ellipse", { x: 8.35, y: -0.75, w: 2.5, h: 2.5, fill: { color: C.primary, transparency: 88 }, line: { color: C.border, width: 1, transparency: 60 } });
    s.addText("08", {
      x: 8.0, y: 0.7, w: 2.0, h: 1.2,
      fontSize: 66, fontFace: "Arial", bold: true,
      color: C.primary, transparency: 78, align: "center", valign: "middle", margin: 0
    });
    s.addShape("ellipse", { x: -1.0, y: 4.4, w: 2.4, h: 2.4, fill: { color: C.accent, transparency: 88 }, line: { color: C.border, width: 1, transparency: 65 } });
    const points = [
      "自动化专为周期性、重复性工作设计：内置调度器按“执行频率 + 生效日期区间”自动触发，产物保存至指定目录",
      "调度双模式：循环模式长期重复执行；单次模式仅在指定时间点执行一次",
      "混合模式过渡：先手动跑通 → 验证输出 → 转自动化，避免批量生成低质量内容",
      "官方六项配置：名称、工作空间、提示词、选择模型和技能、定时规则、推送到小程序",
      "底线与要点：防敏感数据外发、核心操作人工介入、警惕不可逆操作；提示词做到格式明确、数量限定、给示例、定异常、避模糊",
    ];
    points.forEach((p, i) => {
      const y = 1.32 + i * 0.66;
      s.addShape("ellipse", { x: 0.62, y: y + 0.13, w: 0.28, h: 0.28, fill: { color: i === 4 ? C.accentWarm : C.primary } });
      s.addShape("ellipse", { x: 0.62, y: y + 0.13, w: 0.28, h: 0.28, fill: { color: "FFFFFF", transparency: 55 } });
      s.addText(String(i + 1), { x: 0.62, y: y + 0.1, w: 0.28, h: 0.3, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, align: "center", valign: "middle", margin: 0 });
      s.addText(p, { x: 1.1, y, w: 8.0, h: 0.55, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.15 });
    });
    bigCallout(s, "下一章：第 9 章 典型办公场景综合实战与 OPC 一人公司——把自动化投入真实办公战场，以 OPC 视角收官全书。", 4.7, 0.45);
  }
};