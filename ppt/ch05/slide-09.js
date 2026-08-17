// slide-09.js — 5.2.2 企业连接器配置示例：QQ 邮箱（步骤）
const { C, sectionTitle, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 9, title: "配置 QQ 邮箱连接器" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "企业连接器配置示例：QQ 邮箱", C.bgLight);
    const steps = [
      "进入 WorkBuddy 的连接器管理页面，点击添加“QQ 邮箱”连接器",
      "页面会弹出二维码，使用手机 QQ 邮箱 App 扫码进行授权",
      "在手机端仔细阅读并确认需要授予的权限（包括获取账号基本信息、读取邮件、发送邮件、删除邮件等）",
      "确认授权后，返回 WorkBuddy，看到连接器状态显示为绿色圆点，即表示连接成功",
    ];
    steps.forEach((it, i) => {
      const y = 1.3 + i * 0.66;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(it, {
        x: 1.35, y, w: 8.0, h: 0.6,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.15
      });
    });
    calloutBar(s, "QQ 邮箱授权需在手机端确认权限（账号信息/读取邮件/发送邮件/删除邮件等），连接成功后卡片名称旁出现绿色圆点。", 4.05);
    s.addText("官方文档：《连接器》 https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Connector", {
      x: 0.6, y: 4.75, w: 8.8, h: 0.32, fontSize: 9, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};