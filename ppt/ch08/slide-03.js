// slide-03.js — 分隔页 8.1
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 3, title: "自动化任务概述" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "8.1", "自动化任务概述", [
      "8.1.1 核心概念与调度机制：周期性、重复性任务的定时执行",
      "8.1.2 自动化与手动执行的协同：按任务性质选择执行方式",
      "8.1.3 安全与权限边界：后台静默运行，权限校验意识不可缺",
    ]);
  }
};