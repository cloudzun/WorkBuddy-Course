// slide-17.js — 2.4.2 产物分享（卡片 + 载体）
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 17, title: "产物分享与交付" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "产物分享（上传云端 / 下载）", C.bgLight);
    card(s, 0.6, 1.3, 8.8, 1.0, C.primary);
    s.addText("预览产物时点击右上角分享图标，可选择上传到云端协作载体，或下载到本地。", {
      x: 0.95, y: 1.4, w: 8.2, h: 0.8, fontSize: 13.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.3
    });
    s.addText("云端载体（需对应账号授权）", { x: 0.6, y: 2.55, w: 8.8, h: 0.4, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.secondary, margin: 0 });
    const carriers = ["我的云端网盘", "腾讯文档", "ima 知识库", "乐享知识库"];
    carriers.forEach((c, i) => {
      const x = 0.6 + i * 2.26;
      card(s, x, 3.0, 2.1, 1.0, C.secondary);
      s.addText(c, { x: x + 0.15, y: 3.0, w: 1.8, h: 1.0, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", valign: "middle", margin: 0 });
    });
    callout(s, "分享后可到「设置-数据管理」的“我分享的文件”中复制链接 / 下载 / 取消分享。");
    function callout(s, text) {
      s.addShape("rect", { x: 0.6, y: 4.4, w: 8.8, h: 0.45, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: 4.4, w: 0.05, h: 0.45, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y: 4.4, w: 8.3, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
