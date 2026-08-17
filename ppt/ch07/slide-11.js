// slide-11.js — 7.2.2 微信小程序（三卡片 + 模式对比）
const { C, sectionTitle, card, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 11, title: "微信小程序接入" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "微信小程序（移动端执行入口）", C.bgLight);
    s.addText("接入体验与微信助理类似（均为扫码型操作），但提供了更丰富的扩展能力：", {
      x: 0.6, y: 1.05, w: 8.8, h: 0.3,
      fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const feats = [
      { t: "产物同步", d: "开启后不仅能在手机端下发指令，还能直接在小程序中查看电脑端生成的报告或代码片段（产物）；具体开关名称以产品实际界面为准", strip: C.primary },
      { t: "云上模式", d: "使用云端沙箱执行任务，无需依赖个人电脑；直接在小程序内下发任务并查看任务产物", strip: C.accent },
      { t: "连接电脑（本机模式）", d: "远程操控电脑桌面端；需桌面端开启“允许移动端连接”且两端登录同一账号", strip: C.secondary },
    ];
    feats.forEach((it, i) => {
      const x = 0.6 + i * 3.02;
      card(s, x, 1.5, 2.85, 2.1, it.strip);
      s.addText(it.t, { x: x + 0.18, y: 1.62, w: 2.5, h: 0.5, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: x + 0.18, y: 2.15, w: 2.5, h: 1.3, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.22 });
    });
    s.addShape("rect", { x: 0.6, y: 3.8, w: 8.8, h: 0.75, fill: { color: C.bgCard } });
    s.addShape("rect", { x: 0.6, y: 3.8, w: 0.07, h: 0.75, fill: { color: C.accent } });
    s.addText("两种执行环境对比：云上模式 = 云端沙箱执行，无需电脑在线即可完成并查看产物；连接电脑（本机模式） = 远程操控桌面端，可查看任务、续聊、停止任务。", {
      x: 0.95, y: 3.8, w: 8.2, h: 0.75,
      fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.2
    });
    calloutBar(s, "使用“连接电脑”时，请确保桌面端开启“允许移动端连接”，且两端登录同一账号。", 4.7);
    s.addText("官方文档《WorkBuddy 小程序简介》：https://www.workbuddy.cn/docs/workbuddymini/quick-start/Overview", {
      x: 0.6, y: 5.25, w: 8.8, h: 0.3,
      fontSize: 9, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};