// slide-13.js — 8.2.2 自动化提示词五大要点（五卡片 3+2）
const { C, sectionTitle, numBadge, card, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 13, title: "自动化提示词五大要点" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "自动化提示词的五大要点", C.bgLight);
    s.addText("自动化任务缺乏人工的实时干预与追问：在第 2 章任务描述三要素与歧义消除法则的基础上，还要做到——", {
      x: 0.6, y: 1.08, w: 8.8, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const items = [
      { t: "明确输出格式", d: "如“严格按照 Markdown 表格格式输出”", strip: C.primary },
      { t: "限定字数或条数", d: "例如 TOP 5、50 字摘要", strip: C.secondary },
      { t: "提供参考示例", d: "说明期望的输出样式", strip: C.accent },
      { t: "指定异常处理逻辑", d: "无结果时怎么办，例如直接输出“今日无 AI 行业重要新闻”", strip: C.accentWarm },
      { t: "避免模糊表述", d: "避免“尽量”“大概”等模棱两可的说法", strip: C.secondary },
    ];
    items.forEach((it, i) => {
      let x, y;
      if (i < 3) {
        x = 0.6 + i * 3.02;
        y = 1.75;
        card(s, x, y, 2.85, 1.5, it.strip);
        numBadge(s, x + 0.12, y + 0.12, i + 1, it.strip);
        s.addText(it.t, { x: x + 0.68, y: y + 0.1, w: 2.0, h: 0.5, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
        s.addText(it.d, { x: x + 0.16, y: y + 0.68, w: 2.55, h: 0.75, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
      } else {
        x = 0.6 + (i - 3) * 4.55;
        y = 3.4;
        card(s, x, y, 4.3, 1.5, it.strip);
        numBadge(s, x + 0.12, y + 0.12, i + 1, it.strip);
        s.addText(it.t, { x: x + 0.68, y: y + 0.1, w: 3.0, h: 0.5, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
        s.addText(it.d, { x: x + 0.2, y: y + 0.68, w: 3.9, h: 0.75, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
      }
    });
    calloutBar(s, "五要点拼齐，无人值守的任务才知道“做什么、做成什么样、没结果时怎么办”。", 5.0);
  }
};