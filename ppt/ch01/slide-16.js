// slide-16.js — 1.3.5 系统设置 / 数据管理 / 记忆管理（三卡片）
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 16, title: "系统、数据与记忆管理" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "系统设置 / 数据管理 / 记忆管理");
    const items = [
      { t: "系统设置", d: "语言、字体大小、显示模式（简洁模式）\n非高风险 Skill 自动安装、防休眠", strip: C.primary },
      { t: "数据管理", d: "“我分享的文件”：复制链接、下载保存、取消分享", strip: C.secondary },
      { t: "记忆管理", d: "生成对话记忆（默认开启，每晚自动整合）\n手动管理、从其他 AI 产品导入记忆", strip: C.accent },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.02;
      card(s, x, 1.6, 2.85, 2.2, it.strip);
      s.addText(it.t, { x: x + 0.16, y: 1.75, w: 2.55, h: 0.5, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.16, y: 2.3, w: 2.55, h: 1.3, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.35 });
    });
    callout(s, "记忆让 AI 更“懂”你：每晚自动生成记忆特征，使用习惯可无缝迁移。");
    function callout(s, text) {
      s.addShape("rect", { x: 0.6, y: 4.45, w: 8.8, h: 0.45, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: 4.45, w: 0.05, h: 0.45, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y: 4.45, w: 8.3, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
