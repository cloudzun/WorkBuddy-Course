// slide-03.js — 分隔页 9.1
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 3, title: "文档与协作" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "9.1", "文档与协作", [
      "9.1.1 典型文档生成：工作报告、技术文档、会议纪要等高频文档",
      "9.1.2 人机双写：生成初稿后与 AI 协同编辑（MD 审阅与 AI 修订）",
      "多人多 Agent 协作：资料库在线协作，保障大型项目文档的版本一致",
    ]);
  }
};