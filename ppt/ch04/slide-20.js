// slide-20.js — 4.4.2 五类典型专家团场景（2x3 卡片）
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 20, title: "五类典型专家团场景" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "五类典型专家团场景");
    s.addText("以下五类团队在典型商业场景中较为常用（团队名称与分类以产品内专家中心实际展示为准）：", {
      x: 0.6, y: 1.1, w: 8.8, h: 0.35, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    const teams = [
      { t: "OPC 一人公司类", d: "提供法务、财务、品牌、运营、研究的一站式服务。", c: "典型案例：从 0 到 1 启动一家小公司，协助完成商标注册规划、初创期财税模型建立以及基础运营策略的制定。", strip: C.primary },
      { t: "产品设计类", d: "专注于产品战略、市场定位、竞品分析以及原型设计。", c: "典型案例：新项目立项期，协助创业者在 3 天内完成 MVP（最小可行性产品）的市场定位与高保真原型输出。", strip: C.accent },
      { t: "技术工程类", d: "模拟完整软件公司的技术编制，角色涵盖产品经理、架构师、工程师以及 QA 测试。", c: "典型案例：代码部署前进行系统架构评审、性能瓶颈定位分析以及代码安全审计。", strip: C.secondary },
      { t: "金融投资类", d: "支持 A股/美股研究、个人理财规划、BP（商业计划书）财务建模与现金流推演。", c: "典型案例：为即将开启融资的创业项目建立详尽的财务模型。", strip: C.accentWarm },
      { t: "品牌营销类", d: "专注内容创作、内容变现、SEO（搜索引擎优化）与传播策略以及私域运营方案。", c: "典型案例：为一个全新的自媒体账号制定包含冷启动策略的 30 天增长计划。", strip: C.primary },
      { t: "使用提示", d: "技术审计时确保敏感硬编码密钥或业务核心代码已适当遮蔽；AI 生成的金融内容仅供参考，绝不构成任何实质性的投资建议。", c: "五团分工：一人公司打底、产品设计开题、技术工程落地、金融投资护航、品牌营销放量。", strip: C.accentWarm },
    ];
    teams.forEach((it, i) => {
      const x = 0.6 + (i % 2) * 4.55;
      const y = 1.5 + Math.floor(i / 2) * 1.85;
      card(s, x, y, 4.3, 1.75, it.strip);
      s.addText(it.t, { x: x + 0.2, y: y + 0.1, w: 3.9, h: 0.4, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.52, w: 3.9, h: 0.55, fontSize: 9.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.18 });
      s.addText([{ text: "案例：", options: { bold: true, color: C.accent } }, { text: it.c }], {
        x: x + 0.2, y: y + 1.12, w: 3.9, h: 0.58, fontSize: 9.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.18
      });
    });
  }
};