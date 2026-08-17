// slide-15.js — 9.5.1 案例串联：季度经营分析汇报（四步横向卡片）
const { C, sectionTitle, numBadge, card, calloutBar, bigCallout } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 15, title: "案例串联：季度经营分析汇报" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "9.5.1 案例串联：季度经营分析汇报");
    s.addText("真实的工作流往往是多项能力的组合——以季度经营分析汇报为例：", {
      x: 0.6, y: 1.05, w: 8.8, h: 0.4, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const steps = [
      { t: "拖入数据", d: "将 Q2 销售数据的 Excel 文件拖入工作空间" },
      { t: "分析定位", d: "让 AI 分析销售趋势并定位异常波动数据" },
      { t: "生成初稿", d: "基于分析结果，生成一份详细的经营分析报告初稿" },
      { t: "转 PPT 讲稿", d: "一键转换为面向管理层汇报的 PPT 文稿，并同步生成排练所需的演讲稿" },
    ];
    steps.forEach((it, i) => {
      const x = 0.6 + i * 2.26;
      card(s, x, 1.5, 2.1, 2.0, i === 2 ? C.accent : C.primary);
      numBadge(s, x + 0.14, 1.62, i + 1, i === 2 ? C.accent : C.primary);
      s.addText(it.t, { x: x + 0.72, y: 1.6, w: 1.3, h: 0.5, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: x + 0.16, y: 2.2, w: 1.8, h: 1.2, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
      if (i < 3) {
        s.addText("→", { x: x + 2.12, y: 2.05, w: 0.3, h: 0.4, fontSize: 20, fontFace: "Microsoft YaHei", bold: true, color: C.secondary, align: "center", margin: 0 });
      }
    });
    bigCallout(s, "一次季度经营分析汇报，串联文档、数据分析与 PPT 生成——多能力组合解决真实问题。", 3.75, 0.8);
    calloutBar(s, "配套实验：综合演练（我的咖啡品牌·季度经营分析）完整走通本案例，见 labs/ch09-labs.md。", 4.75);
  }
};