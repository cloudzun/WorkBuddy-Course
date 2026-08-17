// slide-17.js — 分隔页 5.4
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 17, title: "资料处理完整工作链路" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "5.4", "资料处理完整工作链路", [
      "核心链路：取资料 → AI 加工 → 存回沉淀",
      "5.4.1 账号连接与授权管理：最小化授予“读取文档内容”与“编辑与管理文件”",
      "5.4.2 资料获取与引用：“添加到任务”按钮与快捷图标",
      "5.4.3 AI 加工与产物存回：产物面板“上传到云端”，一键存回资料库",
    ]);
  }
};