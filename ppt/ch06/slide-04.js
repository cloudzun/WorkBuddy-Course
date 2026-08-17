// slide-04.js — 两种推理模式（双卡片对比）
const { C, sectionTitle, card, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 4, title: "标准推理与深度思考" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "两种推理模式：标准 vs 深度思考");
    s.addText("WorkBuddy 支持接入多种底层基座大模型，官方提供“均衡/快速/极致”三档模型选择，并将内置模型区分为思考模式与推理模型。", {
      x: 0.6, y: 1.08, w: 8.8, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const cards = [
      { t: "标准推理模式", strip: C.primary,
        lines: [
          "日常使用的默认主力：响应速度快，Token 消耗量低",
          "适用于日常对话、文本润色、简单的信息提取等基础任务",
          "追求“够用、快、省”——摘要、翻译、格式转换、常规问答等高频办公场景由它承担",
        ] },
      { t: "深度思考模式（Thinking）", strip: C.accentWarm,
        lines: [
          "采用思维链（Chain-of-Thought）技术，输出结果前先进行充分的内部逻辑推演",
          "响应时间更长、成本更贵，但准确率与深度显著提升",
          "适用于复杂的代码编写、架构设计、数学计算或深层逻辑分析",
        ] },
    ];
    cards.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      card(s, x, 1.55, 4.3, 2.6, it.strip);
      s.addText(it.t, { x: x + 0.2, y: 1.68, w: 3.9, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      const body = it.lines.map((ln, j) => ({ text: ln + (j < it.lines.length - 1 ? "\n" : "") }));
      s.addText(body, {
        x: x + 0.2, y: 2.22, w: 3.9, h: 1.85,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.3
      });
    });
    s.addText("官方文档《模型配置》：https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Model", {
      x: 0.85, y: 4.28, w: 8.3, h: 0.35,
      fontSize: 8.5, fontFace: "Consolas", color: C.textMid, margin: 0
    });
    calloutBar(s, "判断标准很简单——任务越依赖“推理过程”，越值得启用 Thinking（取舍之道见下页）。", 4.72);
  }
};