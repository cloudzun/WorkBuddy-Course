// slide-10.js — 四类模型选择策略（表格）
const { C, sectionTitle, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "table", index: 10, title: "四类模型选择策略" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "四类模型选择策略");
    const hdrOpts = { fill: { color: C.primary }, color: C.textLight, bold: true };
    const rows = [
      [{ text: "任务场景", options: hdrOpts },
       { text: "推荐模型", options: hdrOpts },
       { text: "选择理由", options: hdrOpts }],
      [{ text: "日常问答与常规处理", options: { bold: true, color: C.primary } },
       { text: "Auto（自动模式）", options: { bold: true, color: C.primary } },
       "系统根据任务自动选择最适合的模型（默认选项），速度与稳定性最佳"],
      [{ text: "多模态场景（识图、文档分析）", options: { bold: true, color: C.primary } },
       "GLM 或 Kimi",
       "视觉与上下文能力出众"],
      [{ text: "复杂推理与代码场景", options: { bold: true, color: C.primary } },
       "Hy3（混元）或 DeepSeek",
       "支持思考模式（深度思考），逻辑推演能力强"],
      [{ text: "Agent/专家执行场景", options: { bold: true, color: C.primary } },
       "GLM 或 MiniMax",
       "在指令遵循与工具调用上表现优异"],
    ];
    s.addTable(rows, {
      x: 0.6, y: 1.35, w: 8.8,
      colW: [3.1, 2.3, 3.4],
      fontSize: 10.5, fontFace: "Microsoft YaHei",
      color: C.textDark, border: { color: C.border, pt: 0.5 },
      align: "left", valign: "middle",
      rowH: [0.42, 0.68, 0.56, 0.68, 0.56],
      fill: { color: C.bgWhite },
      autoPage: false,
    });
    calloutBar(s, "选型口诀：日常 Auto 保底，多模态认准 GLM/Kimi，难活交给深度思考，Agent 场景选指令遵循强的 GLM/MiniMax。", 4.75);
  }
};