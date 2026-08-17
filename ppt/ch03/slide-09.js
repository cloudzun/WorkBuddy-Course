// slide-09.js — 分隔页 3.2
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 9, title: "灵感模块操作指南" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "3.2", "灵感模块操作指南", [
      "探索与查找：左侧边栏 → 更多 → 灵感，七大场景分类",
      "预览与评估：案例详情页，左侧预览 + 右侧介绍，红心收藏",
      "一键复刻：点击“做同款”，Prompt 自动预填，Skill 与专家自动加载",
      "查看与管理产物：产物页预览、下载到本地或保存到工作空间",
    ]);
  }
};
