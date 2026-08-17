// slide-04.js — 5.1.1 技能、连接器与 MCP 的关系（三卡片 + 大结论）
const { C, sectionTitle, card, bigCallout } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 4, title: "技能、连接器与 MCP 的关系" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "技能、连接器与 MCP 的关系");
    s.addText("在构建 WorkBuddy 的完整能力图谱时，需要理清技能与连接器的不同定位，以及它们如何通过 MCP 协议产生联系：", {
      x: 0.6, y: 1.08, w: 8.8, h: 0.4, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const items = [
      { t: "技能", d: "通常是安装在本地的能力包，侧重逻辑处理，赋予 AI 执行某一类专业任务的方法，例如生成报告、处理文档、运行代码等", strip: C.primary },
      { t: "连接器", d: "可以被视为“已经封装好的 MCP”，是 WorkBuddy 与具体外部服务（如企业微信、GitHub）之间的对接组件", strip: C.accent },
      { t: "MCP 协议", d: "全称为 Model Context Protocol，是 AI 模型与外部服务进行通信的通用标准；技术形态分为“MCP + CLI（标准化协议）”与“Skill + CLI（内置脚本）”两类", strip: C.accentWarm },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.02;
      card(s, x, 1.55, 2.85, 1.9, it.strip);
      s.addText(it.t, { x: x + 0.2, y: 1.67, w: 2.45, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: 2.18, w: 2.5, h: 1.15, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
    });
    bigCallout(s, "如果技能是处理任务的“大脑处理逻辑”，连接器就是获取数据和执行外部操作的“触手”——二者不是相互替代，而是经常协同作战。", 3.6, 0.85);
    s.addText("协同示例：生成项目进度周报时，MCP 连接器先连接到项目管理系统获取最新的数据状态 → 本地的文档处理技能接手进行数据分析和排版、生成周报内容 → 最后再次通过连接器将周报存储回团队的共享知识库。", {
      x: 0.6, y: 4.55, w: 8.8, h: 0.55, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2
    });
    s.addText("官方文档：《连接器》 https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Connector", {
      x: 0.6, y: 5.17, w: 8.8, h: 0.32, fontSize: 9, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};