// slide-15.js — Ollama 本地部署实操（步骤 + 命令代码块 + 安全提示）
const { C, sectionTitle, numBadge, codeBlock, warnBar } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 15, title: "Ollama 本地部署实操" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "Ollama 本地部署实操");
    s.addText("Ollama 是开源的本地大模型部署工具，能让模型完全运行在你的电脑上，数据不出本机。接入步骤如下：", {
      x: 0.6, y: 1.06, w: 5.3, h: 0.45, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0, lineSpacingMultiple: 1.2
    });
    const steps = [
      { t: "安装 Ollama", d: "前往 Ollama 官网（ollama.com）下载对应操作系统的安装包并完成安装" },
      { t: "拉取模型", d: "终端执行 ollama pull ＜模型名＞（如 ollama pull qwen2.5），模型下载到本地" },
      { t: "确认服务", d: "Ollama 默认监听本机 11434 端口；执行 ollama list 查看已拉取的模型列表" },
      { t: "在 WorkBuddy 中接入", d: "模型管理中选择 Ollama 本地部署，填入服务地址与模型名称（无需 API Key）" },
      { t: "测试验证", d: "发送测试消息确认本地模型可用" },
    ];
    steps.forEach((it, i) => {
      const y = 1.62 + i * 0.68;
      numBadge(s, 0.68, y + 0.05, i + 1);
      s.addText(it.t, { x: 1.32, y: y + 0.02, w: 2.6, h: 0.32, fontSize: 12, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 1.32, y: y + 0.3, w: 4.5, h: 0.4, fontSize: 9.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.15 });
    });
    s.addText("Ollama 常用命令", {
      x: 6.15, y: 1.32, w: 3.3, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0
    });
    codeBlock(s, 6.15, 1.68, 3.35, 1.8, "ollama pull qwen2.5\nollama list\n\n# 服务默认监听\n# 本机 11434 端口", 12);
    warnBar(s, "安全提示：本地模型体积通常达数 GB，请预留磁盘空间；推理性能取决于本机显卡与内存配置，轻量设备建议选择小参数模型。", 4.85);
  }
};