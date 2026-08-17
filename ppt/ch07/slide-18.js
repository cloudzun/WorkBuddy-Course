// slide-18.js — 7.4.2 飞书与钉钉机器人接入（共通流程 + 凭据核对）
const { C, sectionTitle, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 18, title: "飞书与钉钉机器人接入" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "飞书与钉钉机器人接入", C.bgLight);
    s.addText("远程操控能力同样支持飞书和钉钉平台，接入逻辑与企业微信类似：", {
      x: 0.6, y: 1.05, w: 8.8, h: 0.3,
      fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const steps = [
      { t: "创建机器人应用", d: "在飞书开放平台 / 钉钉开发者后台创建自定义机器人应用" },
      { t: "获取应用凭据", d: "获取对应的 App ID/App Key 及 Secret/App Secret" },
      { t: "选择订阅模式", d: "根据安全要求选择合适的事件订阅模式（长连接或 Webhook）" },
      { t: "回填助理面板", d: "将凭据填入 WorkBuddy 相应的助理设置面板即可" },
    ];
    steps.forEach((it, i) => {
      const y = 1.5 + i * 0.62;
      numBadge(s, 0.7, y + 0.03, i + 1, C.primary);
      s.addText(it.t, { x: 1.35, y, w: 2.4, h: 0.5, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 3.9, y, w: 5.5, h: 0.5, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    s.addShape("rect", { x: 0.6, y: 4.1, w: 8.8, h: 0.55, fill: { color: C.bgBlue } });
    s.addShape("rect", { x: 0.6, y: 4.1, w: 0.07, h: 0.55, fill: { color: C.accent } });
    s.addText("凭据核对（配置与排查时）：飞书 App ID、App Secret、Encrypt Key；钉钉 Client ID（AppKey）、Client Secret（AppSecret）。", {
      x: 0.95, y: 4.1, w: 8.2, h: 0.55,
      fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.15
    });
    calloutBar(s, "详细操作步骤建议随时查阅官方文档的最新指南（具体以产品实际界面为准）。", 4.8);
  }
};