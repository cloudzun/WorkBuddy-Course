// slide-10.js — 1.2.2 安装步骤（双列步骤）
const { C, sectionTitle, numBadge } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 10, title: "安装步骤" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "安装步骤（Windows / macOS）");
    s.addText("Windows 平台", { x: 0.6, y: 1.15, w: 4.2, h: 0.4, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
    const win = [
      "访问官网（codebuddy.cn/work）",
      "下载 Windows 安装包",
      "双击运行安装程序",
      "按安装向导提示完成安装",
    ];
    win.forEach((t, i) => {
      const y = 1.6 + i * 0.62;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(t, { x: 1.35, y, w: 3.6, h: 0.5, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    s.addText("macOS 平台", { x: 5.2, y: 1.15, w: 4.2, h: 0.4, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
    const mac = [
      "按芯片选择版本（M 系列→ARM64 / Intel→x64）",
      "下载 .dmg 安装文件",
      "双击打开 .dmg",
      "将应用图标拖入 Applications 文件夹",
    ];
    mac.forEach((t, i) => {
      const y = 1.6 + i * 0.62;
      numBadge(s, 5.3, y + 0.03, i + 1);
      s.addText(t, { x: 5.95, y, w: 3.6, h: 0.5, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    callout(s, "安装完成后启动 WorkBuddy，进入首次登录与功能验证（见下一页）。");
    function callout(s, text) {
      s.addShape("rect", { x: 0.6, y: 4.7, w: 8.8, h: 0.45, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: 4.7, w: 0.05, h: 0.45, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y: 4.7, w: 8.3, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
