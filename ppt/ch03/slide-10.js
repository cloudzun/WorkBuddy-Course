// slide-10.js — 探索与查找灵感（步骤 + 分类提示）
const { C, sectionTitle, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 10, title: "探索与查找灵感" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "探索与查找灵感");
    const steps = [
      { t: "打开入口", d: "点击左侧边栏的“更多”选项" },
      { t: "进入灵感", d: "在弹出的菜单中点击“灵感”，进入灵感模块主页" },
      { t: "浏览大厅", d: "按场景分类浏览，或查看精选板块的热门案例" },
    ];
    steps.forEach((it, i) => {
      const y = 1.35 + i * 0.7;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(it.t, { x: 1.35, y, w: 2.4, h: 0.55, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 3.9, y, w: 5.5, h: 0.55, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    s.addShape("rect", { x: 0.6, y: 3.5, w: 8.8, h: 1.0, fill: { color: C.bgCard }, shadow: mkSh() });
    s.addShape("rect", { x: 0.6, y: 3.5, w: 0.07, h: 1.0, fill: { color: C.accent } });
    s.addText("七大场景", { x: 0.95, y: 3.6, w: 1.6, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
    s.addText("官方概述：“精心打磨的七大场景，覆盖日常和工作中的高频需求”；具体类别名称与数量以产品内实际展示为准。", {
      x: 0.95, y: 4.02, w: 8.2, h: 0.4, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0
    });
    calloutBar(s, "按需挑选、无需从零定义——先浏览，再决定要“做同款”哪一个。", 4.8);
    function mkSh() {
      return { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 };
    }
  }
};
