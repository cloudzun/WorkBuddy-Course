// slide-10.js — 4.2.1 十大零成本技能概览（两列清单 + 调用示例）
const { C, sectionTitle, card, numBadge, codeBlock } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 10, title: "十大零成本技能概览" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "十大零成本技能概览");
    s.addText("对于大多数日常办公场景，WorkBuddy 已有一批经过验证的免费、高效技能（排名不分先后）：", {
      x: 0.6, y: 1.1, w: 8.8, h: 0.32, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const skills = [
      { t: "Agent Browser", d: "浏览器自动化，模拟点击、输入与抓取" },
      { t: "办公文档四件套", d: "解析和生成 PDF、DOCX、PPTX、XLSX" },
      { t: "Local Whisper", d: "本地语音转文字，保护隐私且高精度" },
      { t: "tl_video_downloader", d: "视频下载，可提取音频和字幕" },
      { t: "Web Search", d: "实时联网搜索，突破训练数据时间截止" },
      { t: "Obsidian", d: "笔记库管理，实现跨软件知识联动" },
      { t: "Skill Scanner", d: "扫描新技能安全性，防范潜在风险" },
      { t: "Self-improvement", d: "依据使用习惯优化提示词和处理逻辑" },
      { t: "Find Skills", d: "技能查找辅助，提供智能向导" },
      { t: "Frontend Design", d: "按自然语言描述生成前端原型代码" },
    ];
    skills.forEach((it, i) => {
      const x = 0.6 + (i % 2) * 4.55;
      const y = 1.5 + Math.floor(i / 2) * 0.64;
      card(s, x, y, 4.3, 0.56, i % 2 === 0 ? C.primary : C.accent);
      numBadge(s, x + 0.1, y + 0.06, i + 1);
      s.addText(it.t, { x: x + 0.68, y: y + 0.02, w: 1.9, h: 0.5, fontSize: 10.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: x + 2.55, y: y + 0.02, w: 1.65, h: 0.5, fontSize: 9, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    codeBlock(s, 0.6, 4.78, 8.8, 0.42,
      "调用示例（实验 4.2）：请用 Web Search 搜索今天 AI 行业的三条重要新闻并给摘要。", 10);
    s.addText("官方文档《tl_video_downloader》：https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/WorkBuddy-Zero-Cost-Skill-Top-10/tl_video_downloader", {
      x: 0.6, y: 5.28, w: 8.8, h: 0.3,
      fontSize: 8, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};