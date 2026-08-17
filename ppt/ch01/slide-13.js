// slide-13.js — 1.3.1 主界面三区域（三卡片）
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 13, title: "主界面三大区域" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "主界面三大区域", C.bgLight);
    const areas = [
      { t: "左侧导航", d: "导航中枢：任务列表按「任务 / 空间」两板块分组，可搜索与筛选；底部个人头像入口", strip: C.primary },
      { t: "中间对话区", d: "核心交互：任务标题栏、消息列表、输入框；底部新建任务栏集成关键配置入口", strip: C.secondary },
      { t: "右侧结果区", d: "成果展示：概览（工作空间文件 / 浏览器 / 变更 / 产物），四类内容集中查看", strip: C.accent },
    ];
    areas.forEach((it, i) => {
      const y = 1.35 + i * 1.35;
      card(s, 0.6, y, 8.8, 1.2, it.strip);
      s.addText(it.t, { x: 0.85, y: y + 0.12, w: 1.9, h: 0.9, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "top", margin: 0 });
      s.addText(it.d, { x: 2.85, y: y + 0.12, w: 6.4, h: 0.95, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
    });
    callout(s, "六种任务状态：进行中 / 已完成 / 失败 / 待处理 / 规划中 / 已归档（官方文档《任务管理》）。");
    function callout(s, text) {
      s.addShape("rect", { x: 0.6, y: 5.0, w: 8.8, h: 0.4, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: 5.0, w: 0.05, h: 0.4, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y: 5.0, w: 8.3, h: 0.4, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
