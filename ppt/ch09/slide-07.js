// slide-07.js — 9.2.1 数据处理全流程（四步横向卡片）
const { C, sectionTitle, numBadge, card, calloutBar, bigCallout } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 7, title: "数据处理全流程" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "9.2.1 数据处理全流程", C.bgLight);
    const steps = [
      { t: "数据文件导入", d: "直接将 Excel 或 CSV 文件拖入对话框" },
      { t: "自动分析与洞察", d: "AI 根据要求读取数据、完成统计并生成图表" },
      { t: "图表可视化", d: "根据数据特征自动生成柱状图、折线图或饼图" },
      { t: "结果解读与汇报", d: "AI 输出对图表趋势的专业解读，并提炼核心洞察，直接用于业务汇报" },
    ];
    steps.forEach((it, i) => {
      const x = 0.6 + i * 2.26;
      card(s, x, 1.45, 2.1, 2.0, i === 1 ? C.accent : C.primary);
      numBadge(s, x + 0.14, 1.57, i + 1, i === 1 ? C.accent : C.primary);
      s.addText(it.t, { x: x + 0.72, y: 1.55, w: 1.3, h: 0.5, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: x + 0.16, y: 2.15, w: 1.8, h: 1.2, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
      if (i < 3) {
        s.addText("→", { x: x + 2.12, y: 2.0, w: 0.3, h: 0.4, fontSize: 20, fontFace: "Microsoft YaHei", bold: true, color: C.secondary, align: "center", margin: 0 });
      }
    });
    bigCallout(s, "面对复杂的数据报表，传统的处理方式耗时且容易出错——WorkBuddy 实现数据分析的端到端自动化。", 3.7, 0.8);
    calloutBar(s, "细节提示：缺失值清洗、维度分组、异常识别等处理细节以产品实际行为为准。", 4.65);
    s.addText("官方文档《实践三：数据分析并可视化》：https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Practice-Cases/Practice-Three", {
      x: 0.6, y: 5.12, w: 8.8, h: 0.3, fontSize: 8.5, fontFace: "Microsoft YaHei",
      color: C.textMid, align: "right", margin: 0
    });
  }
};