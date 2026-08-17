// slide-24.js — 实验引导（五实验卡片）
const { C, sectionTitle, card, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 24, title: "实验引导" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "第 2 章配套实验（labs/ch02-labs.md）", C.bgLight);
    const labs = [
      { n: "2.1", t: "三要素公式对比", d: "模糊指令 vs 三要素指令，对比产物质量", tag: "★ 必做" },
      { n: "2.2", t: "四种上下文挂载", d: "@引用 / 粘贴截图 / 上传文件 / 补充说明", tag: "★ 必做" },
      { n: "2.3", t: "对话追问与打断", d: "多轮追问上下文保持、软修正 / 硬打断", tag: "★ 必做" },
      { n: "2.4", t: "结果区检视与产物交付", d: "四类内容检视、产物预览 / 下载 / 分享", tag: "★ 必做" },
      { n: "2.5", t: "任务状态与工作空间", d: "六态流转、搜索筛选、归档 vs 删除", tag: "★ 必做" },
    ];
    labs.forEach((it, i) => {
      const col = i % 3, row = Math.floor(i / 3);
      const x = 0.6 + col * 3.02;
      const y = 1.35 + row * 1.75;
      card(s, x, y, 2.85, 1.55, C.primary);
      numBadge(s, x + 0.16, y + 0.14, it.n, C.primary);
      s.addText(it.t, { x: x + 0.75, y: y + 0.12, w: 2.0, h: 0.4, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, margin: 0 });
      s.addText(it.d, { x: x + 0.16, y: y + 0.58, w: 2.55, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textMid, valign: "top", margin: 0, lineSpacingMultiple: 1.15 });
      s.addText(it.tag, { x: x + 0.16, y: y + 1.22, w: 2.55, h: 0.28, fontSize: 9.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
    });
    calloutBar(s, "实验顺序建议：2.1 → 2.2 → 2.3 → 2.4 → 2.5；其中 2.4 需先完成 2.1，2.5 需先完成 2.1–2.4。", 4.85);
  }
};
