// slide-14.js — 7.3.1 元宝派（七步流程）
const { C, sectionTitle, numBadge } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 14, title: "元宝派接入" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "元宝派接入（凭据型）", C.bgLight);
    s.addText("元宝派采用凭据型（AppID + Secret）认证方式，适合有一定定制需求的用户，完整流程如下：", {
      x: 0.6, y: 1.0, w: 8.8, h: 0.3,
      fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const steps = [
      "登录腾讯元宝平台，进入“派”应用管理台",
      "创建一个新的 Bot 实例",
      "在 Bot 配置中找到关联 OpenClaw 服务的选项",
      "获取该 Bot 的专属 AppID 和 AppSecret",
      "回到 WorkBuddy 客户端，在元宝派接入通道填入上述凭据",
      "点击验证连接",
      "回到腾讯元宝 App 的关联页面，点击“我已操作”确认关联，即可开始聊天测试",
    ];
    steps.forEach((txt, i) => {
      const y = 1.45 + i * 0.52;
      numBadge(s, 0.7, y + 0.02, i + 1, C.primary);
      s.addText(txt, { x: 1.35, y, w: 8.0, h: 0.5, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    s.addText("官方文档《WorkBuddy 接入元宝派指南》：https://www.workbuddy.cn/docs/workbuddy/YuanBaoPai-Guide", {
      x: 0.6, y: 5.15, w: 8.8, h: 0.3,
      fontSize: 9, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};