// slide-08.js — 分隔页 9.3
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 8, title: "演示文稿与视觉设计" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "9.3", "演示文稿与视觉设计", [
      "9.3.1 智能化 PPT 制作：需求到大纲 → 生成 → 美化 → 演示辅助",
      "9.3.2 设计创意模式：界面稿、PPT 排版、交互原型、Logo 与海报",
      "非设计专业的业务人员也能快速构建高质量的视觉素材",
    ]);
  }
};