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
    s.addText("05", {
      x: 8.0, y: 0.7, w: 2.0, h: 1.2,
      fontSize: 66, fontFace: "Arial", bold: true,
      color: C.primary, transparency: 78, align: "center", valign: "middle", margin: 0
    });
    s.addShape("ellipse", { x: -1.0, y: 4.4, w: 2.4, h: 2.4, fill: { color: C.accent, transparency: 88 }, line: { color: C.border, width: 1, transparency: 65 } });
    const points = [
      "连接器可被视为“已经封装好的 MCP”，是 WorkBuddy 与外部服务的对接组件；技能是处理任务的本地逻辑，二者是协同关系而非相互替代",
      "MCP 协议：WorkBuddy 扮演 Client、外部服务为 Server；可暴露 Tools / Resources / Prompts；stdio 与 Streamable HTTP 两种传输方式；按需授权、随时可撤销",
      "OAuth 授权：用户授权、颁发令牌、凭令牌访问，全程不提供账号密码；内置连接器（腾讯生态）开箱即用，自定义 MCP 连接器通过 mcp.json 按需接入",
      "资料库：深度集成腾讯文档、ima 知识库、乐享知识库与本地文件；四大功能优势加持语义/关键词双模检索",
      "完整链路：取资料 → AI 加工 → 存回沉淀，让文档知识真正流动起来——掌握了连接器与资料库，才真正具备“连接一切”的数据能力",
    ];
    points.forEach((p, i) => {
      const y = 1.32 + i * 0.66;
      s.addShape("ellipse", { x: 0.62, y: y + 0.13, w: 0.28, h: 0.28, fill: { color: i === 4 ? C.accentWarm : C.primary } });
      s.addShape("ellipse", { x: 0.62, y: y + 0.13, w: 0.28, h: 0.28, fill: { color: "FFFFFF", transparency: 55 } });
      s.addText(String(i + 1), { x: 0.62, y: y + 0.1, w: 0.28, h: 0.3, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, align: "center", valign: "middle", margin: 0 });
      s.addText(p, { x: 1.1, y, w: 8.0, h: 0.55, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.15 });
    });
    bigCallout(s, "下一章：模型配置体系——深入 WorkBuddy 的执行引擎，理解不同模型的推理模式、选择策略与接入方式。", 4.7);
  }
};