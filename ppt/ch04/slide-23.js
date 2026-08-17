// slide-23.js — 实验引导卡片（六卡片，来自实验总览表）
const { C, sectionTitle, card, numBadge, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 23, title: "实验引导" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "第 4 章配套实验（labs/ch04-labs.md）");
    const labs = [
      { n: "4.1", t: "技能市场与管理", d: "技能市场/已安装两大区域、一键安装、启用/关闭、搜索、卸载", tag: "★ 必做", pre: "完成 1.1", tagC: C.primary },
      { n: "4.2", t: "技能调用验证", d: "零成本技能实际调用（Web Search / 办公文档四件套 / Local Whisper），观察工具调用链路", tag: "★ 必做", pre: "完成 4.1", tagC: C.primary },
      { n: "4.3", t: "技能的三种安装方式", d: "查找技能、创建技能（自我进化）、上传技能", tag: "★ 必做", pre: "完成 4.1", tagC: C.primary },
      { n: "4.4", t: "召唤专家", d: "专家中心入口、按行业分类浏览、卡片评估、确认积分、下达任务", tag: "★ 必做", pre: "完成 1.1", tagC: C.primary },
      { n: "4.5", t: "专家团与 Multi-Agent", d: "团长拆解、并行执行、整合交付、积分消耗 3–5 倍", tag: "○ 可选", pre: "完成 4.4", tagC: C.accentWarm },
      { n: "4.6", t: "创建自定义专家", d: "“我的专家”创建、人设+方法论+工具链配置", tag: "○ 可选", pre: "完成 4.4", tagC: C.accentWarm },
    ];
    labs.forEach((it, i) => {
      const x = 0.6 + (i % 3) * 3.02;
      const y = 1.35 + Math.floor(i / 3) * 1.85;
      card(s, x, y, 2.85, 1.7, C.primary);
      numBadge(s, x + 0.15, y + 0.1, it.n, C.primary);
      s.addText(it.t, { x: x + 0.75, y: y + 0.1, w: 2.0, h: 0.45, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      s.addText(it.d, { x: x + 0.15, y: y + 0.62, w: 2.6, h: 0.62, fontSize: 9.5, fontFace: "Microsoft YaHei", color: C.textMid, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
      s.addText([{ text: it.tag + "  ", options: { bold: true, color: it.tagC } }, { text: "前置：" + it.pre, options: { color: C.textMid } }], {
        x: x + 0.15, y: y + 1.32, w: 2.6, h: 0.3, fontSize: 9.5, fontFace: "Microsoft YaHei", valign: "middle", margin: 0
      });
    });
    calloutBar(s, "实验顺序：4.1 → 4.2 → 4.3 → 4.4；4.5、4.6 为可选实验，完成 4.4 后可继续挑战。", 5.05);
  }
};