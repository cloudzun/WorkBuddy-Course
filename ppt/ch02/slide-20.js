// slide-20.js — 2.5.1 工作空间容器关系（bigCallout + 卡片）
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "callout", index: 20, title: "工作空间与任务的容器关系" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "工作空间与任务的容器关系", C.bgLight);
    card(s, 0.6, 1.3, 8.8, 1.0, C.primary);
    s.addText("工作空间 = 具体的项目目录 + 相关的任务集合 + 沉淀的上下文配置", {
      x: 0.95, y: 1.4, w: 8.2, h: 0.8, fontSize: 16, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0
    });
    s.addText("任务（Task）：一次具体的对话与产出，具有瞬时性、即战力", {
      x: 0.6, y: 2.55, w: 8.8, h: 0.4, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0
    });
    const items = [
      { t: "按项目粒度选目录", d: "一个开发项目、一次年终总结，都拥有独立工作空间", strip: C.primary },
      { t: "两条收编路径", d: "新建任务时直接挂载；或右键历史任务“保存到工作空间”", strip: C.secondary },
      { t: "多端实时同步", d: "以当前最新版本为准，任务状态流转与移交不间断", strip: C.accent },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.02;
      card(s, x, 3.1, 2.85, 1.5, it.strip);
      s.addText(it.t, { x: x + 0.16, y: 3.22, w: 2.55, h: 0.4, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.16, y: 3.66, w: 2.55, h: 0.85, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
    });
    callout(s, "团队协作：把工作空间根目录放进 Git/SharePoint/腾讯文档同步目录，变更即触达团队。");
    function callout(s, text) {
      s.addShape("rect", { x: 0.6, y: 4.85, w: 8.8, h: 0.45, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: 4.85, w: 0.05, h: 0.45, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y: 4.85, w: 8.3, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
