// slide-19.js — 4.4.1 专家中心概览
const { C, sectionTitle, card, bigCallout, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 19, title: "专家中心概览" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "专家中心概览", C.bgLight);
    s.addShape("rect", { x: 0.6, y: 1.12, w: 8.8, h: 0.4, fill: { color: C.bgBlue } });
    s.addText("请参见产品界面：左侧导航栏的[专家中心]模块。", {
      x: 0.8, y: 1.12, w: 8.5, h: 0.4, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0
    });
    const items = [
      { t: "领域覆盖", d: "专家中心内置了覆盖法律、财务、品牌、研究、产品与技术等多个细分领域的虚拟专家团队（Team），具体覆盖数量以产品内实际展示为准。", strip: C.primary },
      { t: "按需召唤", d: "支持按行业分类浏览、按需召唤；你可以随时根据项目需求，召唤对应领域的专家进行深度咨询与任务执行。", strip: C.accent },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      card(s, x, 1.7, 4.3, 2.0, it.strip);
      s.addText(it.t, { x: x + 0.2, y: 1.82, w: 3.9, h: 0.45, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: 2.35, w: 3.9, h: 1.25, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.25 });
    });
    bigCallout(s, "让超级个体轻松调配不同领域的专业资源——专家团随需应召、深度咨询、任务执行。", 3.95, 0.75);
    calloutBar(s, "覆盖多领域、随需召唤：项目不同阶段，都有对口领域的专家团可用。", 4.85);
    s.addText("官方文档《专家》：https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Expert-Center", {
      x: 0.6, y: 5.42, w: 8.8, h: 0.2,
      fontSize: 8, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};