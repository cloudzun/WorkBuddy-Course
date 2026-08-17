// slide-14.js — 1.3.2 新建任务栏（六配置入口，2×3 卡片）
const { C, sectionTitle, card } = require("./common");
module.exports = {
  slideConfig: { type: "cards", index: 14, title: "新建任务栏" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "新建任务栏：关键配置入口");
    const items = [
      { t: "工作模式", d: "Ask / Craft / Plan，三大底层模式快速切换", strip: C.primary },
      { t: "模型选择", d: "Auto / 混元 / GLM / MiniMax / Kimi / DeepSeek 等内置模型", strip: C.secondary },
      { t: "工作空间", d: "绑定特定工作目录，隔离项目文件与上下文", strip: C.accent },
      { t: "技能 Skill", d: "指定任务调用能力：内置 20+ 技能包，兼容社区技能导入", strip: C.accentWarm },
      { t: "连接器", d: "接入外部系统或数据源（QQ 邮箱、腾讯文档等）", strip: C.secondary },
      { t: "权限控制", d: "默认权限或完全访问，高危操作二次确认", strip: C.primary },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + (i % 3) * 3.02;
      const y = 1.35 + Math.floor(i / 3) * 1.7;
      card(s, x, y, 2.85, 1.5, it.strip);
      s.addText(it.t, { x: x + 0.16, y: y + 0.12, w: 2.55, h: 0.4, fontSize: 14.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.16, y: y + 0.56, w: 2.55, h: 0.85, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
    });
    warn(s, "安全提示：修改系统级文件或敏感目录时谨慎使用“完全访问”；非信任插件保持最小权限。");
    function warn(s, text) {
      s.addShape("rect", { x: 0.6, y: 4.95, w: 8.8, h: 0.4, fill: { color: C.bgAccent } });
      s.addShape("rect", { x: 0.6, y: 4.95, w: 0.05, h: 0.4, fill: { color: C.accentWarm } });
      s.addText(text, { x: 0.85, y: 4.95, w: 8.3, h: 0.4, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    }
  }
};
