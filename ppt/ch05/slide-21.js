// slide-21.js — 完整工作链路：取 → 用 → 存（深色强调页 + 最佳实践）
const { C, topAccentBar, bottomAccentBar } = require("./common");
module.exports = {
  slideConfig: { type: "callout", index: 21, title: "资料处理完整工作链路" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.darkBg };
    topAccentBar(s);
    bottomAccentBar(s);
    s.addText("资料处理完整工作链路", {
      x: 0.6, y: 0.55, w: 8.8, h: 0.55,
      fontSize: 22, fontFace: "Microsoft YaHei", bold: true, color: "B8E8DC", margin: 0
    });
    s.addShape("rect", { x: 0.6, y: 1.12, w: 1.0, h: 0.035, fill: { color: C.accent } });
    s.addText("取资料 → AI 加工 → 存回沉淀，一条连贯的端到端工作链路", {
      x: 0.6, y: 1.22, w: 8.8, h: 0.32,
      fontSize: 12.5, fontFace: "Microsoft YaHei", italic: true, color: "DDF2EC", margin: 0
    });
    const stages = [
      { t: "取资料", d: "连接云平台账号，将目标文件“添加到任务”" },
      { t: "AI 加工", d: "向 AI 描述加工任务（提炼摘要、翻译、数据分析等）" },
      { t: "存回沉淀", d: "产物面板点击“上传到云端”，一键保存回资料库" },
    ];
    stages.forEach((it, i) => {
      const x = 0.8 + i * 3.15;
      s.addShape("rect", { x, y: 1.75, w: 2.55, h: 1.05, fill: { color: C.primary }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.15 } });
      s.addText(it.t, { x, y: 1.83, w: 2.55, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, align: "center", margin: 0 });
      s.addText(it.d, { x: x + 0.15, y: 2.26, w: 2.25, h: 0.48, fontSize: 9.5, fontFace: "Microsoft YaHei", color: "DDF2EC", align: "center", margin: 0, lineSpacingMultiple: 1.15 });
      if (i < 2) {
        s.addText("→", { x: x + 2.58, y: 1.95, w: 0.45, h: 0.5, fontSize: 26, fontFace: "Microsoft YaHei", bold: true, color: "B8E8DC", align: "center", margin: 0 });
      }
    });
    s.addText("数据安全与管理效率 · 最佳实践", {
      x: 0.6, y: 3.15, w: 8.8, h: 0.35,
      fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: "B8E8DC", margin: 0
    });
    const best = [
      "权限最小化：仅授权 WorkBuddy 访问当前任务必需的文档目录",
      "产物分类沉淀：存回产物时，建立规范的文件夹层级，避免文件堆积",
      "账号专用化：尽量使用工作专用账号进行绑定，隔离个人隐私数据",
      "定期巡检：定期检查资料库的绑定状态与授权范围，及时清理不再需要的连接",
    ];
    best.forEach((b, i) => {
      const y = 3.62 + i * 0.44;
      s.addText("▸ " + b, {
        x: 0.8, y, w: 8.6, h: 0.4,
        fontSize: 12, fontFace: "Microsoft YaHei", color: "DDF2EC", margin: 0
      });
    });
    s.addText("—— 掌握了连接器与资料库，WorkBuddy 才真正具备了“连接一切”的数据能力", {
      x: 0.6, y: 5.22, w: 8.8, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei", italic: true, color: "C8E8E0", margin: 0
    });
  }
};