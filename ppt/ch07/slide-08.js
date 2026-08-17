// slide-08.js — 7.1.4 核心通信模式对比（表格 + 安全机制）
const { C, sectionTitle, warnBar } = require("./common");
module.exports = {
  slideConfig: { type: "table", index: 8, title: "核心通信模式对比" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "核心通信模式对比");
    const hdrOpts = { fill: { color: C.primary }, color: C.textLight, bold: true };
    const rows = [
      [{ text: "通信模式", options: hdrOpts },
       { text: "核心特性", options: hdrOpts },
       { text: "适用场景", options: hdrOpts },
       { text: "推荐建议", options: hdrOpts }],
      [{ text: "长连接（WebSocket）", options: { bold: true, color: C.primary } }, "无需公网 IP，支持扫码一键绑定，断线自动重连，配置步骤少", "个人开发者、小型团队内部使用", "推荐首选，配置门槛极低，日常稳定性好"],
      [{ text: "URL 回调（Webhook）", options: { bold: true, color: C.primary } }, "需公网可达 URL，需额外配置 Token/EncodingAESKey 并回填 Webhook 地址", "大型企业 IT 部门、需统一网关管理的集中式部署环境", "仅在公司网络策略严格或需二次开发网关时使用"],
    ];
    s.addTable(rows, {
      x: 0.6, y: 1.35, w: 8.8,
      colW: [1.7, 2.8, 2.3, 2.0],
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: C.textDark, border: { color: C.border, pt: 0.5 },
      align: "left", valign: "middle",
      rowH: [0.42, 1.0, 1.0],
      fill: { color: C.bgWhite },
      autoPage: false,
    });
    s.addShape("rect", { x: 0.6, y: 3.9, w: 8.8, h: 0.7, fill: { color: C.bgCard } });
    s.addShape("rect", { x: 0.6, y: 3.9, w: 0.07, h: 0.7, fill: { color: C.primary } });
    s.addText("安全机制：以企业微信 URL 回调模式为例，消息校验与加密采用平台通用的 Token 签名与 EncodingAESKey 加密机制，确保任务数据在公网流转时不被伪造与窃听。", {
      x: 0.95, y: 3.9, w: 8.2, h: 0.7,
      fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.2
    });
    warnBar(s, "安全提示：任何渠道配置助理时获取的凭据（如 Secret、EncodingAESKey 等）都具有极高权限，务必妥善保管，切勿通过截图或明文发送给不可信的第三方。", 4.7);
    s.addText("官方文档《WorkBuddy 接入企业微信指南》：https://www.workbuddy.cn/docs/workbuddy/Wecom-Guide", {
      x: 0.6, y: 5.25, w: 8.8, h: 0.3,
      fontSize: 9, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};