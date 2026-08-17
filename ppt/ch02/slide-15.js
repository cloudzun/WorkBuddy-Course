// slide-15.js — 2.4 分隔页：结果查看与产物交付
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 15, title: "结果查看与产物交付" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "2.4", "结果查看与产物交付", [
      "结果区四类内容：概览（工作空间文件 / 浏览器 / 变更 / 产物）",
      "产物预览、下载与分享",
      "交付五步检",
    ]);
  }
};
