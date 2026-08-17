// slide-13.js — 4.3.1 专家与专家团解析（双卡 + 大结论）
const { C, sectionTitle, card, bigCallout } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 13, title: "专家与专家团解析" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "专家与专家团解析");
    s.addText("WorkBuddy 引入拟人化的角色设计来处理复杂任务，分为“专家”与“专家团”两个层级：", {
      x: 0.6, y: 1.12, w: 8.8, h: 0.4, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const items = [
      { t: "专家（Agent）", d: "拥有独立的人设、专属的方法论以及特定的工具链配置。专家擅长单兵作战，专注于解决某一垂直领域或特定环节的问题。", strip: C.primary },
      { t: "专家团（Team）", d: "由一名“团长”和多个“专家”组成的 Multi-Agent 协作团队，擅长应对综合性、多步骤的复杂项目。其核心机制在于通过团长自动将大目标拆解、分配给不同专家的 Agent 进行并行或串行执行，最终整合各方结果进行统一交付。", strip: C.accent },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      card(s, x, 1.6, 4.3, 2.15, it.strip);
      s.addText(it.t, { x: x + 0.2, y: 1.72, w: 3.9, h: 0.45, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: 2.25, w: 3.9, h: 1.4, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.25 });
    });
    bigCallout(s, "资源消耗：专家团并行调用多位专家、涉及多轮模型交互，执行积分消耗通常为单个专家的 3–5 倍（以实际任务为准）。", 3.95, 0.8);
    s.addText("官方文档《专家》：https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Expert-Center", {
      x: 0.6, y: 4.95, w: 8.8, h: 0.4,
      fontSize: 8, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0, lineSpacingMultiple: 1.3
    });
  }
};