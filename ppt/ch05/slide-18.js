// slide-18.js — 5.4.1 账号连接与授权管理（连接步骤 + 解除绑定）
const { C, sectionTitle, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 18, title: "账号连接与授权管理" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "账号连接与授权管理");
    s.addText("要开启工作链路，首先需要将 WorkBuddy 与你的云端文档平台进行连接。", {
      x: 0.6, y: 1.05, w: 8.8, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    s.addText("以腾讯文档为例：OAuth 扫码授权连接", {
      x: 0.6, y: 1.45, w: 8.8, h: 0.32, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0
    });
    const steps = [
      "点击系统界面中的连接入口",
      "仔细阅读系统弹出的阅读权限说明",
      "选择微信或 QQ 扫码",
      "在手机端同意相关权限后即可完成连接（OAuth 扫码授权的通用原理与流程见 §5.1.3）",
    ];
    steps.forEach((it, i) => {
      const y = 1.82 + i * 0.6;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(it, {
        x: 1.35, y, w: 8.0, h: 0.5,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.15
      });
    });
    s.addShape("rect", { x: 0.6, y: 4.3, w: 8.8, h: 0.62, fill: { color: C.bgCard } });
    s.addShape("rect", { x: 0.6, y: 4.3, w: 0.07, h: 0.62, fill: { color: C.accent } });
    s.addText("更换账号或取消授权：在左侧边栏点击“资料库” → 找到对应已连接的文档平台 → 点击右上角的“解除绑定”即可。", {
      x: 0.95, y: 4.3, w: 8.2, h: 0.62, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0
    });
    calloutBar(s, "授权时需注意：资料库场景的核心权限是“读取文档内容”与“编辑与管理文件”，请按实际需要最小化授予。", 5.02);
  }
};