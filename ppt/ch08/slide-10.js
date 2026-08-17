// slide-10.js — 分隔页 8.2
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 10, title: "创建与管理自动化任务" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "8.2", "创建与管理自动化任务", [
      "8.2.1 任务创建流程与核心配置：入口与官方六项配置",
      "8.2.2 提示词编写与最佳实践：无人值守下的提示词设计",
      "8.2.3 典型场景模板应用：工作 / 学习 / 生活 / 娱乐",
      "8.2.4 移动端推送配置：执行结果同步至微信小程序",
    ]);
  }
};