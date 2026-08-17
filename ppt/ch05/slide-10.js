// slide-10.js — 5.2.2 企业连接器配置示例：腾讯乐享（步骤）
const { C, sectionTitle, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 10, title: "配置腾讯乐享连接器" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "企业连接器配置示例：腾讯乐享");
    const steps = [
      "在连接器列表中选择“腾讯乐享”，点击发起授权登录",
      "选择微信扫码或手机号验证等方式进行身份认证",
      "确认授权 WorkBuddy 读取、搜索以及创建/编辑知识内容的权限",
      "授权完成后，即可在对话中调用乐享的企业知识库内容",
    ];
    steps.forEach((it, i) => {
      const y = 1.3 + i * 0.66;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(it, {
        x: 1.35, y, w: 8.0, h: 0.6,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.15
      });
    });
    calloutBar(s, "两个示例均遵循标准的 OAuth 扫码授权体验（原理见 §5.1.3）——授权前务必仔细核对权限范围（scope）。", 4.05);
    s.addText("官方文档：《连接器》 https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Connector", {
      x: 0.6, y: 4.75, w: 8.8, h: 0.32, fontSize: 9, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};