// slide-12.js — 分隔页 6.4
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 12, title: "自定义模型接入" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "6.4", "自定义模型接入", [
      "满足不同团队的合规性、成本控制及特殊业务需求",
      "6.4.1 四种接入方式：Token Plan / Coding Plan / 提供商接入 / Ollama 本地部署",
      "6.4.2 配置四要素：Base URL、模型名称、API Key、能力标记",
      "6.4.3 Ollama 本地部署实操：数据不出本机，全程无需 API Key",
      "6.4.4 接入方式选择建议：按人群与场景匹配",
    ]);
  }
};