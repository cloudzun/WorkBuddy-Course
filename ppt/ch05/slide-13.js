// slide-13.js — 分隔页 5.3
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 13, title: "资料库核心能力" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "5.3", "资料库核心能力", [
      "5.3.1 深度集成与平台支持：腾讯文档、ima 知识库、乐享知识库与本地文件",
      "5.3.2 资料库功能优势：AI 深度集成、产物存回、账号绑定、无需切换",
      "5.3.3 双模检索：语义搜索与关键词搜索",
    ]);
  }
};