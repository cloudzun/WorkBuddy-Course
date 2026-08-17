// slide-06.js — 分隔页 9.2
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 6, title: "数据分析与图表可视化" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "9.2", "数据分析与图表可视化", [
      "9.2.1 数据处理全流程：导入 → 自动分析 → 可视化 → 解读汇报",
      "端到端自动化，替代传统耗时且容易出错的处理方式",
      "官方实践三：数据分析并可视化",
    ]);
  }
};