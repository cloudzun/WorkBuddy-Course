// slide-06.js — 5.1.3 OAuth 授权流程解析（大结论 + 四角色卡片）
const { C, sectionTitle, card, bigCallout, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "callout", index: 6, title: "OAuth 授权流程解析" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "OAuth 授权流程解析");
    bigCallout(s, "OAuth 核心思想：“用户授权、颁发令牌、凭令牌访问”——整个过程无需向 WorkBuddy 提供你的账号密码", 1.25, 0.85);
    s.addText("OAuth 流程涉及四个关键角色：", {
      x: 0.6, y: 2.3, w: 8.8, h: 0.35, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0
    });
    const roles = [
      { t: "资源拥有者", d: "即用户本人", strip: C.primary },
      { t: "客户端", d: "即 WorkBuddy，它需要获取数据", strip: C.accent },
      { t: "授权服务器", d: "外部平台（如腾讯云、GitHub）专门负责认证的服务器", strip: C.secondary },
      { t: "资源服务器", d: "存储用户实际数据的服务器", strip: C.accentWarm },
    ];
    roles.forEach((it, i) => {
      const x = 0.6 + (i % 2) * 4.55;
      const y = 2.72 + Math.floor(i / 2) * 1.15;
      card(s, x, y, 4.3, 1.02, it.strip);
      s.addText(it.t, { x: x + 0.2, y: y + 0.1, w: 2.5, h: 0.32, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 2.7, y: y + 0.1, w: 1.5, h: 0.85, fontSize: 9.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.2 });
    });
    calloutBar(s, "授权时平台会提示授予哪些具体权限（scope，如仅读取邮件但不允许删除）；WorkBuddy 获取的是具有时效性的令牌（Token），后续数据交互均凭令牌验证，充分贯彻最小权限原则。", 5.02);
  }
};