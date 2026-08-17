// slide-22.js — 配套实验：综合演练阶段 0-7 概览（八卡片 + 目标示例 + 评分表标注）
const { C, sectionTitle, calloutBar, codeBlock } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 22, title: "综合演练：阶段 0-7 概览" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "综合演练：阶段 0-7 全链路概览（labs/ch09-labs.md）", C.bgLight);
    s.addText("贯穿式演练“我的咖啡品牌·季度经营分析”——阶段产物流入下一阶段，最终输出可对外交付的作品集。", {
      x: 0.6, y: 1.02, w: 8.8, h: 0.32, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const phases = [
      { n: "0", t: "项目设定与任务拆解", d: "三要素公式、自驱四要素" },
      { n: "1", t: "取数与数据分析", d: "文件/资料库取数、数据分析" },
      { n: "2", t: "报告生成与人机双写", d: "文档生成、MD 审阅与 AI 修订" },
      { n: "3", t: "PPT 与演示", d: "PPT 生成与美化、设计创意" },
      { n: "4", t: "深度研究与决策建议", d: "深度研究、专家（○ 可选）" },
      { n: "5", t: "轻量发布与沉淀", d: "HTML 页面、轻量发布、资料库存回" },
      { n: "6", t: "自动化与远程", d: "自动化任务、推送小程序（○ 可选）" },
      { n: "7", t: "OPC 复盘与能力模型", d: "能力梳理、三层能力模型" },
    ];
    phases.forEach((it, i) => {
      const x = 0.6 + (i % 4) * 2.22;
      const y = 1.4 + Math.floor(i / 4) * 1.32;
      s.addShape("rect", { x, y, w: 2.12, h: 1.22, fill: { color: C.bgWhite }, shadow: mkSh() });
      s.addShape("rect", { x, y, w: 0.06, h: 1.22, fill: { color: C.primary } });
      s.addShape("rect", { x: x + 0.14, y: y + 0.1, w: 0.46, h: 0.3, fill: { color: C.primary } });
      s.addText("S" + it.n, { x: x + 0.14, y: y + 0.1, w: 0.46, h: 0.3, fontSize: 11, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, align: "center", valign: "middle", margin: 0 });
      s.addText(it.t, { x: x + 0.68, y: y + 0.08, w: 1.38, h: 0.55, fontSize: 10.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.05 });
      s.addText(it.d, { x: x + 0.14, y: y + 0.68, w: 1.85, h: 0.5, fontSize: 9, fontFace: "Microsoft YaHei", color: C.textMid, valign: "top", margin: 0, lineSpacingMultiple: 1.1 });
    });
    s.addText("阶段 0 示例目标（把总目标写成任务描述）：", {
      x: 0.6, y: 4.12, w: 8.8, h: 0.25, fontSize: 10.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0
    });
    codeBlock(s, 0.6, 4.38, 8.8, 0.62, "用 WorkBuddy 完成「我的咖啡品牌」Q2 经营分析：输出数据图表、经营分析报告、汇报 PPT 与网页版简报，并配置每周自动推送经营简报。", 10);
    calloutBar(s, "图例：★ 必做阶段仅需 WorkBuddy 基础环境，○ 可选扩展需对应授权/配置；综合评分表（自评 + 讲师评）见下页。", 5.13);
    function mkSh() {
      return { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 };
    }
  }
};