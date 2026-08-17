// slide-21.js — 分隔页 配套实验
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 21, title: "配套实验：综合演练" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "实验", "配套实验：综合演练（咖啡品牌季度经营分析）", [
      "贯穿式演练主线：我的咖啡品牌·季度经营分析（labs/ch09-labs.md）",
      "阶段 0-7 全链路：任务拆解 → 数据分析 → 报告 → PPT → 深度研究 → 轻量发布 → 自动化 → OPC 复盘",
      "建议用时 4-6 小时（可分 2 次完成），★ 必做 / ○ 可选",
      "最终输出可对外交付的作品集，并用综合评分表（自评 + 讲师评）验收",
    ]);
  }
};