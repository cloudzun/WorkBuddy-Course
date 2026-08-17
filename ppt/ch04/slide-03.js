// slide-03.js — 分隔页 4.1
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 3, title: "技能系统" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "4.1", "技能系统", [
      "技能与普通对话的区别：专业工具箱 vs 模型发散推理",
      "底层运行机制：预定义工具函数（TOOL）+ Function Calling",
      "安全沙箱：隔离目录、按需授权、危险操作人工确认",
      "技能市场与日常管理：推荐区/已安装区、启停、搜索、卸载",
      "三种安装方式：上传导入 / 查找与推荐 / 对话式创建",
    ]);
  }
};