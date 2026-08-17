// slide-22.js — 分隔页：配套实验
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 22, title: "配套实验（实验 5.1-5.4）" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "实验", "配套实验（实验 5.1 - 5.4）", [
      "实验 5.1 内置连接器接入：连接器管理入口、OAuth 扫码授权、scope 确认、绿色圆点连接状态（○ 可选）",
      "实验 5.2 自定义 MCP 连接器：mcp.json 配置（command/args/env 或 url/headers）、MCP Server 状态验证（○ 可选）",
      "实验 5.3 资料库连接与双模搜索：连接腾讯文档/ima/乐享，语义搜索 vs 关键词搜索（○ 可选）",
      "实验 5.4 资料引用与存回闭环：引用资料（添加到任务）→ AI 加工 → 产物上传到云端（○ 可选）",
      "本章实验普遍需要外部账号授权，请提前准备可用账号与对应 App，授权时仔细阅读权限范围（scope）",
    ]);
  }
};