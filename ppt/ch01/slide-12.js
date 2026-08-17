// slide-12.js — 1.3 分隔页：主界面与核心功能
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 12, title: "主界面与核心功能" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "1.3", "主界面与核心功能", [
      "主界面三大区域：导航 / 对话 / 结果",
      "新建任务栏：工作模式、模型、技能、连接器、工作空间、权限",
      "任务状态、结果区与专家体系",
      "系统设置、数据管理与记忆管理",
    ]);
  }
};
