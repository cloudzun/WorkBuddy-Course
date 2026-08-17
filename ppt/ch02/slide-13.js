// slide-13.js — 2.3.2 软修正与硬打断（两卡片）
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 13, title: "软修正与硬打断" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "任务的打断与修正");
    card(s, 0.6, 1.3, 4.3, 2.3, C.primary);
    s.addText("软修正", { x: 0.8, y: 1.45, w: 3.9, h: 0.45, fontSize: 16, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
    s.addText("生成完毕或停顿期间，发送新提示词把方向“拉回来”。\n\n三类追问：\n· 新需求：再加一个饼图\n· 修改意见：表格按销售额排序\n· 继续追问：帮我导出成 PDF", {
      x: 0.8, y: 1.95, w: 3.9, h: 1.55, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.3
    });
    card(s, 5.1, 1.3, 4.3, 2.3, C.accentWarm);
    s.addText("硬打断", { x: 5.3, y: 1.45, w: 3.9, h: 0.45, fontSize: 16, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
    s.addText("任务执行中，输入框区域实时显示“停止入口”，可随时中断。\n\n中断后三种继续方式：\n· 补充新的说明\n· 调整需求后重新发送\n· 基于已有内容继续推进", {
      x: 5.3, y: 1.95, w: 3.9, h: 1.55, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.3
    });
    callout(s, "执行过程全程透明：思考与步骤进度（Todo 清单）实时可见，随时监控推演方向。");
    function callout(s, text) {
      s.addShape("rect", { x: 0.6, y: 4.4, w: 8.8, h: 0.45, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: 4.4, w: 0.05, h: 0.45, fill: { color: C.accent } });
      s.addText(text, { x: 0.85, y: 4.4, w: 8.3, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
