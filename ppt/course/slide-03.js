// slide-03.js — 九章一键回顾（3×3 网格卡）
const { C, sectionTitle, bigCallout } = require("./common");
module.exports = {
  slideConfig: { type: "recap", index: 3, title: "九章回顾" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "九章回顾 · 一页看懂课程全貌");
    const chs = [
      { n: "01", t: "产品与基础入门", d: "工作台 · 三模式 · 任务体系", c: C.primary },
      { n: "02", t: "任务创建与结果", d: "三要素公式 · 结果区四类内容", c: C.primary },
      { n: "03", t: "灵感模块", d: "精选成品 · 一键复刻", c: C.primary },
      { n: "04", t: "技能·专家·专家团", d: "能做什么 / 谁能帮我 / 团队协作", c: C.secondary },
      { n: "05", t: "连接器与资料库", d: "MCP · OAuth · 双模检索 · 存回", c: C.secondary },
      { n: "06", t: "模型配置", d: "推理模式 · 选型 · 成本", c: C.secondary },
      { n: "07", t: "助理连接配置", d: "微信/企微/飞书 · 远程触达", c: C.accent },
      { n: "08", t: "自动化", d: "定时触发 · 无人值守", c: C.accent },
      { n: "09", t: "综合实战与 OPC", d: "四链路串联 · 一人公司", c: C.accent },
    ];
    chs.forEach((it, i) => {
      const col = i % 3, row = Math.floor(i / 3);
      const x = 0.6 + col * 3.02, y = 1.35 + row * 1.3;
      s.addShape("roundRect", { x, y, w: 2.85, h: 1.12, rectRadius: 0.08, fill: { color: C.bgWhite }, line: { color: C.border, width: 0.75 }, shadow: mkSh() });
      s.addShape("rect", { x, y, w: 0.07, h: 1.12, fill: { color: it.c } });
      s.addText(it.n, { x: x + 0.2, y: y + 0.08, w: 0.55, h: 0.35, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: it.c, margin: 0 });
      s.addText(it.t, { x: x + 0.8, y: y + 0.1, w: 1.95, h: 0.32, fontSize: 11, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      s.addText(it.d, { x: x + 0.22, y: y + 0.55, w: 2.45, h: 0.4, fontSize: 9.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0 });
    });
    bigCallout(s, "核心能力一以贯之：理解语言 · 规划执行 · 多模态 · 本地文件操作。", 5.1, 0.38);
    function mkSh() {
      return { type: "outer", color: "000000", blur: 4, offset: 1.2, angle: 135, opacity: 0.08 };
    }
  }
};