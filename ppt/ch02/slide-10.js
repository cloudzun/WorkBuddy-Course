// slide-10.js — 2.2.1 隐私授权边界（提示）
const { C, sectionTitle, bigCallout, warnBar } = require("./common");
module.exports = {
  slideConfig: { type: "callout", index: 10, title: "隐私授权边界" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "隐私授权边界与安全机制");
    bigCallout(s, "所有文件处理默认在本地完成，原始数据不上传云端；服务端仅处理数据片段，用后即弃，不保存也不用于模型训练（官方文档《任务对话》）。", 1.4, 1.3);
    const points = [
      "仅访问你主动勾选授权的文件夹，系统敏感目录自动拦截",
      "高危操作需二次确认（删除、批量写入、系统配置变更等）",
      "知识库引用：通过资料库/连接器按登录用户权限读取云端资料",
    ];
    points.forEach((p, i) => {
      const y = 3.0 + i * 0.6;
      s.addShape("rect", { x: 0.6, y: y + 0.1, w: 0.3, h: 0.3, fill: { color: C.primary } });
      s.addText(p, { x: 1.1, y, w: 8.2, h: 0.5, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    warnBar(s, "隐私承诺：用后即弃，不保存、不用于模型训练——可放心处理敏感业务数据。", 4.95);
  }
};
