// slide-18.js — 9.6.1 OPC 一人公司商业形态（概念 + 商业模式方向 + 数据口径提醒）
const { C, sectionTitle, card, bigCallout, warnBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 18, title: "OPC 一人公司商业形态" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "9.6.1 OPC 一人公司商业形态");
    bigCallout(s, "OPC（One Person Company，一人公司）是 AI 时代以个体为核心的新型创业形态。", 1.1, 0.7);
    card(s, 0.6, 2.0, 4.35, 1.15, C.primary);
    s.addText("打破组织边界", { x: 0.85, y: 2.1, w: 3.9, h: 0.35, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
    s.addText("个人也能够承接过去需要一整个团队才能完成的复杂商业项目；得益于 AI 生产力的极大释放，OPC 模式正快速普及。", {
      x: 0.85, y: 2.5, w: 3.85, h: 0.6, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.15
    });
    card(s, 5.05, 2.0, 4.35, 1.15, C.accent);
    s.addText("典型从业者", { x: 5.3, y: 2.1, w: 3.9, h: 0.35, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
    s.addText("面向独立开发者、小微创业者以及自由职业者的 OPC 模式，正借助 AI 完成过去难以想象的商业闭环。", {
      x: 5.3, y: 2.5, w: 3.85, h: 0.6, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.15
    });
    s.addText("商业模式方向（行业观察归纳，非官方分类，具体以官方文档为准）", {
      x: 0.6, y: 3.35, w: 8.8, h: 0.3, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0
    });
    const dirs = ["专业服务", "高端定制", "平台资源整合", "知识产品变现", "数字产品（SaaS / API）", "创意内容生产"];
    dirs.forEach((t, i) => {
      const x = 0.6 + (i % 3) * 3.05;
      const y = 3.75 + Math.floor(i / 3) * 0.5;
      s.addShape("rect", { x, y, w: 2.85, h: 0.42, fill: { color: C.bgCard }, shadow: mkSh() });
      s.addShape("rect", { x, y, w: 0.06, h: 0.42, fill: { color: C.accent } });
      s.addText(t, { x, y, w: 2.85, h: 0.42, fontSize: 11, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", valign: "middle", margin: 0 });
    });
    warnBar(s, "口径提醒：网络流传的“1600 万家、占企业总量 27.4%”出自第三方媒体，口径对应工商登记的“一人有限责任公司”，与本书定义的 AI 时代 OPC 创业形态并非同一概念，仅供参考。", 4.9);
    function mkSh() {
      return { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 };
    }
  }
};