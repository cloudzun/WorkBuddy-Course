// slide-20.js — 7.5.1 通用四步排查法（步骤）
const { C, sectionTitle, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 20, title: "通用四步排查法" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "通用四步排查法", C.bgLight);
    s.addText("当助理功能异常时，请按顺序执行以下四步：", {
      x: 0.6, y: 1.05, w: 8.8, h: 0.3,
      fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const steps = [
      { t: "检查 WorkBuddy 是否运行", d: "确认电脑端的应用程序未被误关或发生崩溃" },
      { t: "核对绑定状态", d: "在助理设置面板中检查对应渠道的状态灯是否显示为“已连接/已绑定”" },
      { t: "检查凭据有效性", d: "对于凭据型渠道，核实 Secret 是否过期或复制错误" },
      { t: "排查网络", d: "确保电脑网络正常，且未启用可能拦截流量的全局代理或防火墙规则" },
    ];
    steps.forEach((it, i) => {
      const y = 1.5 + i * 0.72;
      numBadge(s, 0.7, y + 0.03, i + 1, C.primary);
      s.addText(it.t, { x: 1.35, y, w: 3.4, h: 0.55, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 4.9, y, w: 4.5, h: 0.55, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "按顺序逐步排查、不要跳步：先本地应用，再绑定状态，再凭据有效性，最后网络环境。", 4.65);
    s.addText("官方文档《助理（远程任务）》：https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Assistant", {
      x: 0.6, y: 5.25, w: 8.8, h: 0.3,
      fontSize: 9, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};