// slide-18.js — 积分的消耗逻辑（概念页）
const { C, sectionTitle, card, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 18, title: "积分的消耗逻辑" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "积分的消耗逻辑", C.bgLight);
    s.addText("积分是 WorkBuddy 的使用额度（首次出现于第 4 章）。内置模型与云端服务的每次任务执行都会消耗积分，消耗量与模型 Token 定价和任务复杂度有关。", {
      x: 0.6, y: 1.1, w: 8.8, h: 0.6, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0, lineSpacingMultiple: 1.2
    });
    const items = [
      { t: "模型 Token 定价", d: "不同模型单位 Token 处理单价不同，单价越高，同等任务消耗越多", strip: C.primary },
      { t: "任务复杂度", d: "简单任务（如简短问答）消耗较少；复杂任务（如长代码分析、多轮对话、知识库检索）消耗更多", strip: C.accent },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      card(s, x, 1.95, 4.3, 1.85, it.strip);
      s.addText(it.t, { x: x + 0.2, y: 2.1, w: 3.9, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: 2.62, w: 3.9, h: 1.05, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.3 });
    });
    s.addShape("rect", { x: 0.6, y: 4.15, w: 8.8, h: 0.65, fill: { color: C.darkBg } });
    s.addText("理解消耗逻辑，是控制使用成本的前提。", {
      x: 0.95, y: 4.15, w: 8.2, h: 0.65, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, valign: "middle", margin: 0
    });
    s.addText("官方文档《积分》：https://www.workbuddy.cn/docs/workbuddy/Credits", {
      x: 0.85, y: 5.0, w: 8.3, h: 0.35,
      fontSize: 9, fontFace: "Consolas", color: C.textMid, margin: 0
    });
  }
};