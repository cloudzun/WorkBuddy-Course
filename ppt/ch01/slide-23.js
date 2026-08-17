// slide-23.js — 配套实验引导（四实验卡片）
const { C, sectionTitle, card, numBadge } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 23, title: "配套实验引导" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "第 1 章配套实验（labs/ch01-labs.md）", C.bgLight);
    const labs = [
      { n: "1.1", t: "安装、扫码登录与功能自检", d: "下载安装 → 微信扫码 → 版本检查 → 测试消息", tag: "★ 必做" },
      { n: "1.2", t: "主界面三区域与新建任务栏", d: "识别三区域 → 定位六个配置入口 → 拖拽文件", tag: "★ 必做" },
      { n: "1.3", t: "Ask / Plan / Craft 三模式对比", d: "同一任务三种模式执行，观察行为边界", tag: "★ 必做" },
      { n: "1.4", t: "系统设置与记忆管理", d: "语言/字体/简洁模式、非高风险自动安装、记忆导入", tag: "○ 可选" },
    ];
    labs.forEach((it, i) => {
      const x = 0.6 + (i % 2) * 4.55;
      const y = 1.35 + Math.floor(i / 2) * 1.7;
      card(s, x, y, 4.3, 1.5, C.primary);
      numBadge(s, x + 0.16, y + 0.12, it.n, C.primary);
      s.addText(it.t, { x: x + 0.75, y: y + 0.1, w: 3.4, h: 0.45, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, margin: 0 });
      s.addText(it.d, { x: x + 0.75, y: y + 0.58, w: 3.4, h: 0.55, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textMid, valign: "top", margin: 0, lineSpacingMultiple: 1.15 });
      s.addText(it.tag, { x: x + 3.45, y: y + 1.05, w: 0.8, h: 0.35, fontSize: 10, fontFace: "Microsoft YaHei", bold: true, color: it.tag.startsWith("★") ? C.primary : C.accentWarm, align: "right", margin: 0 });
    });
    callout(s, "先完成实验 1.1 建立环境基线，再按 1.2 → 1.3 → 1.4 顺序推进。");
    function callout(s, text) {
      s.addShape("rect", { x: 0.6, y: 4.95, w: 8.8, h: 0.4, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: 4.95, w: 0.05, h: 0.4, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y: 4.95, w: 8.3, h: 0.4, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
