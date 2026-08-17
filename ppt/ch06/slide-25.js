// slide-25.js — 实验引导（实验总览表）
const { C, sectionTitle, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "table", index: 25, title: "实验引导" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "第 6 章配套实验（labs/ch06-labs.md）", C.bgLight);
    const hdrOpts = { fill: { color: C.primary }, color: C.textLight, bold: true };
    const rows = [
      [{ text: "编号", options: hdrOpts },
       { text: "实验名称", options: hdrOpts },
       { text: "验证知识点", options: hdrOpts },
       { text: "前置条件", options: hdrOpts },
       { text: "类型", options: hdrOpts }],
      [{ text: "6.1", options: { bold: true, color: C.primary } }, "推理模式与 Auto",
       "均衡/快速/极致三档模型选择；思考模式 vs 推理模型；Auto 按任务自动选模型；任务中切换", "完成 1.1",
       { text: "★ 必做", options: { bold: true, color: C.primary } }],
      [{ text: "6.2", options: { bold: true, color: C.primary } }, "能力标记验证",
       "能力标记自动写入；识图/长文本/工具调用任务下的模型匹配", "完成 1.1",
       { text: "★ 必做", options: { bold: true, color: C.primary } }],
      [{ text: "6.3", options: { bold: true, color: C.primary } }, "自定义模型接入",
       "提供商接入/Token Plan/Coding Plan 等配置要素与连通验证", "持有对应模型 API Key 或订阅",
       { text: "○ 可选", options: { bold: true, color: C.accentWarm } }],
      [{ text: "6.4", options: { bold: true, color: C.primary } }, "Ollama 本地部署",
       "安装、拉取模型、11434 端口接入、离线测试", "可安装 Ollama 的电脑（预留数 GB 磁盘）",
       { text: "○ 可选", options: { bold: true, color: C.accentWarm } }],
      [{ text: "6.5", options: { bold: true, color: C.primary } }, "积分消耗观察",
       "消耗量与模型 Token 定价和任务复杂度相关；积分查看入口", "完成 1.1（账户有积分）",
       { text: "★ 必做", options: { bold: true, color: C.primary } }],
    ];
    s.addTable(rows, {
      x: 0.6, y: 1.28, w: 8.8,
      colW: [0.6, 1.5, 3.6, 1.85, 1.25],
      fontSize: 9.5, fontFace: "Microsoft YaHei",
      color: C.textDark, border: { color: C.border, pt: 0.5 },
      align: "left", valign: "middle",
      rowH: [0.4, 0.72, 0.6, 0.72, 0.72, 0.6],
      fill: { color: C.bgWhite },
      autoPage: false,
    });
    s.addText("官方文档《模型配置》：https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Model", {
      x: 0.85, y: 5.0, w: 8.3, h: 0.32,
      fontSize: 8.5, fontFace: "Consolas", color: C.textMid, margin: 0
    });
    calloutBar(s, "建议顺序：先完成 ★ 必做实验 6.1 → 6.2 → 6.5，再按条件选做 ○ 可选实验 6.3、6.4。", 5.06);
  }
};