// slide-05.js — 5.1.2 深入理解 MCP 协议（三类资源 + 传输方式 + 安全）
const { C, sectionTitle, card, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 5, title: "深入理解 MCP 协议" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "深入理解 MCP 协议", C.bgLight);
    s.addText("MCP 协议最初由 Anthropic 发起，旨在成为开放且通用的标准。架构分为两端：WorkBuddy 扮演 Client（客户端），外部服务则是 Server（服务端）。", {
      x: 0.6, y: 1.1, w: 8.8, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    s.addText("Server 可以向 Client 暴露三种类型的资源：", {
      x: 0.6, y: 1.62, w: 8.8, h: 0.35, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0
    });
    const items = [
      { t: "Tools（工具）", d: "允许 AI 执行外部动作", strip: C.primary },
      { t: "Resources（资源）", d: "向 AI 提供外部的数据内容", strip: C.accent },
      { t: "Prompts（提示词）", d: "提供特定场景的系统指令", strip: C.accentWarm },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.02;
      card(s, x, 2.02, 2.85, 1.3, it.strip);
      s.addText(it.t, { x: x + 0.2, y: 2.14, w: 2.5, h: 0.45, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: 2.6, w: 2.5, h: 0.6, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
    });
    const rows = [
      { k: "传输方式", d: "现行 MCP 规范定义两种标准传输：stdio（本地进程通信）与 Streamable HTTP（远程服务，早期 HTTP+SSE 已被其取代）" },
      { k: "安全性", d: "独立鉴权机制：权限授予遵循按需原则，授权外部服务时只需提供最小必要权限，且这些权限随时可以被撤销" },
    ];
    rows.forEach((it, i) => {
      const y = 3.55 + i * 0.5;
      s.addShape("rect", { x: 0.6, y: y + 0.08, w: 0.22, h: 0.22, fill: { color: C.accent } });
      s.addText(it.k, { x: 1.0, y, w: 1.6, h: 0.4, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 2.7, y, w: 6.7, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "依据 MCP 官方规范，以最新规范为准。");
  }
};