// slide-06.js — 开箱即用的底层执行链路（步骤）
const { C, sectionTitle, numBadge, card, calloutBar, bigCallout } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 6, title: "开箱即用的底层链路" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "灵感为何能“开箱即用”", C.bgLight);
    const steps = [
      { t: "用户输入", d: "你的任务描述与上下文" },
      { t: "提示词组装", d: "融合用户输入、系统预设提示、Skill 描述与连接器能力" },
      { t: "模型推理", d: "沿最优路径生成结果" },
      { t: "结果整合", d: "输出高质量、稳定的最终产物" },
    ];
    steps.forEach((it, i) => {
      const x = 0.6 + i * 2.26;
      card(s, x, 1.5, 2.1, 1.9, i === 1 ? C.accent : C.primary);
      numBadge(s, x + 0.14, 1.62, i + 1, i === 1 ? C.accent : C.primary);
      s.addText(it.t, { x: x + 0.72, y: 1.6, w: 1.3, h: 0.5, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: x + 0.16, y: 2.2, w: 1.8, h: 1.05, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
      if (i < 3) {
        s.addText("→", { x: x + 2.12, y: 2.0, w: 0.3, h: 0.4, fontSize: 20, fontFace: "Microsoft YaHei", bold: true, color: C.secondary, align: "center", margin: 0 });
      }
    });
    bigCallout(s, "灵感模板把“提示词组装”环节的最优配方固化下来，让模型直接沿最优路径运行。", 3.7, 0.85);
    calloutBar(s, "收益：输出高质量与稳定性兼得，并省去反复修改提示词、多次试错的 Token 成本。", 4.75);
  }
};
