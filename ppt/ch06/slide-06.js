// slide-06.js — 分隔页 6.2
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 6, title: "内置模型与能力标记" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "6.2", "内置模型与能力标记", [
      "6.2.1 内置模型概览：Auto 自动模式 + 五大主流基座模型",
      "6.2.2 能力标记：标注识图、长文本、工具调用等高级特性，构成模型的能力画像",
      "系统按任务需求优先匹配带有对应能力标记的模型",
      "自定义模型善用“能力标记自动写入”，减少手动配置错误",
    ]);
  }
};