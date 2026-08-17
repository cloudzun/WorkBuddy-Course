// slide-15.js — 7.3.2 QQ 机器人（步骤 + 安全提示）
const { C, sectionTitle, numBadge, warnBar, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 15, title: "QQ 机器人接入" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "QQ 机器人接入");
    s.addText("如果你的团队习惯使用 QQ 办公，可以通过 QQ 开放平台接入：", {
      x: 0.6, y: 1.05, w: 8.8, h: 0.3,
      fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const steps = [
      { t: "创建应用机器人", d: "前往 QQ 开放平台创建应用机器人（此步骤需完成开发者实名认证）" },
      { t: "获取两项凭据", d: "在应用信息页面获取 AppID 和 AppSecret" },
      { t: "回填并保存", d: "将两项凭据准确填入 WorkBuddy 的 QQ 助理设置页并保存即可启用" },
    ];
    steps.forEach((it, i) => {
      const y = 1.45 + i * 0.72;
      numBadge(s, 0.7, y + 0.03, i + 1, C.accentWarm);
      s.addText(it.t, { x: 1.35, y, w: 2.4, h: 0.55, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 3.9, y, w: 5.5, h: 0.55, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    warnBar(s, "安全提示：QQ 平台的 AppSecret 通常只会在创建时完整显示一次，请务必在此刻将其安全复制并暂存。", 3.85);
    calloutBar(s, "同属凭据型渠道：与元宝派一致，先在平台获取 AppID/AppSecret，再回到 WorkBuddy 回填。", 4.5);
  }
};