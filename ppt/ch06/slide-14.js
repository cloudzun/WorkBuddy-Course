// slide-14.js — 配置四要素与连通验证（步骤 + 三查警示）
const { C, sectionTitle, numBadge, warnBar } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 14, title: "配置四要素与连通验证" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "配置四要素与连通验证", C.bgLight);
    s.addText("无论采用哪种接入方式，配置一个自定义模型通常需要确认以下四要素：", {
      x: 0.6, y: 1.08, w: 8.8, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const steps = [
      { t: "Base URL", d: "模型 API 服务的访问地址（Ollama 本地服务为 http://127.0.0.1:11434）" },
      { t: "模型名称", d: "与厂商侧的模型标识保持一致，填错将无法调用" },
      { t: "API Key", d: "服务端的鉴权凭证（Ollama 本地部署除外）" },
      { t: "能力标记", d: "标注模型是否支持识图、长文本、工具调用，可借助“能力标记自动写入”完成" },
    ];
    steps.forEach((it, i) => {
      const y = 1.5 + i * 0.62;
      numBadge(s, 0.7, y + 0.05, i + 1);
      s.addText(it.t, { x: 1.35, y, w: 2.1, h: 0.55, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 3.6, y, w: 5.8, h: 0.55, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    s.addShape("rect", { x: 0.6, y: 4.08, w: 8.8, h: 0.5, fill: { color: C.bgCard } });
    s.addShape("rect", { x: 0.6, y: 4.08, w: 0.07, h: 0.5, fill: { color: C.accent } });
    s.addText("验证连通：配置完成后，发送一条测试消息（如“你好，请介绍一下你自己”）确认模型有响应。", {
      x: 0.9, y: 4.08, w: 8.2, h: 0.5, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0
    });
    warnBar(s, "若模型无响应，按三查排查：查 Key 是否有效、查网络是否可达、查模型名称是否准确。", 4.75);
  }
};