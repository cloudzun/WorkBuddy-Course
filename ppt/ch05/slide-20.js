// slide-20.js — 5.4.3 AI 加工与产物存回（步骤 + 安全提示）
const { C, sectionTitle, numBadge, warnBar } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 20, title: "AI 加工与产物存回" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "AI 加工与产物存回");
    s.addText("资料引入后，即可向 AI 描述具体的加工任务（如提炼摘要、翻译、数据分析等）。当 AI 完成加工并生成最终产物后，应及时将产物存回资料库，避免数据丢失或碎片化。", {
      x: 0.6, y: 1.05, w: 8.8, h: 0.62, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0, lineSpacingMultiple: 1.2
    });
    const steps = [
      "在界面右侧的产物面板中找到刚生成的文件",
      "点击文件选项中的“上传到云端”",
      "在弹出的窗口中选择对应的资料库平台",
      "上传成功后，可在对应云端平台查看该文件——如乐享知识库按团队空间储存，具体存放位置以实际产品界面为准",
    ];
    steps.forEach((it, i) => {
      const y = 1.8 + i * 0.62;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(it, {
        x: 1.35, y, w: 8.0, h: 0.52,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.15
      });
    });
    warnBar(s, "安全提示：在进行账号授权和资料引用时，务必注意权限控制，避免引入包含敏感或机密信息的无关文档。", 4.52);
    s.addText("官方文档：《乐享知识库》 https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Knowledge-Base/Lexiang", {
      x: 0.6, y: 5.18, w: 8.8, h: 0.3, fontSize: 9, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};