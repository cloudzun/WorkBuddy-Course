// slide-16.js — 5.3.3 双模检索：语义搜索与关键词搜索（对比表格）
const { C, sectionTitle, codeBlock, calloutBar } = require("./common");
module.exports = {
  slideConfig: { type: "table", index: 16, title: "双模检索：语义搜索与关键词搜索" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "双模检索：语义搜索与关键词搜索");
    s.addText("为帮助用户在海量文档中快速定位所需内容，资料库提供了两种不同维度的搜索方式：", {
      x: 0.6, y: 1.05, w: 8.8, h: 0.35, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const rowsInfo = [
      { t: "语义搜索", k: "侧重“懂你的意图”", d: "在新建任务时直接用自然语言描述需求，AI 会理解语义并自动检索匹配最相关的文件" },
      { t: "关键词搜索", k: "侧重“精准命中”", d: "在资料库的搜索框中输入明确的关键词，系统支持对文档标题以及文档所有者进行精确搜索" },
    ];
    rowsInfo.forEach((it, i) => {
      const y = 1.42 + i * 0.46;
      s.addShape("rect", { x: 0.6, y: y + 0.06, w: 0.22, h: 0.22, fill: { color: C.primary } });
      s.addText(it.t + "：", { x: 1.0, y, w: 1.4, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.k + "，" + it.d, { x: 2.45, y, w: 6.95, h: 0.35, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0 });
    });
    codeBlock(s, 0.6, 2.42, 8.8, 0.72, "【语义搜索示例】\n找一下上个月关于用户增长的报告", 11);
    const hdrOpts = { fill: { color: C.primary }, color: C.textLight, bold: true };
    const rows = [
      [{ text: "搜索方式", options: hdrOpts },
       { text: "核心特征", options: hdrOpts },
       { text: "适用场景", options: hdrOpts },
       { text: "推荐建议与选择技巧", options: hdrOpts }],
      [{ text: "语义搜索", options: { bold: true, color: C.primary } }, "模糊匹配，理解自然语言意图", "记不清文件名，只记得大致内容或用途时", "推荐：在初期阶段进行大范围探索时使用。\n技巧：尽量描述文档的核心主题或关键结论。"],
      [{ text: "关键词搜索", options: { bold: true, color: C.primary } }, "精确定位，匹配标题与作者", "明确知道文档的具体名称、编号或责任人时", "推荐：目标明确、需要快速定位特定文件时使用。\n技巧：可以使用组合关键词缩小结果范围。"],
    ];
    s.addTable(rows, {
      x: 0.6, y: 3.3, w: 8.8,
      colW: [1.0, 1.8, 2.7, 3.3],
      fontSize: 9.5, fontFace: "Microsoft YaHei",
      color: C.textDark, border: { color: C.border, pt: 0.5 },
      align: "left", valign: "middle",
      rowH: [0.4, 0.7, 0.7],
      fill: { color: C.bgWhite },
      autoPage: false,
    });
    calloutBar(s, "最佳实践：处理海量文档时组合使用更高效——先语义搜索缩小潜在文件的范围，再通过关键词搜索精准锁定目标文档。", 5.12);
  }
};