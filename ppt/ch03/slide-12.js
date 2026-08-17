// slide-12.js — 收藏管理（卡片）
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 12, title: "收藏管理" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "收藏：把“宝藏案例”存起来");
    const items = [
      { t: "红心收藏", d: "在案例详情页点击红心图标，将案例加入收藏", strip: C.primary },
      { t: "收藏列表", d: "从灵感模块进入收藏列表，随时取用已收藏的案例（入口以产品实际界面为准）", strip: C.secondary },
      { t: "取用复刻", d: "收藏不占用资源，等真正需要时再“做同款”一键复刻", strip: C.accent },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.02;
      card(s, x, 1.6, 2.85, 2.2, it.strip);
      s.addText(it.t, { x: x + 0.16, y: 1.75, w: 2.55, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.16, y: 2.3, w: 2.55, h: 1.3, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.3 });
    });
    calloutBar(s, "浏览时“先收藏、后使用”：好案例不会丢，灵感大厅逛得更从容。", 4.3);
    calloutBar(s, "收藏后的案例可直接进入详情页执行“做同款”，无需重新搜索。", 4.9);
    function calloutBar(s, text, y) {
      s.addShape("rect", { x: 0.6, y, w: 8.8, h: 0.45, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y, w: 0.05, h: 0.45, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y, w: 8.3, h: 0.45, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
