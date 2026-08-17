// slide-18.js — 实验引导（四卡片 2×2）
const { C, sectionTitle, card, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 18, title: "实验引导" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "第 8 章配套实验（labs/ch08-labs.md）", C.bgLight);
    const labs = [
      { n: "8.1", t: "创建第一个自动化任务", d: "官方六项配置（名称/工作空间/提示词/选择模型和技能/定时规则/推送到小程序）与每日定时资讯简报场景", tag: "★ 必做", pre: "完成 1.1" },
      { n: "8.2", t: "循环 vs 单次调度", d: "定时规则中的执行频率（循环/单次）与生效日期区间", tag: "★ 必做", pre: "完成 8.1" },
      { n: "8.3", t: "自动化提示词最佳实践", d: "明确输出格式、限定数量、提供示例、指定异常处理、避免模糊", tag: "★ 必做", pre: "完成 8.1" },
      { n: "8.4", t: "混合模式过渡", d: "先手动跑通 → 验证 → 转自动化，对比自动化与手动验证版产出一致性", tag: "★ 必做", pre: "完成 8.1" },
    ];
    labs.forEach((it, i) => {
      const x = 0.6 + (i % 2) * 4.55;
      const y = 1.5 + Math.floor(i / 2) * 1.7;
      card(s, x, y, 4.3, 1.5, C.primary);
      numBadge(s, x + 0.14, y + 0.1, it.n, C.primary);
      s.addText(it.t, { x: x + 0.72, y: y + 0.08, w: 3.4, h: 0.45, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      s.addText(it.d, { x: x + 0.18, y: y + 0.58, w: 4.0, h: 0.65, fontSize: 9.5, fontFace: "Microsoft YaHei", color: C.textMid, valign: "top", margin: 0, lineSpacingMultiple: 1.15 });
      s.addText(it.tag, { x: x + 0.18, y: y + 1.22, w: 1.1, h: 0.25, fontSize: 10, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText("前置：" + it.pre, { x: x + 1.35, y: y + 1.22, w: 2.9, h: 0.25, fontSize: 9.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0 });
    });
    calloutBar(s, "实验顺序：8.1 → 8.2 → 8.3 → 8.4；8.2-8.4 均依赖 8.1（8.1 前置为实验 1.1），四个实验均为 ★ 必做。", 4.75);
    s.addText("可选扩展（○，需额外账号/权限）：《实践十：一句话，管理你的所有会议》可作为实验 8.2、8.4 的扩展场景；官方文档出处详见 labs/ch08-labs.md。", {
      x: 0.6, y: 5.28, w: 8.8, h: 0.3,
      fontSize: 9, fontFace: "Microsoft YaHei", italic: true, color: C.textMid, margin: 0
    });
  }
};