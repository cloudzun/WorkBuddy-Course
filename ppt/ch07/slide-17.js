// slide-17.js — 7.4.1 企业微信（双模式双面板）
const { C, sectionTitle, card, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 17, title: "企业微信接入" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "企业微信接入（双模式）");
    s.addText("企业微信同时支持长连接和 URL 回调两种模式；为降低门槛，WorkBuddy 还提供了基于长连接的快捷扫码绑定。", {
      x: 0.6, y: 1.0, w: 8.8, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0, lineSpacingMultiple: 1.15
    });
    const left = [
      "在企业微信管理后台创建自建应用（机器人）",
      "在配置页面选择长连接通信模式，并获取应用的 BotID 和对应的 Secret",
      "在 WorkBuddy 端注册这些凭据完成对接",
    ];
    card(s, 0.6, 1.5, 4.25, 2.7, C.primary);
    s.addText("长连接模式（推荐）", { x: 0.82, y: 1.62, w: 3.9, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
    left.forEach((t, i) => {
      s.addText((i + 1) + ". " + t, { x: 0.85, y: 2.12 + i * 0.66, w: 3.85, h: 0.6, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.15 });
    });
    const right = [
      "确保你拥有一台公网 IP 服务器（或进行内网穿透）",
      "在企微后台获取验证用的 Token 和 EncodingAESKey",
      "在 WorkBuddy 端输入这些凭据，系统将生成专用的 Webhook URL 接收地址",
      "将生成的 Webhook URL 粘贴回企业微信机器人创建页“API 配置”区域的 URL 输入框并保存",
    ];
    card(s, 5.15, 1.5, 4.25, 2.7, C.accent);
    s.addText("URL 回调模式（高级）", { x: 5.37, y: 1.62, w: 3.9, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.accent, margin: 0 });
    right.forEach((t, i) => {
      s.addText((i + 1) + ". " + t, { x: 5.4, y: 2.12 + i * 0.52, w: 3.85, h: 0.5, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.1 });
    });
    calloutBar(s, "推荐首选长连接：配置步骤更少，无需再填写 URL、Token 或 EncodingAESKey，也不需回填 Webhook URL。", 4.45);
    s.addText("官方文档《WorkBuddy 接入企业微信指南》：https://www.workbuddy.cn/docs/workbuddy/Wecom-Guide", {
      x: 0.6, y: 5.1, w: 8.8, h: 0.3,
      fontSize: 9, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};