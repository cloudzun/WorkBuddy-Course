// slide-12.js — 8.2.1 官方六项核心配置（表格）
const { C, sectionTitle, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "table", index: 12, title: "官方六项核心配置" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "核心配置项：来自官方文档的六项");
    const hdrOpts = { fill: { color: C.primary }, color: C.textLight, bold: true };
    const rows = [
      [{ text: "配置项", options: hdrOpts },
       { text: "说明", options: hdrOpts }],
      [{ text: "任务名称", options: { bold: true, color: C.primary } }, "为任务设定一个清晰、易于辨识的名称"],
      [{ text: "工作空间（可选）", options: { bold: true, color: C.primary } }, "指定任务运行时所挂载的工作空间，以获取相应的上下文数据"],
      [{ text: "提示词", options: { bold: true, color: C.primary } }, "定义 AI 在该任务中需要执行的具体指令"],
      [{ text: "选择模型和技能", options: { bold: true, color: C.primary } }, "根据任务复杂度选择合适的模型（见第 6 章）与技能；是否支持 Agent（专家）/Team（专家团）作为执行主体，以产品实际支持为准"],
      [{ text: "定时规则", options: { bold: true, color: C.primary } }, "配置执行频率（循环或单次）与生效日期区间，超出该区间后任务将自动失效"],
      [{ text: "推送到小程序", options: { bold: true, color: C.primary } }, "可选开启，将执行结果同步推送至绑定的 WorkBuddy 微信小程序"],
    ];
    s.addTable(rows, {
      x: 0.6, y: 1.3, w: 8.8,
      colW: [2.0, 6.8],
      fontSize: 10.5, fontFace: "Microsoft YaHei",
      color: C.textDark, border: { color: C.border, pt: 0.5 },
      align: "left", valign: "middle",
      rowH: [0.42, 0.45, 0.45, 0.45, 0.72, 0.45, 0.45],
      fill: { color: C.bgWhite },
      autoPage: false,
    });
    calloutBar(s, "以上为官方《自动化》文档列出的核心配置项；产品界面还可能提供访问权限等高级设置，以实际界面为准。", 4.85);
  }
};