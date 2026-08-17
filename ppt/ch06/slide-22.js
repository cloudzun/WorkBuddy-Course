// slide-22.js — 最佳实践五条（步骤）
const { C, sectionTitle, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 22, title: "最佳实践五条" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "模型管理最佳实践五条", C.bgLight);
    const items = [
      { t: "优先 Auto 模式", d: "在非特定专业需求下，尽可能使用系统的 Auto 模式，以获得最佳的响应速度与稳定性" },
      { t: "利用能力标记", d: "配置第三方模型时，善用“能力标记自动写入”功能，确保准确识别识图、工具调用等高级特性" },
      { t: "Ollama 离线首选", d: "涉及公司核心机密代码或敏感财务数据的工作空间，务必首选 Ollama 本地部署方案" },
      { t: "灵活应用自定义协议", d: "自建内部大模型网关或非标准 URL 的服务，通过自定义 OpenAI 兼容协议灵活对接" },
      { t: "API Key 严格管控", d: "将 API Key 视为最高级别的机密凭证，避免在非加密文档或公共代码库中明文保存" },
    ];
    items.forEach((it, i) => {
      const y = 1.35 + i * 0.62;
      numBadge(s, 0.7, y + 0.05, i + 1);
      s.addText(it.t, { x: 1.35, y, w: 2.9, h: 0.55, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 4.35, y, w: 5.05, h: 0.55, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "五条实践可归纳为：能默认就 Auto，能离线就 Ollama，密钥只进加密保管。", 4.72);
  }
};