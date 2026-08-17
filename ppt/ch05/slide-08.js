// slide-08.js — 5.2.1 内置连接器概览
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 8, title: "内置连接器概览" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "内置连接器概览");
    s.addText("WorkBuddy 提供了丰富的内置连接器，覆盖了主流的企业协作和研发工具，做到开箱即用。", {
      x: 0.6, y: 1.08, w: 8.8, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const items = [
      { t: "腾讯生态（预置）", d: "包括 QQ 邮箱、腾讯乐享、腾讯文档、腾讯会议、TAPD、腾讯网盘等，深度整合了腾讯系应用的接口（以当前最新版本为准）", strip: C.primary },
      { t: "第三方服务（非预置）", d: "GitHub、Notion、金山文档等并非预置连接器，可通过自定义 MCP 连接器按需接入", strip: C.accentWarm },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      card(s, x, 1.6, 4.3, 2.1, it.strip);
      s.addText(it.t, { x: x + 0.2, y: 1.72, w: 3.9, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: 2.25, w: 3.9, h: 1.35, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.25 });
    });
    s.addShape("rect", { x: 0.6, y: 3.95, w: 8.8, h: 0.6, fill: { color: C.bgCard } });
    s.addShape("rect", { x: 0.6, y: 3.95, w: 0.07, h: 0.6, fill: { color: C.accent } });
    s.addText("除此以外，你还可以通过自定义方式接入任何支持 MCP 协议的服务。", {
      x: 0.95, y: 3.95, w: 8.2, h: 0.6, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0
    });
    s.addText("官方文档：《连接器》 https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Connector", {
      x: 0.6, y: 4.85, w: 8.8, h: 0.32, fontSize: 9, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};