// slide-16.js — 接入方式选择建议（四卡片）
const { C, sectionTitle, card, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 16, title: "接入方式选择建议" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "接入方式选择建议");
    s.addText("四种接入方式各有适用人群：按计费偏好、开发占比与数据敏感度来选。", {
      x: 0.6, y: 1.08, w: 8.8, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const items = [
      { t: "Token Plan", d: "适合需要按需灵活计费的个人或团队", strip: C.primary },
      { t: "Coding Plan", d: "适合以代码开发为主的开发者", strip: C.secondary },
      { t: "提供商接入", d: "适合已经持有企业级 API 权限、追求开箱即用的用户", strip: C.accent },
      { t: "Ollama 本地部署", d: "涉及公司核心机密或敏感数据的工作空间，务必优先考虑本地方案", strip: C.accentWarm },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + (i % 2) * 4.55;
      const y = 1.6 + Math.floor(i / 2) * 1.55;
      card(s, x, y, 4.3, 1.38, it.strip);
      s.addText(it.t, { x: x + 0.2, y: y + 0.12, w: 3.9, h: 0.42, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.6, w: 3.9, h: 0.68, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.25 });
    });
    calloutBar(s, "选择逻辑：按需灵活计费选 Token Plan，代码开发为主选 Coding Plan，已有企业权限选提供商接入，敏感数据必选 Ollama 本地部署。", 4.72);
  }
};