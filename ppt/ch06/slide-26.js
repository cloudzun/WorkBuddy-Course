// slide-26.js — 本章小结（深色结论 + 知识地图）试点特效版：装饰圆环 + 编号水印 + 圆点要点
const { C, sectionTitle, bigCallout } = require("./common");
module.exports = {
  slideConfig: { type: "summary", index: 26, title: "本章小结" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "本章小结", C.bgLight);
    // 装饰层：右上圆环 + 编号水印
    s.addShape("ellipse", { x: 7.7, y: -1.4, w: 3.8, h: 3.8, fill: { color: "FFFFFF", transparency: 80 }, line: { color: C.primary, width: 1.2, transparency: 55 } });
    s.addShape("ellipse", { x: 8.35, y: -0.75, w: 2.5, h: 2.5, fill: { color: C.primary, transparency: 88 }, line: { color: C.border, width: 1, transparency: 60 } });
    s.addText("06", {
      x: 8.0, y: 0.7, w: 2.0, h: 1.2,
      fontSize: 66, fontFace: "Arial", bold: true,
      color: C.primary, transparency: 78, align: "center", valign: "middle", margin: 0
    });
    s.addShape("ellipse", { x: -1.0, y: 4.4, w: 2.4, h: 2.4, fill: { color: C.accent, transparency: 88 }, line: { color: C.border, width: 1, transparency: 65 } });
    const points = [
      "两种推理模式：标准推理保效率（够用、快、省），深度思考（Thinking）用思维链换深度——任务越依赖“推理过程”，越值得启用 Thinking",
      "内置模型家族：Auto 自动模式 + 混元 / GLM / MiniMax / Kimi / DeepSeek，能力标记构成模型的能力画像，系统按任务需求匹配",
      "模型选择：四类场景策略 + 选型口诀——日常 Auto 保底，多模态认准 GLM/Kimi，难活交给深度思考，Agent 场景选 GLM/MiniMax",
      "自定义接入：Token Plan、Coding Plan、提供商接入、Ollama 本地部署四种方式，配置四要素为 Base URL、模型名称、API Key、能力标记",
      "成本管理框架：积分消耗三条规律（模式 / 实体 / 上下文差异）+ 成本优化实践（按任务价值匹配模型与实体）",
    ];
    points.forEach((p, i) => {
      const y = 1.32 + i * 0.66;
      s.addShape("ellipse", { x: 0.62, y: y + 0.13, w: 0.28, h: 0.28, fill: { color: i === 4 ? C.accentWarm : C.primary } });
      s.addShape("ellipse", { x: 0.62, y: y + 0.13, w: 0.28, h: 0.28, fill: { color: "FFFFFF", transparency: 55 } });
      s.addText(String(i + 1), { x: 0.62, y: y + 0.1, w: 0.28, h: 0.3, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, align: "center", valign: "middle", margin: 0 });
      s.addText(p, { x: 1.1, y, w: 8.0, h: 0.55, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.15 });
    });
    bigCallout(s, "下一章：第 7 章 学习助理（远程操控）机制与各渠道接入——把执行能力延伸到移动端，让 WorkBuddy 随时听候调遣。", 4.62);
  }
};