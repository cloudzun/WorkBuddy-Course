// slide-19.js — 分隔页 7.5
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 19, title: "常见问题与排查指南" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "7.5", "常见问题与排查指南", [
      "通用四步排查法：运行状态 → 绑定状态 → 凭据有效性 → 网络环境",
      "高频问题：扫码未显示“已绑定” / 消息迟迟无响应 / 凭据保存失败",
      "核心原则：按顺序逐步排查，不跳步；修复后重新下发验证",
    ]);
  }
};