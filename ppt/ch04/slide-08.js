// slide-08.js — 4.1.5 技能的三种安装方式（三卡片）
const { C, sectionTitle, card, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 8, title: "技能的三种安装方式" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "技能的三种安装方式", C.bgLight);
    s.addText("为满足不同层次用户的需求，WorkBuddy 提供了三种灵活的技能安装方式：", {
      x: 0.6, y: 1.12, w: 8.8, h: 0.4, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const ways = [
      { t: "上传导入", d: "适用于具有开发能力的用户或企业内部分发。可将本地技能包（ZIP 压缩包或文件夹）直接导入系统；技能包的具体目录结构以官方文档及产品实际要求为准。", strip: C.primary },
      { t: "查找与推荐", d: "不确定需要什么技能时，直接向 WorkBuddy 描述你的需求，让 AI 帮你从技能市场中寻找并推荐合适的技能，实现对话式安装。", strip: C.accent },
      { t: "对话式创建", d: "针对特定轻量级需求，WorkBuddy 具备自我进化能力。用一句话描述想要实现的功能，让 AI 自动为你生成并配置一个简单的技能包。", strip: C.secondary },
    ];
    ways.forEach((it, i) => {
      const x = 0.6 + i * 3.02;
      card(s, x, 1.65, 2.85, 2.55, it.strip);
      numBadge(s, x + 0.16, 1.77, i + 1, it.strip);
      s.addText(it.t, { x: x + 0.75, y: 1.75, w: 2.0, h: 0.5, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      s.addText(it.d, { x: x + 0.16, y: 2.35, w: 2.55, h: 1.7, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.25 });
    });
    calloutBar(s, "三种方式分层覆盖：开发用户上传技能包、小白用户描述需求、轻量需求一句话让 AI 自动创建。", 4.55);
    s.addText("官方文档《技能》：https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Skills-Market", {
      x: 0.6, y: 5.15, w: 8.8, h: 0.3,
      fontSize: 8, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};