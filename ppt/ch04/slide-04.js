// slide-04.js — 4.1.1 技能与普通对话的区别（双卡对比）
const { C, sectionTitle, card, bigCallout, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 4, title: "技能与普通对话的区别" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "技能与普通对话的区别", C.bgLight);
    s.addText("用户与 WorkBuddy 的交互主要分为普通对话和技能调用，两者走的是完全不同的执行路径：", {
      x: 0.6, y: 1.12, w: 8.8, h: 0.4, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const items = [
      { t: "普通对话", d: "依赖 AI 模型在训练阶段学到的庞大知识库，具备通用和发散的特点。普通提问或闲聊时，模型根据概率生成回答，在需要精确执行的任务上结果可能出现微小波动。", strip: C.secondary },
      { t: "技能（Skill）", d: "更像是给 AI 配备的“专业工具箱”。处于技能模式或调用特定技能包时，遵循技能包中预先定义好的工具函数与操作逻辑，输出稳定、可预期、高度专注，适合具有明确流程的专业领域任务。", strip: C.primary },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      card(s, x, 1.6, 4.3, 2.15, it.strip);
      s.addText(it.t, { x: x + 0.2, y: 1.72, w: 3.9, h: 0.45, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: 2.25, w: 3.9, h: 1.4, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.25 });
    });
    bigCallout(s, "核心区别：普通对话靠“模型记忆发散”，技能靠“预定义工具逻辑”稳定执行。", 3.95, 0.8);
    calloutBar(s, "技能更接近“确定的执行器”，适合需要精确、可预期结果的业务流程性任务。", 4.95);
  }
};