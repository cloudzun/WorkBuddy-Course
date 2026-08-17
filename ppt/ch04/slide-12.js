// slide-12.js — 分隔页 4.3
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 12, title: "专家与专家团" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "4.3", "专家与专家团", [
      "专家（Agent）：独立人设 + 专属方法论 + 特定工具链，单兵作战",
      "专家团（Team）：“团长 + 多专家”的 Multi-Agent 协作团队，攻坚复杂项目",
      "Skill、专家、专家团的能力进阶链与一句话速记",
      "召唤与自定义流程；Multi-Agent 五阶段协作原理",
    ]);
  }
};