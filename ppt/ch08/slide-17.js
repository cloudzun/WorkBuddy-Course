// slide-17.js — 分隔页：配套实验
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 17, title: "配套实验 8.1-8.4" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "实验", "第 8 章配套实验（labs/ch08-labs.md）", [
      "实验 8.1 创建第一个自动化任务：官方六项配置 + 每日定时资讯简报",
      "实验 8.2 循环 vs 单次调度：执行频率与生效日期区间对比",
      "实验 8.3 自动化提示词最佳实践：有无异常处理的输出对比",
      "实验 8.4 混合模式过渡：先手动跑通 → 验证 → 转自动化",
    ]);
  }
};