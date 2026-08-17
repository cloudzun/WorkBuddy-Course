// slide-22.js — 分隔页 配套实验
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 22, title: "第 4 章配套实验" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "实验", "第 4 章配套实验", [
      "图例：★ 必做实验（仅需 WorkBuddy 基础环境）；○ 可选实验（需额外账号/权限/配置）",
      "实验 4.1-4.3：技能市场与管理、技能调用验证、技能的三种安装方式",
      "实验 4.4-4.6：召唤专家、专家团与 Multi-Agent、创建自定义专家",
      "配套文档：labs/ch04-labs.md",
    ]);
  }
};