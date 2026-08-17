// slide-10.js — 7.2.1 微信助理（步骤 + 能力面板）
const { C, sectionTitle, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 10, title: "微信助理接入" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "微信助理（推荐 · 零配置）");
    const steps = [
      { t: "打开“助理设置”", d: "在 WorkBuddy 客户端中找到“助理设置”面板（左侧边栏 > ⚙️ 设置 > 助理设置）" },
      { t: "切换至“微信助理”", d: "“微信助理”标签页会生成专属的绑定二维码" },
      { t: "扫码完成绑定", d: "使用手机微信扫描二维码，确认授权后即可完成绑定" },
    ];
    steps.forEach((it, i) => {
      const y = 1.2 + i * 0.72;
      numBadge(s, 0.7, y + 0.03, i + 1, C.primary);
      s.addText(it.t, { x: 1.35, y, w: 2.6, h: 0.55, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 4.1, y, w: 5.3, h: 0.55, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    s.addShape("rect", { x: 0.6, y: 3.3, w: 8.8, h: 1.05, fill: { color: C.bgBlue } });
    s.addText("绑定后，移动端可以", {
      x: 0.85, y: 3.4, w: 8.3, h: 0.3, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0
    });
    s.addText("发送文字消息启动新任务，或继续“助理”板块中未完成的会话；发送后续指令、回答追问、批准命令执行与文件修改；查看任务输出、差异对比，任务完成或需要关注时在微信中收到通知。", {
      x: 0.85, y: 3.72, w: 8.3, h: 0.5, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2
    });
    s.addText("消息类型支持：文字 · 图片（截图或文档照片）· 文件（转发文件）· 语音（需微信语音转文字）。", {
      x: 0.85, y: 4.1, w: 8.3, h: 0.25, fontSize: 9.5, fontFace: "Microsoft YaHei", italic: true, color: C.textMid, margin: 0
    });
    calloutBar(s, "绑定全程无需填写 App ID/App Secret 等开发凭证——零配置开箱即用。", 4.55);
    s.addText("官方文档《微信助理接入指南》：https://www.workbuddy.cn/docs/workbuddy/WeixinBot-Guide", {
      x: 0.6, y: 5.15, w: 8.8, h: 0.3,
      fontSize: 9, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};