// slide-17.js — 分隔页 9.6
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 17, title: "OPC 概念与超级个体崛起" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "9.6", "OPC 概念与超级个体崛起", [
      "9.6.1 OPC 一人公司：AI 时代以个体为核心的新型创业形态",
      "9.6.2 超级个体：四大显著特征 + 三层能力模型（课程归纳框架）",
      "方向判断、战略决策与审美/品味层由人类主导",
    ]);
  }
};