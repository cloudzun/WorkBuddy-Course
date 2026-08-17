// slide-08.js — 四大功能优势（四卡片）
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 8, title: "四大功能优势" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "灵感模块的四大核心优势", C.bgLight);
    const items = [
      { t: "场景全覆盖", d: "无论行业或岗位，都能找到对应案例，满足多样化业务需求", strip: C.primary },
      { t: "节省 Token 成本", d: "避免反复修改提示词与多次试错带来的资源消耗", strip: C.secondary },
      { t: "一键复刻", d: "复杂配置瞬间就位，几十分钟的配置工作压缩至几秒钟", strip: C.accent },
      { t: "社区智慧沉淀", d: "汇聚平台最优秀的使用经验与创意，不断进化生长的知识库", strip: C.accentWarm },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + (i % 2) * 4.55;
      const y = 1.4 + Math.floor(i / 2) * 1.85;
      card(s, x, y, 4.3, 1.65, it.strip);
      s.addText(it.t, { x: x + 0.2, y: y + 0.14, w: 3.9, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.64, w: 3.9, h: 0.9, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.25 });
    });
    calloutBar(s, "本质：把“别人的最优解”变成“你的开箱即用”。");
    function calloutBar(s, text, y) {
      const by = y || 5.0;
      s.addShape("rect", { x: 0.6, y: by, w: 8.8, h: 0.4, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: by, w: 0.05, h: 0.4, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y: by, w: 8.3, h: 0.4, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
