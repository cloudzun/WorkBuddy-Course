// slide-02.js — 学习目标
const { C, sectionTitle, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "objectives", index: 2, title: "学习目标" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "学习目标", C.bgLight);
    const goals = [
      "阐述技能、连接器与 MCP 协议之间的相互关系",
      "理解 MCP 协议的核心运行原理与 OAuth 授权流程",
      "掌握常见内置连接器及自定义 MCP 连接器的配置步骤与界面操作，并运用连接器的安全管理规范",
      "掌握 WorkBuddy 资料库的核心优势与支持接入的文档平台",
      "熟练运用语义与关键词搜索精准定位目标资料，掌握资料获取、AI 加工与产物一键存回的完整工作链路",
    ];
    goals.forEach((g, i) => {
      const y = 1.25 + i * 0.74;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(g, {
        x: 1.35, y, w: 8.0, h: 0.55,
        fontSize: 13.5, fontFace: "Microsoft YaHei",
        color: C.textDark, valign: "middle", margin: 0
      });
    });
    calloutBar(s, "学完本章，你将掌握连接器的接入与安全管理，并跑通“取资料 → AI 加工 → 存回沉淀”的完整链路。");
  }
};