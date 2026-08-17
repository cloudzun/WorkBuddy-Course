// slide-02.js — 学习目标
const { C, sectionTitle, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "objectives", index: 2, title: "学习目标" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "学习目标", C.bgLight);
    const goals = [
      "阐述助理的核心本质、定位及其与普通任务的差异",
      "辨析并选择适合自身场景的远程通信模式（如长连接与 URL 回调）",
      "熟练掌握微信、企业微信及 QQ 等核心渠道的助理配置流程",
      "了解飞书、钉钉等其他企业级协作平台的接入能力",
      "运用标准排查框架，独立解决助理绑定与消息通信中的常见故障",
    ];
    goals.forEach((g, i) => {
      const y = 1.3 + i * 0.72;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(g, {
        x: 1.35, y, w: 8.0, h: 0.55,
        fontSize: 14, fontFace: "Microsoft YaHei",
        color: C.textDark, valign: "middle", margin: 0
      });
    });
    calloutBar(s, "学完本章，你将能把 WorkBuddy 的执行能力装进口袋——人不在电脑前，任务照常落地执行。");
  }
};