// slide-09.js — 9.3.1 智能化 PPT 制作（四步横向卡片）
const { C, sectionTitle, numBadge, card, calloutBar, bigCallout } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 9, title: "智能化 PPT 制作" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "9.3.1 智能化 PPT 制作");
    const steps = [
      { t: "需求到大纲", d: "详细描述受众群体、汇报场景、期望页数以及视觉风格" },
      { t: "自动生成 PPT", d: "AI 根据大纲和指定模板生成完整幻灯片" },
      { t: "内容迭代与美化", d: "通过对话微调特定页面的排版与文案" },
      { t: "演示辅助", d: "可让 AI 基于 PPT 内容补充讲解要点或汇报备注（具体能力以产品实际界面为准）" },
    ];
    steps.forEach((it, i) => {
      const x = 0.6 + i * 2.26;
      card(s, x, 1.45, 2.1, 2.0, i === 2 ? C.accent : C.primary);
      numBadge(s, x + 0.14, 1.57, i + 1, i === 2 ? C.accent : C.primary);
      s.addText(it.t, { x: x + 0.72, y: 1.55, w: 1.3, h: 0.5, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: x + 0.16, y: 2.15, w: 1.8, h: 1.2, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
      if (i < 3) {
        s.addText("→", { x: x + 2.12, y: 2.0, w: 0.3, h: 0.4, fontSize: 20, fontFace: "Microsoft YaHei", bold: true, color: C.secondary, align: "center", margin: 0 });
      }
    });
    bigCallout(s, "在汇报场景中，将文稿转化为 PPT 是一项繁重的工作——WorkBuddy 提供一站式的 PPT 生成能力，极大简化了这一流程。", 3.7, 0.8);
    calloutBar(s, "提示：讲解要点、汇报备注等演示辅助能力的具体形态以产品实际界面为准。", 4.65);
  }
};