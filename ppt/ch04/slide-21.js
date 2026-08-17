// slide-21.js — 4.4.3 多团协作工作流（三步接力 + 大结论）
const { C, sectionTitle, card, numBadge, bigCallout, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 21, title: "多团协作工作流" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "多团协作工作流", C.bgLight);
    s.addText("单一专家团队解决的是垂直领域的问题，而真正的商业闭环需要多团协作——标准“产品-内容-落地”闭环接力三步：", {
      x: 0.6, y: 1.1, w: 8.8, h: 0.5, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0, lineSpacingMultiple: 1.2
    });
    const flow = [
      { t: "产品设计类", d: "先调用，确定 MVP 原型" },
      { t: "技术工程类", d: "无缝切换，完成代码生成与测试部署" },
      { t: "品牌营销类", d: "最后接力，规划上线后的推广路径" },
    ];
    flow.forEach((it, i) => {
      const x = 0.6 + i * 3.02;
      card(s, x, 1.75, 2.85, 1.35, C.primary);
      numBadge(s, x + 0.14, 1.87, i + 1);
      s.addText(it.t, { x: x + 0.72, y: 1.85, w: 2.1, h: 0.5, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: x + 0.16, y: 2.42, w: 2.55, h: 0.6, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
      if (i < 2) {
        s.addText("→", { x: x + 2.87, y: 2.1, w: 0.3, h: 0.4, fontSize: 18, fontFace: "Microsoft YaHei", bold: true, color: C.secondary, align: "center", margin: 0 });
      }
    });
    bigCallout(s, "多 Agent Team 协同作业，一名超级个体完全有能力在一周内打通以往多部门耗时数月的完整商业闭环。", 3.5, 0.8);
    calloutBar(s, "工作流节奏：先定原型 → 再做落地 → 最后推增长，专家团接力无缝切换。", 4.55);
  }
};