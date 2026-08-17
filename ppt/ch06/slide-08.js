// slide-08.js — 能力标记：模型的能力画像（三卡片）
const { C, sectionTitle, card, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 8, title: "能力标记" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "能力标记：模型的能力画像");
    s.addText("WorkBuddy 为每个模型维护一组能力标记，用于标注该模型是否支持识图、长文本、工具调用等高级特性。", {
      x: 0.6, y: 1.08, w: 8.8, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const items = [
      { t: "能力画像", d: "识图、长文本、工具调用等高级特性标记，构成模型的能力画像", strip: C.primary },
      { t: "按需求匹配", d: "任务执行时按任务需求（如“识别图片中的表格”）优先匹配带有对应能力标记的模型，避免“选了模型却做不了事”", strip: C.accent },
      { t: "自动写入", d: "自定义接入的第三方模型可借助“能力标记自动写入”，由系统根据模型信息自动补全标记，显著减少手动配置错误", strip: C.accentWarm },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.02;
      card(s, x, 1.55, 2.85, 2.6, it.strip);
      numBadge(s, x + 0.16, 1.67, i + 1, it.strip);
      s.addText(it.t, { x: x + 0.75, y: 1.65, w: 2.0, h: 0.5, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      s.addText(it.d, { x: x + 0.16, y: 2.25, w: 2.55, h: 1.75, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textMid, valign: "top", margin: 0, lineSpacingMultiple: 1.3 });
    });
    calloutBar(s, "对内置模型，能力标记由系统维护、开箱即用；对自定义接入的第三方模型，务必确认能力标记与实际能力一致。", 4.5);
  }
};