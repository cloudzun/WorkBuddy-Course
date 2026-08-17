// slide-23.js — 分隔页：配套实验
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 23, title: "配套实验 2.1-2.5" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "实验", "第 2 章配套实验（labs/ch02-labs.md）", [
      "实验 2.1 三要素公式对比：模糊指令 vs 三要素指令的产物质量差异",
      "实验 2.2 四种上下文挂载：@引用 / 截图 / 文件 / 补充说明",
      "实验 2.3 对话追问与打断：多轮上下文保持与修正",
      "实验 2.4 结果区检视与产物交付：四类内容 + 预览 / 下载 / 分享",
      "实验 2.5 任务状态与工作空间：六态流转 + 归档 vs 删除",
    ]);
  }
};
