// slide-02.js — 课程学习路线图（横向三阶段流程图）
const { C, sectionTitle, bigCallout, mkSh } = require("./common");
module.exports = {
  slideConfig: { type: "roadmap", index: 2, title: "课程学习路线" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "课程学习路线图", C.bgLight);
    const stages = [
      { name: "入门筑基", sub: "认识产品 · 学会提问", color: C.primary, pts: ["第1章 产品与基础入门", "第2章 任务创建与结果管理", "第3章 灵感模块"], goal: "会用" },
      { name: "进阶修能", sub: "配置能力 · 组合武器", color: C.secondary, pts: ["第4章 技能·专家·专家团", "第5章 连接器与资料库", "第6章 模型配置"], goal: "善用" },
      { name: "实战出师", sub: "场景贯通 · 无人值守", color: C.accent, pts: ["第7章 助理连接配置", "第8章 自动化", "第9章 综合实战与 OPC"], goal: "驾驭" },
    ];
    stages.forEach((st, i) => {
      const x = 0.6 + i * 3.02, y = 1.5, w = 2.7, h = 2.9;
      s.addShape("roundRect", { x, y, w, h, rectRadius: 0.08, fill: { color: C.bgWhite }, line: { color: st.color, width: 1.25 }, shadow: mkSh() });
      // 阶段色带 + 目标印章
      s.addShape("roundRect", { x, y, w, h: 0.62, rectRadius: 0.08, fill: { color: st.color } });
      s.addText(st.name, { x: x + 0.2, y: y + 0.06, w: w - 1.1, h: 0.36, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, valign: "middle", margin: 0 });
      s.addShape("ellipse", { x: x + w - 0.72, y: y + 0.13, w: 0.36, h: 0.36, fill: { color: "FFFFFF", transparency: 25 } });
      s.addText(st.goal, { x: x + w - 0.72, y: y + 0.13, w: 0.36, h: 0.36, fontSize: 9.5, fontFace: "Microsoft YaHei", bold: true, color: st.color, align: "center", valign: "middle", margin: 0 });
      s.addText(st.sub, { x: x + 0.2, y: y + 0.66, w: w - 0.4, h: 0.3, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0 });
      st.pts.forEach((p, pi) => {
        const py = y + 1.05 + pi * 0.55;
        s.addShape("rect", { x: x + 0.2, y: py + 0.05, w: 0.16, h: 0.16, fill: { color: st.color } });
        s.addText(p, { x: x + 0.48, y: py, w: w - 0.7, h: 0.4, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
      });
      // 阶段间箭头
      if (i < 2) {
        const ax = x + w + 0.12;
        s.addText("▶", { x: ax, y: y + 1.15, w: 0.22, h: 0.3, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.secondary, align: "center", margin: 0 });
      }
    });
    bigCallout(s, "全程路线：会用（3 章）→ 善用（3 章）→ 驾驭（3 章），每章配必做实验验证。", 4.75, 0.38);
  }
};