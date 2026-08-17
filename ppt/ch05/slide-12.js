// slide-12.js — 5.2.4 连接器的安全与解绑（解绑方法 + 5 条安全使用原则）
const { C, sectionTitle, numBadge } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 12, title: "连接器的安全与解绑" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "连接器的安全与解绑");
    s.addShape("rect", { x: 0.6, y: 1.15, w: 8.8, h: 1.15, fill: { color: C.bgCard } });
    s.addShape("rect", { x: 0.6, y: 1.15, w: 0.07, h: 1.15, fill: { color: C.accent } });
    s.addText("解绑方法（两种方式都能有效切断数据访问）：", {
      x: 0.95, y: 1.25, w: 8.2, h: 0.35, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0
    });
    s.addText("▸ 在 WorkBuddy 的连接器管理界面直接点击“断开连接”进行解绑\n▸ 前往对应源站（如 GitHub 的授权应用管理页面），主动撤销对 WorkBuddy 的授权令牌", {
      x: 0.95, y: 1.62, w: 8.2, h: 0.62, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.25
    });
    s.addText("安全使用原则（5 条）", {
      x: 0.6, y: 2.5, w: 8.8, h: 0.35, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0
    });
    const rules = [
      { t: "授权正确", d: "在扫码授权前，务必仔细核对正在授权的权限范围（scope）是否合理" },
      { t: "随时可撤销", d: "牢记任何连接器的授权都是动态的，发现异常应立即解绑" },
      { t: "定期检查", d: "养成定期审查已连接服务列表的习惯，清理长期未使用的连接器" },
      { t: "密钥保管", d: "在配置自定义连接器时，切勿将包含敏感 headers 和 Token 的配置文件泄露给他人" },
      { t: "合规边界", d: "在连接包含敏感商业机密或个人隐私的内部系统时，必须确认符合公司的安全合规要求" },
    ];
    rules.forEach((it, i) => {
      const y = 2.98 + i * 0.52;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(it.t, { x: 1.35, y, w: 1.7, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 3.15, y, w: 6.2, h: 0.45, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
  }
};