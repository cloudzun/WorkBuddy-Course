// slide-11.js — 1.2.3 首次登录与功能验证（步骤）
const { C, sectionTitle, numBadge } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 11, title: "首次登录与功能验证" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "首次登录与功能验证", C.bgLight);
    const steps = [
      "登录账号：微信扫描屏幕二维码完成登录，勾选同意用户服务协议",
      "确认状态：检查个人头像，确认账户已登录",
      "版本检查：进入系统设置核对软件版本号（建议开启自动更新）",
      "功能验证：发送一条测试消息，能收到回复即网络与配置成功",
    ];
    steps.forEach((t, i) => {
      const y = 1.35 + i * 0.85;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(t, { x: 1.35, y, w: 8.0, h: 0.7, fontSize: 13.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.2 });
    });
    const code = "你好，请介绍一下你自己";
    s.addShape("rect", { x: 1.35, y: 4.55, w: 5.4, h: 0.55, fill: { color: "2C3E50" }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
    s.addText(code, { x: 1.55, y: 4.55, w: 5.0, h: 0.55, fontSize: 12, fontFace: "Consolas", color: "E0F2EC", valign: "middle", margin: 0 });
    callout(s, "最佳实践：首次登录后在系统设置中确认自动更新开启，始终使用最新功能。");
    function callout(s, text) {
      s.addShape("rect", { x: 0.6, y: 5.1, w: 8.8, h: 0.4, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: 5.1, w: 0.05, h: 0.4, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y: 5.1, w: 8.3, h: 0.4, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
