// slide-12.js — 7.2.3 微信客服号（步骤）
const { C, sectionTitle, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 12, title: "微信客服号接入" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "微信客服号");
    s.addText("习惯通过服务号窗口交互的用户，可以选择微信客服号集成：", {
      x: 0.6, y: 1.05, w: 8.8, h: 0.3,
      fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const steps = [
      { t: "进入面板", d: "进入 WorkBuddy 助理设置面板" },
      { t: "选择选项卡", d: "选择“微信客服号集成”选项卡" },
      { t: "获取主账号", d: "点击获取或绑定对应的微信主账号" },
      { t: "扫码授权", d: "扫描弹出的系统认证二维码完成授权体系对接" },
    ];
    steps.forEach((it, i) => {
      const y = 1.5 + i * 0.72;
      numBadge(s, 0.7, y + 0.03, i + 1, C.accent);
      s.addText(it.t, { x: 1.35, y, w: 2.4, h: 0.55, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 3.9, y, w: 5.5, h: 0.55, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "微信客服号与微信助理功能相同、绑定流程一致（均为扫码绑定），可根据需要选择其中一种使用。", 4.5);
    s.addText("官方文档《微信客服号接入指南》：https://www.workbuddy.cn/docs/workbuddy/Wechat-Guide", {
      x: 0.6, y: 5.15, w: 8.8, h: 0.3,
      fontSize: 9, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};