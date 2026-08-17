// slide-16.js — 分隔页 3.3
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 16, title: "灵感、技能与专家的关系" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "3.3", "灵感、技能与专家的关系预览", [
      "技能（Skill）：能做什么 —— 具体的“能力”或“工具”",
      "专家：谁能帮我做 —— “能力 + 经验”的专业角色",
      "灵感：做出来是怎样的 —— 最终的“成品”或“作品”",
      "为第 4 章逐一拆解技能、专家与专家团建立认知锚点",
    ]);
  }
};
