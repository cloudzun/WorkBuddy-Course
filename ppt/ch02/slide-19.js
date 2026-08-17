// slide-19.js — 2.5 分隔页：工作空间与任务归档
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 19, title: "工作空间与任务归档" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "2.5", "工作空间与任务归档", [
      "工作空间 = 项目目录 + 任务集合 + 上下文配置",
      "多任务并行与资源隔离",
      "归档 vs 删除",
    ]);
  }
};
