// slide-20.js — 成本优化实践（要点 + 大结论）
const { C, sectionTitle, numBadge, bigCallout } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 20, title: "成本优化实践" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "成本优化实践");
    const items = [
      { t: "Auto + 标准推理优先", d: "日常任务优先 Auto 与标准推理，把 Thinking 留给高价值复杂任务" },
      { t: "简单任务不召唤专家团", d: "用技能或单专家即可完成" },
      { t: "控制追问与挂载", d: "控制单任务追问轮数与挂载文件体积（第 2 章给出连续追问约 8 轮的经验建议）" },
      { t: "高频与敏感任务走本地", d: "高频批量任务与敏感数据任务走 Ollama 本地模型，把云端额度留给 Agent 场景" },
      { t: "开发类工作用 Coding Plan", d: "使用 Coding Plan 专属订阅，避免占用 Token Plan 的按量额度" },
    ];
    items.forEach((it, i) => {
      const y = 1.35 + i * 0.62;
      numBadge(s, 0.7, y + 0.05, i + 1);
      s.addText(it.t, { x: 1.35, y, w: 2.9, h: 0.55, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 4.35, y, w: 5.05, h: 0.55, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    bigCallout(s, "成本优化的本质：按任务价值匹配模型与实体，而不是一律使用最强配置。", 4.55, 0.85);
  }
};