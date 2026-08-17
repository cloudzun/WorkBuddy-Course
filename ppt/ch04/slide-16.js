// slide-16.js — 4.3.3 召唤与自定义流程（步骤 + 自定义块）
const { C, sectionTitle, numBadge } = require("./common");
module.exports = {
  slideConfig: { type: "steps", index: 16, title: "召唤与自定义流程" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "召唤与自定义流程", C.bgLight);
    s.addShape("rect", { x: 0.6, y: 1.12, w: 8.8, h: 0.4, fill: { color: C.bgBlue } });
    s.addText("请参见产品界面：点击左侧边栏的“专家”入口，即可浏览系统内置及已创建的专家列表。", {
      x: 0.8, y: 1.12, w: 8.5, h: 0.4, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0
    });
    s.addText("召唤专家的标准流程", { x: 0.6, y: 1.62, w: 4.0, h: 0.32, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
    const steps = [
      { t: "浏览与筛选", d: "在专家中心通过标签或搜索定位所需领域" },
      { t: "评估卡片", d: "查看能力介绍、擅长领域和任务示例，对比后做出选择" },
      { t: "确认成本", d: "留意该实体的积分消耗提示（特别是专家团），并明确 AI 生成内容仅供参考的原则" },
      { t: "下达任务", d: "使用自然语言向专家描述任务需求；专家团场景下团长自动接管并进行后续拆解" },
    ];
    steps.forEach((it, i) => {
      const y = 1.98 + i * 0.58;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(it.t, { x: 1.35, y, w: 2.1, h: 0.5, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 3.55, y, w: 5.8, h: 0.5, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    // 创建自定义专家 / 专家团
    s.addShape("rect", { x: 0.6, y: 4.4, w: 8.8, h: 0.92, fill: { color: C.bgCard }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
    s.addShape("rect", { x: 0.6, y: 4.4, w: 0.07, h: 0.92, fill: { color: C.accent } });
    s.addText("创建自定义专家 / 专家团：通过“我的专家”入口创建自己的专家（Agent）或专家团（Team）并分享专业知识，字段约束与向导流程以产品内实际展示为准。", {
      x: 0.95, y: 4.46, w: 8.2, h: 0.4, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.15
    });
    s.addText("建议：从已完成的日常项目中提取优秀的提示词和交互逻辑，将其沉淀为专家的默认经验。", {
      x: 0.95, y: 4.9, w: 8.2, h: 0.32, fontSize: 10, fontFace: "Microsoft YaHei", color: C.primary, bold: true, margin: 0
    });
    s.addText("官方文档《专家》：https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Expert-Center", {
      x: 0.6, y: 5.4, w: 8.8, h: 0.2,
      fontSize: 8, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};