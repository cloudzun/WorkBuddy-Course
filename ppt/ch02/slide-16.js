// slide-16.js — 2.4.1 结果区四类内容（卡片）
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 16, title: "结果区四类内容" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "结果区四类内容（官方口径：概览）");
    const items = [
      { t: "工作空间文件", d: "树状浏览当前工作空间所有文件，快速对照定位", strip: C.primary },
      { t: "浏览器", d: "内置轻量浏览器，实时预览网页 / UI 原型", strip: C.secondary },
      { t: "变更", d: "Diff 对比文本/代码修改，遵循“先看再接受”", strip: C.accent },
      { t: "产物", d: "最终交付物聚合入口：免下载预览、下载、分享", strip: C.accentWarm },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + (i % 2) * 4.55;
      const y = 1.35 + Math.floor(i / 2) * 1.65;
      card(s, x, y, 4.3, 1.45, it.strip);
      s.addText(it.t, { x: x + 0.2, y: y + 0.12, w: 3.9, h: 0.45, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.6, w: 3.9, h: 0.75, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.25 });
    });
    callout(s, "检视是持续的：右侧视图随对话指令实时刷新迭代，无需离开任务流。");
    function callout(s, text) {
      s.addShape("rect", { x: 0.6, y: 4.8, w: 8.8, h: 0.45, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: 4.8, w: 0.05, h: 0.45, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y: 4.8, w: 8.3, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
