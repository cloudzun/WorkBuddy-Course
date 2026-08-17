// slide-14.js — 生成专属版本（对比卡片）
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 14, title: "生成专属版本" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "直接生成 or 修改细节生成专属版本");
    const left = { t: "直接生成", d: "沿用社区验证过的原始 Prompt，快速拿到标准成品，适合：\n· 场景与案例高度匹配\n· 追求速度与稳妥", strip: C.primary };
    const right = { t: "修改细节生成专属版本", d: "对预填 Prompt 做少量微调后再发送，适合：\n· 替换具体对象、期限\n· 调整输出格式与风格", strip: C.accent };
    const items = [left, right];
    items.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      card(s, x, 1.5, 4.3, 2.6, it.strip);
      s.addText(it.t, { x: x + 0.2, y: 1.65, w: 3.9, h: 0.5, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: 2.2, w: 3.9, h: 1.7, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.35 });
    });
    calloutBar(s, "微调原则：小改为主——只动对象、期限、格式，保留案例验证过的结构。", 4.5);
    calloutBar(s, "Tips：如果改了结构后效果变差，可回到原案例重新“做同款”再试。", 5.05);
    function calloutBar(s, text, y) {
      s.addShape("rect", { x: 0.6, y, w: 8.8, h: 0.42, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y, w: 0.05, h: 0.42, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y, w: 8.3, h: 0.42, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
