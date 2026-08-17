// slide-24.js — 实验引导卡片（六实验三列两行）
const { C, sectionTitle, card, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 24, title: "实验引导" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "第 7 章配套实验（labs/ch07-labs.md）", C.bgLight);
    const labs = [
      { n: "7.1", t: "运行四前提自查", d: "开机/运行/联网/不休眠四前提与防休眠设置", tag: "★ 必做", pre: "完成 1.1" },
      { n: "7.2", t: "微信助理接入", d: "扫码绑定、手机下发任务、结果回传", tag: "★ 必做", pre: "手机微信" },
      { n: "7.3", t: "微信小程序多端协同", d: "云上模式 vs 连接电脑；“允许移动端连接”且同一账号", tag: "○ 可选", pre: "手机微信、微信小程序" },
      { n: "7.4", t: "企业微信接入", d: "长连接扫码绑定；URL 回调（Token/EncodingAESKey + Webhook 回填）", tag: "○ 可选", pre: "企业微信管理员权限" },
      { n: "7.5", t: "远程任务特性验证", d: "助理专属文件夹、上下文保留、单会话限制", tag: "★ 必做", pre: "完成 7.2" },
      { n: "7.6", t: "四步排查法演练", d: "官方 FAQ 排查流程；实践六远程遥控场景", tag: "★ 必做", pre: "完成 7.2" },
    ];
    labs.forEach((it, i) => {
      const x = 0.6 + (i % 3) * 3.02;
      const y = 1.3 + Math.floor(i / 3) * 1.95;
      card(s, x, y, 2.85, 1.8, C.primary);
      numBadge(s, x + 0.16, y + 0.12, it.n, C.primary);
      s.addText(it.t, { x: x + 0.72, y: y + 0.1, w: 2.05, h: 0.4, fontSize: 11.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      s.addText(it.d, { x: x + 0.16, y: y + 0.52, w: 2.55, h: 0.68, fontSize: 9, fontFace: "Microsoft YaHei", color: C.textMid, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
      s.addText(it.tag, { x: x + 0.16, y: y + 1.3, w: 2.55, h: 0.22, fontSize: 9.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText("前置：" + it.pre, { x: x + 0.16, y: y + 1.54, w: 2.55, h: 0.22, fontSize: 9, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0 });
    });
    calloutBar(s, "必做主线：7.1 → 7.2 → 7.5 → 7.6；7.3、7.4 按前置条件选做；7.5/7.6 依赖 7.2。", 5.1);
  }
};