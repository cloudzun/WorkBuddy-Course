// slide-19.js — 场景选择速查（表格）
const { C, sectionTitle } = require("./common");
module.exports = {
  slideConfig: { type: "table", index: 19, title: "场景选择速查" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "场景选择速查");
    const hdrOpts = { fill: { color: C.primary }, color: C.textLight, bold: true };
    const rows = [
      [{ text: "功能模块", options: hdrOpts },
       { text: "核心特征", options: hdrOpts },
       { text: "适用场景", options: hdrOpts },
       { text: "推荐建议与技巧", options: hdrOpts }],
      [{ text: "技能", options: { bold: true, color: C.primary } }, "工具属性，提供底层能力", "翻译、格式转换、数据爬取等具体动作", "明确任务步骤时使用；可用连接器串联多个技能"],
      [{ text: "专家", options: { bold: true, color: C.primary } }, "角色属性，专业视角与经验", "方案评审、代码审查、架构设计", "陌生领域或需提升专业度时使用；提问时提供详细背景"],
      [{ text: "灵感", options: { bold: true, color: C.primary } }, "成品属性，完整解决方案", "接手全新任务、制作周报/竞品分析等标准文档", "毫无头绪或追求极致效率时首选；先“做同款”再微调"],
    ];
    s.addTable(rows, {
      x: 0.6, y: 1.35, w: 8.8,
      colW: [1.2, 2.2, 2.7, 2.7],
      fontSize: 10.5, fontFace: "Microsoft YaHei",
      color: C.textDark, border: { color: C.border, pt: 0.5 },
      align: "left", valign: "middle",
      rowH: [0.42, 0.75, 0.75, 0.85],
      fill: { color: C.bgWhite },
      autoPage: false,
    });
    calloutBar(s, "组合使用更高效：用灵感起步 → 用专家把关 → 用技能落地，一条流水线通吃。", 4.85);
    function calloutBar(s, text, y) {
      s.addShape("rect", { x: 0.6, y, w: 8.8, h: 0.45, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y, w: 0.05, h: 0.45, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y, w: 8.3, h: 0.45, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
