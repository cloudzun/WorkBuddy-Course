// slide-23.js — 实验引导（2×2 卡片）
const { C, sectionTitle, card, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 23, title: "实验引导" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "第 5 章配套实验（labs/ch05-labs.md）", C.bgLight);
    const labs = [
      { n: "5.1", t: "内置连接器接入", d: "连接器管理入口、OAuth 扫码授权、scope 权限确认、连接状态（绿色圆点）", tag: "○ 可选", pre: "前置：可用账号（QQ 邮箱/腾讯文档/乐享等）及对应 App" },
      { n: "5.2", t: "自定义 MCP 连接器", d: "mcp.json 配置（command/args/env 或 url/headers）、MCP Server 状态验证", tag: "○ 可选", pre: "前置：可运行的 MCP 服务，或腾讯云 MCP 市场现成配置" },
      { n: "5.3", t: "资料库连接与双模搜索", d: "连接资料库平台（腾讯文档/ima/乐享）；语义搜索 vs 关键词搜索", tag: "○ 可选", pre: "前置：完成 5.1 的资料库类连接，或直接连接腾讯文档/ima/乐享" },
      { n: "5.4", t: "资料引用与存回闭环", d: "引用资料（添加到任务）→ AI 加工 → 产物上传到云端（取 → 用 → 存）", tag: "○ 可选", pre: "前置：完成 5.3" },
    ];
    labs.forEach((it, i) => {
      const x = 0.6 + (i % 2) * 4.55;
      const y = 1.3 + Math.floor(i / 2) * 1.78;
      card(s, x, y, 4.3, 1.62, C.primary);
      numBadge(s, x + 0.16, y + 0.13, it.n, C.primary);
      s.addText(it.t, { x: x + 0.75, y: y + 0.12, w: 3.4, h: 0.42, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      s.addText(it.d, { x: x + 0.16, y: y + 0.6, w: 4.0, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textMid, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
      s.addText(it.tag, { x: x + 0.16, y: y + 1.24, w: 2.5, h: 0.28, fontSize: 10, fontFace: "Microsoft YaHei", bold: true, color: C.accentWarm, margin: 0 });
      s.addText(it.pre, { x: x + 2.0, y: y + 1.24, w: 2.2, h: 0.32, fontSize: 8.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0 });
    });
    calloutBar(s, "实验顺序建议：5.1 → 5.2 → 5.3 → 5.4；5.3 依赖 5.1 的资料库类连接，5.4 依赖 5.3。", 4.98);
  }
};