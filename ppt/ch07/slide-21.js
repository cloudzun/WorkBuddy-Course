// slide-21.js — 7.5.2 高频问题解析（三卡片）
const { C, sectionTitle, card, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 21, title: "高频问题解析" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "高频问题解析");
    const items = [
      { t: "问题 1：扫码后手机端没显示“已绑定”", strip: C.primary,
        why: "使用错误的账号扫码（如用个人微信扫了企业微信的码）；网络状态延迟；二维码在界面停留过久已失效。",
        how: "刷新 WorkBuddy 界面获取最新二维码，并确认使用正确的 App 扫码。" },
      { t: "问题 2：手机发消息后迟迟没有响应", strip: C.accentWarm,
        why: "最常见：电脑长时间未操作进入休眠；WorkBuddy 进程被杀毒软件误关；其他耗时任务占用所有执行线程。",
        how: "唤醒电脑并修改电源休眠设置；检查后台任务状态，必要时重启 WorkBuddy 客户端。" },
      { t: "问题 3：凭据型渠道注册或保存失败", strip: C.secondary,
        why: "复制 AppID/Secret 时首尾带空格；Secret 被平台重置失效；开发者账号未完成实名认证；URL 回调模式下地址填写不完整。",
        how: "仔细核对凭据文本，利用记事本等工具去除不可见字符再粘贴；回调模式确保复制包含 http:// 或 https:// 的完整地址。" },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.02;
      card(s, x, 1.3, 2.85, 3.35, it.strip);
      s.addText(it.t, { x: x + 0.18, y: 1.44, w: 2.55, h: 0.55, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0, lineSpacingMultiple: 1.15 });
      s.addText("可能原因", { x: x + 0.18, y: 2.1, w: 2.5, h: 0.25, fontSize: 10, fontFace: "Microsoft YaHei", bold: true, color: C.accentWarm, margin: 0 });
      s.addText(it.why, { x: x + 0.18, y: 2.38, w: 2.5, h: 0.85, fontSize: 9, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
      s.addText("解决对策", { x: x + 0.18, y: 3.35, w: 2.5, h: 0.25, fontSize: 10, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.how, { x: x + 0.18, y: 3.62, w: 2.5, h: 0.85, fontSize: 9, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
    });
    calloutBar(s, "高频问题 2 的最常见根因是电脑休眠——先检查电源设置，再看绑定状态与凭据。", 4.85);
  }
};