// slide-14.js — 分隔页 9.5
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 14, title: "综合实战案例与提效技巧" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "9.5", "综合实战案例与提效技巧", [
      "9.5.1 案例串联：季度经营分析汇报——数据 → 报告 → PPT → 讲稿一次贯通",
      "9.5.2 自驱协作：自驱四要素（说清目标 / 指定输出 / 限定边界 / 自检后交付）",
      "小步快跑：将大项目拆解为多个子任务迭代进行",
      "配套实验：综合演练（我的咖啡品牌·季度经营分析）复刻全链路",
    ]);
  }
};