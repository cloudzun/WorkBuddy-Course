// slide-13.js — 一键复刻“做同款”（四步步骤）
const { C, sectionTitle, numBadge, bigCallout } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 13, title: "一键复刻“做同款”" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "一键复刻：“做同款”", C.bgLight);
    const steps = [
      { t: "点击“做同款”", d: "在案例详情页点击“做同款”（官方文案亦作“制作我的版本”）" },
      { t: "Prompt 自动预填", d: "该案例的 Prompt 自动填入你的对话框" },
      { t: "Skill 与专家自动加载", d: "后台自动加载案例所需的技能与专家配置" },
      { t: "微调并发送", d: "按需微调 Prompt，或直接发送指令开始生成" },
    ];
    steps.forEach((it, i) => {
      const y = 1.35 + i * 0.72;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(it.t, { x: 1.35, y, w: 3.0, h: 0.55, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 4.5, y, w: 4.9, h: 0.55, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    bigCallout(s, "全程零手工配置：几十分钟的配置工作，压缩到几秒钟。", 4.3, 0.85);
  }
};
