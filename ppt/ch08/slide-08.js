// slide-08.js — 8.1.2 混合模式过渡（三步走 + 大结论）
const { C, sectionTitle, numBadge, card, bigCallout, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 8, title: "混合模式过渡" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "混合模式：上线前的过渡路径", C.bgLight);
    const steps = [
      { t: "手动跑通", d: "先用手动执行跑通整个流程，验证提示词的输出效果与格式准确性" },
      { t: "确认转换", d: "确认无误后，将同一提示词配置为自动化任务" },
      { t: "放大调度", d: "先以低频率试运行，确认执行结果符合预期后，再放大调度频率" },
    ];
    steps.forEach((it, i) => {
      const x = 0.6 + i * 3.02;
      card(s, x, 1.5, 2.85, 2.0, C.primary);
      numBadge(s, x + 0.14, 1.62, i + 1, C.primary);
      s.addText(it.t, { x: x + 0.72, y: 1.6, w: 2.0, h: 0.5, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: x + 0.16, y: 2.2, w: 2.55, h: 1.15, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
      if (i < 2) {
        s.addText("→", { x: x + 2.88, y: 2.1, w: 0.3, h: 0.4, fontSize: 20, fontFace: "Microsoft YaHei", bold: true, color: C.secondary, align: "center", margin: 0 });
      }
    });
    bigCallout(s, "混合模式：上线任何自动化任务之前，先用手动方式跑通整个流程，避免因逻辑漏洞导致批量生成低质量内容。", 3.8, 0.95);
    calloutBar(s, "官方使用建议：新建任务后先以低频率试运行，确认 Agent 的理解与执行结果符合预期后，再放大调度频率。", 4.85);
  }
};