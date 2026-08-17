// slide-26.js — 课后思考题
const { C, sectionTitle, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "objectives", index: 26, title: "课后思考题" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "课后思考题", C.bgLight);
    const questions = [
      "助理任务在工作目录和会话管理上，与使用本地界面的普通任务有哪些核心区别？为什么会有这些限制？",
      "尝试举出两个在你目前实际工作中，能够利用“助理机制”大幅提升效率的场景。",
      "对比 WebSocket 长连接与 URL 回调两种通信模式，简述在什么情况下应当坚决采用 URL 回调模式？",
      "如果你的手机通过微信给电脑发送任务指令后没有任何响应，你该如何按照“四步法”进行排查？",
    ];
    questions.forEach((q, i) => {
      const y = 1.4 + i * 0.9;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(q, {
        x: 1.35, y, w: 8.0, h: 0.75,
        fontSize: 13.5, fontFace: "Microsoft YaHei",
        color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.2
      });
    });
    calloutBar(s, "建议先独立思考，再回到配套实验动手验证你的答案。", 4.9);
  }
};