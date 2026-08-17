// slide-07.js — 4.1.4 技能市场与日常管理
const { C, sectionTitle, card, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 7, title: "技能市场与日常管理" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "技能市场与日常管理");
    s.addText("请参见产品界面：侧边栏 > 技能市场。页面分“推荐区”与“已安装区”两大区域，右上角提供“添加技能”按钮。", {
      x: 0.6, y: 1.12, w: 8.8, h: 0.4, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const areas = [
      { t: "推荐区", d: "展示当前热门的技能包，用户可以通过一键安装将其添加到系统中。", strip: C.primary },
      { t: "已安装区", d: "按分类清晰展示用户目前拥有的所有技能，支持快速搜索、启用或关闭状态的切换以及批量管理操作。", strip: C.secondary },
    ];
    areas.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      card(s, x, 1.6, 4.3, 1.35, it.strip);
      s.addText(it.t, { x: x + 0.2, y: 1.72, w: 3.9, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: 2.18, w: 3.9, h: 0.7, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
    });
    s.addText("日常管理三板斧", { x: 0.6, y: 3.2, w: 4.0, h: 0.35, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
    const ops = [
      { t: "开关切换", d: "点击技能卡片上的三个小点，切换其开关状态" },
      { t: "实时搜索", d: "利用搜索框输入关键词，实时筛选出目标技能" },
      { t: "灵活卸载", d: "系统支持单独卸载和批量卸载" },
    ];
    ops.forEach((it, i) => {
      const x = 0.6 + i * 3.02;
      card(s, x, 3.62, 2.85, 0.85, C.accent);
      s.addText(it.t, { x: x + 0.2, y: 3.7, w: 2.5, h: 0.32, fontSize: 12, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: 4.03, w: 2.5, h: 0.38, fontSize: 9.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.15 });
    });
    calloutBar(s, "最佳实践：不确定是否还要保留某个技能时，建议先将其“关闭”，避免急于卸载后再次需要时重新配置的麻烦。", 4.8);
  }
};