// slide-13.js — 四种接入方式（四卡片）
const { C, sectionTitle, card, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 13, title: "四种接入方式" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "四种接入方式");
    s.addText("系统支持以下 4 种接入方式，满足不同团队的合规性、成本控制及特殊业务需求；所有配置保存后即时生效。", {
      x: 0.6, y: 1.08, w: 8.8, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const items = [
      { t: "Token Plan", d: "腾讯云 Token Plan 专为 AI 编程和 WorkBuddy 场景打造，提供面向个人、企业多种类型的订阅套餐，兼容混元、MiniMax、Kimi、GLM 等主流大模型", strip: C.primary },
      { t: "Coding Plan", d: "专为开发者打造的 AI Coding 场景专属订阅模式，提供针对代码补全和重构优化的专属算力", strip: C.secondary },
      { t: "提供商接入", d: "适合已有企业级 API 权限的用户：从预设厂商列表选择服务商，系统自动填充 API URL、可用模型列表及能力标记，用户仅需补全 API Key", strip: C.accent },
      { t: "Ollama 本地部署", d: "针对数据隐私要求极高的内网、合规性严格或完全离线的环境：本地安装启动 Ollama 服务后直接连接本地模型，全程无需 API Key 验证", strip: C.accentWarm },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + (i % 2) * 4.55;
      const y = 1.55 + Math.floor(i / 2) * 1.8;
      card(s, x, y, 4.3, 1.62, it.strip);
      s.addText(it.t, { x: x + 0.2, y: y + 0.12, w: 3.9, h: 0.42, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.58, w: 3.9, h: 0.95, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.25 });
    });
    s.addText("官方文档《模型配置》：https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Model", {
      x: 0.85, y: 4.25, w: 8.3, h: 0.35,
      fontSize: 8.5, fontFace: "Consolas", color: C.textMid, margin: 0
    });
    calloutBar(s, "另有自定义 API/自定义方式等入口，以官方文档为准；所有配置保存后即时生效。", 4.72);
  }
};