// slide-07.js — 2.2 分隔页：附件与上下文引用
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 7, title: "附件与上下文引用" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "2.2", "附件与上下文引用", [
      "四种上下文挂载方式",
      "支持的文件类型",
      "隐私授权边界",
    ]);
  }
};
