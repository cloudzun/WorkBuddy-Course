// slide-14.js — 8.2.2 优秀示例（代码块 + 大结论 + 提示）
const { C, sectionTitle, codeBlock, bigCallout, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 14, title: "优秀自动化提示词示例" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "优秀自动化提示词示例");
    s.addText("优秀自动化提示词应具备——明确输出格式、限定字数或条数、提供参考示例、指定异常处理逻辑、避免模糊表述。", {
      x: 0.6, y: 1.1, w: 8.8, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    codeBlock(s, 0.6, 1.7, 8.8, 1.7,
      `每天早上 9:00，搜索今天的 AI 行业新闻，筛选出关注度最高的 TOP 5。每条新闻生成包含'标题'、'来源'和'50字摘要'的条目，并严格按照 Markdown 表格格式输出。异常处理：如果在执行时没有检索到相关新闻，请直接输出'今日无 AI 行业重要新闻'。`,
      11);
    bigCallout(s, "把五要点写进一句话：格式明确、条数限定、异常兜底、避免模糊。", 3.6, 0.8);
    calloutBar(s, "同样一句话，异常处理逻辑让无人值守的任务“知道没结果时该怎么办”——这是自动化提示词的核心差异。", 4.55);
  }
};