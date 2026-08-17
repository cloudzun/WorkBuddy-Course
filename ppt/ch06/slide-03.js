// slide-03.js — 分隔页 6.1
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 3, title: "大模型推理模式" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "6.1", "大模型推理模式", [
      "6.1.1 标准推理模式：日常默认主力，追求“够用、快、省”",
      "6.1.2 深度思考模式（Thinking）：思维链推演，适合复杂任务",
      "官方提供“均衡/快速/极致”三档模型选择，内置模型区分为思考模式与推理模型",
      "判断标准：任务越依赖“推理过程”，越值得启用 Thinking",
    ]);
  }
};