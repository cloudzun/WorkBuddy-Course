// slide-21.js — 2.5.2 多任务并行与资源隔离（卡片）
const { C, sectionTitle, card, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 21, title: "多任务并行与资源隔离" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "多任务并行与资源隔离", C.bgLight);
    const items = [
      { t: "任务级并行", d: "不同任务独立运行、互不阻塞；新任务即开即建，边等边干，无需排队", strip: C.primary },
      { t: "上下文隔离", d: "每个任务自带独立的对话、文件引用与配置，互不串扰", strip: C.secondary },
      { t: "同空间内协作", d: "同一工作空间的任务共享根目录，产物按任务维度归集，便于对照验收", strip: C.accent },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.02;
      card(s, x, 1.5, 2.85, 1.75, it.strip);
      s.addText(it.t, { x: x + 0.16, y: 1.62, w: 2.55, h: 0.4, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.16, y: 2.06, w: 2.55, h: 1.1, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
    });
    calloutBar(s, "任务状态六态：进行中 / 已完成 / 失败 / 待处理 / 规划中 / 已归档 —— 一眼定位每个并行任务的阶段。", 3.65);
    calloutBar(s, "搜索与筛选：支持按关键词检索历史任务，可按状态/时间快速过滤，长尾任务也能快速找回。", 4.25);
    calloutBar(s, "会话与资源：一次会话内可连续对话，也可直接新建任务转入新会话，资源配置按任务独立生效。", 4.85);
  }
};
