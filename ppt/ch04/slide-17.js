// slide-17.js — 4.3.4 Multi-Agent 协作原理（五阶段）
const { C, sectionTitle, card, numBadge, bigCallout, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 17, title: "Multi-Agent 协作原理" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "Multi-Agent 协作原理");
    s.addText("专家团的强大源于其精巧的 Multi-Agent 协作机制，基本运行逻辑分为五个关键阶段：", {
      x: 0.6, y: 1.1, w: 8.8, h: 0.35, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const stages = [
      { t: "需求理解", d: "团长接收用户的原始输入，进行意图识别和全局评估" },
      { t: "任务拆解", d: "团长将庞大的目标分解为若干个可独立执行的子任务" },
      { t: "智能分配", d: "根据团内各 Agent 的专长与能力，将子任务精准派发" },
      { t: "协同执行", d: "各专家根据任务间的依赖关系，采取并行或串行的方式推进工作" },
      { t: "整合交付", d: "团长收集各专家的阶段性产物，进行逻辑校验、格式统一与最终合并" },
    ];
    stages.forEach((it, i) => {
      const x = 0.6 + i * 1.76;
      card(s, x, 1.55, 1.62, 2.05, i === 4 ? C.accent : C.primary);
      numBadge(s, x + 0.12, 1.67, i + 1, i === 4 ? C.accent : C.primary);
      s.addText(it.t, { x: x + 0.12, y: 2.15, w: 1.38, h: 0.3, fontSize: 11.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.12, y: 2.48, w: 1.38, h: 1.05, fontSize: 9, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
      if (i < 4) {
        s.addText("→", { x: x + 1.62, y: 2.3, w: 0.24, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.secondary, align: "center", margin: 0 });
      }
    });
    bigCallout(s, "团长是专家团的“总指挥”：接收需求 → 拆解目标 → 派发任务 → 协同推进 → 整合交付，全程负责。", 3.85, 0.75);
    calloutBar(s, "本质：一名团长统筹 + 多位专家并行/串行执行 + 结果统一整合，这就是 Multi-Agent 的核心机制。", 4.8);
  }
};