// slide-07.js — 内置模型概览（表格）
const { C, sectionTitle } = require("./common");
module.exports = {
  slideConfig: { type: "table", index: 7, title: "内置模型概览" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "内置模型概览");
    s.addText("WorkBuddy 内置了多种主流基座大模型（以当前最新版本为准），并提供了 Auto 自动模式。各模型的定位与擅长方向如下：", {
      x: 0.6, y: 1.06, w: 8.8, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const hdrOpts = { fill: { color: C.primary }, color: C.textLight, bold: true };
    const rows = [
      [{ text: "模型", options: hdrOpts },
       { text: "定位与擅长方向", options: hdrOpts }],
      [{ text: "Auto（自动模式）", options: { bold: true, color: C.primary } },
       "启用后系统根据任务自动选择最适合的模型，为默认选项，日常使用的最优保底"],
      [{ text: "Hunyuan（混元）", options: { bold: true, color: C.primary } },
       "腾讯自研基座；当前内置 Hy3 混元思考模型，支持思考模式（深度思考），适合复杂推理（以最新版本为准）"],
      [{ text: "GLM", options: { bold: true, color: C.primary } },
       "多模态识图与工具调用能力出众，适合 Agent/专家执行场景"],
      [{ text: "MiniMax", options: { bold: true, color: C.primary } },
       "指令遵循与工具调用表现优异，适合 Agent 执行场景"],
      [{ text: "Kimi", options: { bold: true, color: C.primary } },
       "长文本理解与视觉能力出色，适合文档分析、长上下文任务"],
      [{ text: "DeepSeek", options: { bold: true, color: C.primary } },
       "推理与代码能力突出，适合复杂推理与代码开发场景"],
    ];
    s.addTable(rows, {
      x: 0.6, y: 1.32, w: 8.8,
      colW: [2.4, 6.4],
      fontSize: 10.5, fontFace: "Microsoft YaHei",
      color: C.textDark, border: { color: C.border, pt: 0.5 },
      align: "left", valign: "middle",
      rowH: [0.4, 0.56, 0.68, 0.48, 0.48, 0.48, 0.48],
      fill: { color: C.bgWhite },
      autoPage: false,
    });
    s.addText("官方文档《模型配置》：https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Model", {
      x: 0.85, y: 4.98, w: 8.3, h: 0.35,
      fontSize: 8.5, fontFace: "Consolas", color: C.textMid, margin: 0
    });
  }
};