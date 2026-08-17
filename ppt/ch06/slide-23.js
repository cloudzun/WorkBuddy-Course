// slide-23.js — 常见问题排查（三卡片）
const { C, sectionTitle, card, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 23, title: "常见问题排查" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "常见问题排查");
    const items = [
      { t: "配置后模型无响应", d: "按三查排查：查 API Key 是否有效、查网络是否可达、查模型名称是否与厂商标识一致", strip: C.accentWarm },
      { t: "能对话但无法识图/调用工具", d: "检查能力标记是否已正确配置，优先开启“能力标记自动写入”", strip: C.accent },
      { t: "Ollama 本地连接失败", d: "确认 Ollama 服务已启动、地址与端口（默认 11434）填写正确，并检查防火墙是否放行", strip: C.primary },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.02;
      card(s, x, 1.55, 2.85, 2.75, it.strip);
      numBadge(s, x + 0.16, 1.67, i + 1, it.strip);
      s.addText(it.t, { x: x + 0.16, y: 2.25, w: 2.55, h: 0.5, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.15 });
      s.addText(it.d, { x: x + 0.16, y: 2.85, w: 2.55, h: 1.3, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textMid, valign: "top", margin: 0, lineSpacingMultiple: 1.3 });
    });
    calloutBar(s, "排查顺序建议：先查 Key 与网络，再核模型名称，最后检查能力标记与本地服务状态。", 4.6);
  }
};