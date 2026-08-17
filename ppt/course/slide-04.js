// slide-04.js — 课程总结尾（深色徽章 + 结业语 + 资源）
const { C, topAccentBar, bottomAccentBar } = require("./common");
module.exports = {
  slideConfig: { type: "closing", index: 4, title: "课程总结尾" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.darkBg };
    topAccentBar(s);
    bottomAccentBar(s);
    // 装饰环
    s.addShape("ellipse", { x: -1.2, y: -1.4, w: 3.2, h: 3.2, fill: { color: "28B894", transparency: 80 }, line: { color: "B8E8DC", width: 1, transparency: 45 } });
    s.addShape("ellipse", { x: 8.3, y: 3.4, w: 3.0, h: 3.0, fill: { color: "2E9E83", transparency: 78 }, line: { color: "B8E8DC", width: 1, transparency: 50 } });
    // 结业徽章（环形 + 对勾）
    const bx = 1.0, by = 1.05, bw = 1.5;
    s.addShape("ellipse", { x: bx, y: by, w: bw, h: bw, fill: { color: "FFFFFF", transparency: 12 }, line: { color: "B8E8DC", width: 1.5 } });
    s.addShape("ellipse", { x: bx + 0.22, y: by + 0.22, w: bw - 0.44, h: bw - 0.44, fill: { color: "28B894" } });
    s.addText("✓", { x: bx, y: by - 0.03, w: bw, h: bw, fontSize: 44, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, align: "center", valign: "middle", margin: 0 });
    // 结课语
    s.addText("恭喜完成全部课程学习", {
      x: 2.9, y: 1.15, w: 6.6, h: 0.6,
      fontSize: 24, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, margin: 0
    });
    s.addText("从一句需求到一人公司级交付 —— 你已经走完了「认知 → 能力 → 场景」的完整路径", {
      x: 2.9, y: 1.85, w: 6.6, h: 0.5,
      fontSize: 13.5, fontFace: "Microsoft YaHei", color: "DDF2EC", margin: 0
    });
    // 统计条
    const stats = [
      { n: "9", t: "章体系化课程" },
      { n: "9", t: "套配套实验" },
      { n: "9", t: "套教学课件" },
      { n: "30+", t: "个官方文档链接" },
    ];
    stats.forEach((st, i) => {
      const x = 2.9 + i * 2.1, y = 2.75;
      s.addText(st.n, { x, y, w: 1.8, h: 0.55, fontSize: 26, fontFace: "Microsoft YaHei", bold: true, color: "28B894", margin: 0 });
      s.addText(st.t, { x, y: y + 0.52, w: 1.8, h: 0.3, fontSize: 10.5, fontFace: "Microsoft YaHei", color: "B8E8DC", margin: 0 });
    });
    // 建议下一步
    s.addShape("roundRect", { x: 0.95, y: 3.7, w: 8.1, h: 1.0, rectRadius: 0.08, fill: { color: "FFFFFF", transparency: 90 }, line: { color: "B8E8DC", width: 0.75, transparency: 35 } });
    s.addText("🎯 下一步建议", {
      x: 1.25, y: 3.82, w: 2.0, h: 0.3, fontSize: 11.5, fontFace: "Microsoft YaHei", bold: true, color: "28B894", margin: 0
    });
    s.addText("完成实验 9（综合演练·咖啡品牌季度经营分析）并对照综合评分表自评；结合官方文档深化练习，向 OPC 一人公司进阶。", {
      x: 1.25, y: 4.14, w: 7.5, h: 0.45, fontSize: 11, fontFace: "Microsoft YaHei", color: "E4F6F0", margin: 0
    });
    // 资源
    s.addText("课程资源：textbook/ 教材 · labs/ 配套实验 · ppt/ 课件   |   官方文档：workbuddy.cn/docs/workbuddy", {
      x: 0.95, y: 4.95, w: 8.4, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei", color: "9FD8C9", margin: 0
    });
    s.addText("WorkBuddy 效率进阶实训课程 · 2026 教育版 · 感谢使用", {
      x: 0.95, y: 5.28, w: 8.4, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei", color: "7FBFAF", margin: 0
    });
  }
};