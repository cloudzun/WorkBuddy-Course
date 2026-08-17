// slide-04.js — 7.1.1 助理的本质与能力边界（定义 + 三卡片）
const { C, sectionTitle, card, bigCallout, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 4, title: "助理的本质与能力边界" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "助理的本质与能力边界");
    s.addText("本质：用户通过移动终端（如手机微信、企业微信等），远程操控部署于本机的 WorkBuddy 实例。", {
      x: 0.6, y: 1.05, w: 8.8, h: 0.3,
      fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0
    });
    bigCallout(s, "助理承担桥接跨端消息通道、解析并路由用户指令、触发本机任务调度的核心职能。", 1.4, 0.75);
    const dims = [
      { t: "远程触达", d: "突破物理位置限制，通过手机等随时随地下达指令", strip: C.primary },
      { t: "环境固定", d: "受限于远程控制特性，任务通常绑定固定工作目录，且保持单一活跃会话状态", strip: C.secondary },
      { t: "场景匹配", d: "适用于“人不在电脑前，但必须由电脑环境执行任务”的特殊情况", strip: C.accent },
    ];
    dims.forEach((it, i) => {
      const x = 0.6 + i * 3.02;
      card(s, x, 2.35, 2.85, 1.7, it.strip);
      s.addText(it.t, { x: x + 0.2, y: 2.48, w: 2.45, h: 0.45, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: 2.98, w: 2.45, h: 0.95, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.25 });
    });
    calloutBar(s, "能力边界一句话：远程触达是价值，环境固定是约束，场景匹配是边界——助理擅长“遥控”，不替代本地操作。", 4.35);
    s.addText("官方文档《助理（远程任务）》：https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Assistant", {
      x: 0.6, y: 4.95, w: 8.8, h: 0.35,
      fontSize: 9, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};