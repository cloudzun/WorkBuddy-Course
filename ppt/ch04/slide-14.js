// slide-14.js — 4.3.2 Skill、专家与专家团的对比（表格）
const { C, sectionTitle } = require("./common");
module.exports = {
  slideConfig: { type: "table", index: 14, title: "Skill、专家与专家团的对比" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "Skill、专家与专家团的对比");
    const hdrOpts = { fill: { color: C.primary }, color: C.textLight, bold: true };
    const rows = [
      [{ text: "智能实体", options: hdrOpts },
       { text: "定位", options: hdrOpts },
       { text: "核心逻辑", options: hdrOpts },
       { text: "积分消耗", options: hdrOpts },
       { text: "适用场景", options: hdrOpts }],
      [{ text: "Skill", options: { bold: true, color: C.primary } }, "轻量级的可复用能力包", "“让 AI 做某件事”（如提取摘要、翻译文本）", "最低，运行速度最快", "简单指令"],
      [{ text: "专家（Agent）", options: { bold: true, color: C.primary } }, "具备独立角色的解决方案", "“谁能帮我做”——找到具备专业视角和系统性方法论指导的角色", "中等", "需要一定专业深度的单项任务"],
      [{ text: "专家团（Team）", options: { bold: true, color: C.primary } }, "复杂项目的攻坚团队", "“复杂项目如何交付”——通过多 Agent 协作应对庞大工程", "最多", "多步骤复杂项目、庞大工程"],
    ];
    s.addTable(rows, {
      x: 0.6, y: 1.35, w: 8.8,
      colW: [1.35, 1.7, 2.55, 1.3, 1.9],
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: C.textDark, border: { color: C.border, pt: 0.5 },
      align: "left", valign: "middle",
      rowH: [0.42, 0.95, 0.95, 0.95],
      fill: { color: C.bgWhite },
      autoPage: false,
    });
    s.addShape("rect", { x: 0.6, y: 4.45, w: 8.8, h: 0.85, fill: { color: C.bgCard }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
    s.addShape("rect", { x: 0.6, y: 4.45, w: 0.07, h: 0.85, fill: { color: C.primary } });
    s.addText("能力进阶链：先判断是否需要“工具”（Skill）→ 再判断是否需要“方法与角色”（专家）→ 最后判断是否需要“团队协同”（专家团）", {
      x: 0.95, y: 4.45, w: 8.2, h: 0.5, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0
    });
    s.addText("一句话速记：想要能力找技能；想要建议找专家；想要团队协作攻坚找专家团。", {
      x: 0.95, y: 4.95, w: 8.2, h: 0.3, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0
    });
    s.addText("官方文档《灵感》：https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Ispiration", {
      x: 0.6, y: 5.42, w: 8.8, h: 0.2,
      fontSize: 8, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};