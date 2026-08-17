// slide-07.js — 7.1.3 通信链路 + 四个运行前提（步骤 + 清单）
const { C, sectionTitle, numBadge, card, warnBar } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 7, title: "远程通信原理与运行前提" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "远程通信原理与运行前提", C.bgLight);
    s.addText("指令流转链路：移动端 → 云端中转 → 本机 WorkBuddy；各渠道支持 WebSocket 长连接接入，确保指令下达的即时性和可靠性。", {
      x: 0.6, y: 1.0, w: 8.8, h: 0.3,
      fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0
    });
    const chain = [
      { t: "移动端发指令", d: "通过手机等即时通讯软件下达任务", strip: C.primary },
      { t: "云端中转服务节点", d: "接收指令并转发至本机，保证链路畅通", strip: C.accent },
      { t: "本机 WorkBuddy", d: "解析并路由指令、触发任务调度，结果回传移动端", strip: C.secondary },
    ];
    chain.forEach((it, i) => {
      const x = 0.6 + i * 3.02;
      card(s, x, 1.42, 2.85, 1.05, it.strip);
      numBadge(s, x + 0.14, 1.52, i + 1, it.strip);
      s.addText(it.t, { x: x + 0.72, y: 1.5, w: 2.0, h: 0.4, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: x + 0.16, y: 1.94, w: 2.55, h: 0.45, fontSize: 9.5, fontFace: "Microsoft YaHei", color: C.textMid, valign: "top", margin: 0, lineSpacingMultiple: 1.1 });
    });
    s.addShape("rect", { x: 0.6, y: 2.6, w: 8.8, h: 2.05, fill: { color: C.bgCard } });
    s.addShape("rect", { x: 0.6, y: 2.6, w: 0.07, h: 2.05, fill: { color: C.primary } });
    s.addText("四个核心使用前提（缺一不可）", {
      x: 0.95, y: 2.72, w: 8.2, h: 0.4, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0
    });
    const pre = [
      "① 目标电脑必须处于开机状态",
      "② 电脑端 WorkBuddy 处于运行且已登录的状态",
      "③ 电脑保持持续且稳定的网络连接",
      "④ 电脑不能进入休眠状态（否则网络会断开，WorkBuddy 进程会挂起）",
    ];
    pre.forEach((p, i) => {
      s.addText(p, { x: 0.95, y: 3.22 + i * 0.32, w: 8.2, h: 0.3, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0 });
    });
    s.addText("💡 最佳实践：在操作系统电源管理中，把“使计算机进入睡眠状态”设置为“从不”，确保助理随时在线。", {
      x: 0.95, y: 4.52, w: 8.2, h: 0.3, fontSize: 10.5, fontFace: "Microsoft YaHei", bold: true, color: C.accent, margin: 0
    });
    warnBar(s, "配置前自查：① WorkBuddy 已安装并登录 ② 电脑开机常亮 ③ 网络畅通且未被防火墙拦截 WebSocket 端口 ④ 目标平台账号就绪。", 4.85);
  }
};