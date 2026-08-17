// slide-25.js — 知识地图（本章结构回顾）
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 25, title: "本章知识地图" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "第 1 章知识地图", C.bgLight);
    const items = [
      { t: "1.1 产品定位", d: "什么是 WorkBuddy\n四大核心能力\n与传统 AI 差异\n典型用户与场景", strip: C.primary },
      { t: "1.2 安装与登录", d: "系统要求\nWindows/macOS 安装\n微信扫码登录\n功能验证", strip: C.secondary },
      { t: "1.3 主界面与功能", d: "三大区域\n新建任务栏六入口\n任务状态与结果区\n专家/技能/专家团\n系统设置与记忆", strip: C.accent },
      { t: "1.4 三大工作模式", d: "Ask 只读问答\nPlan 先规划后执行\nCraft 直接执行\n模式选择口诀", strip: C.accentWarm },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + (i % 2) * 4.55;
      const y = 1.3 + Math.floor(i / 2) * 1.8;
      card(s, x, y, 4.3, 1.6, it.strip);
      s.addText(it.t, { x: x + 0.2, y: y + 0.1, w: 3.9, h: 0.4, fontSize: 14.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.52, w: 3.9, h: 1.0, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.3 });
    });
  }
};
