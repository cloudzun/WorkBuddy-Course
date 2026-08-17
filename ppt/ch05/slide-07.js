// slide-07.js — 分隔页 5.2
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 7, title: "连接器的配置与管理" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "5.2", "连接器的配置与管理", [
      "5.2.1 内置连接器概览：腾讯生态与第三方服务",
      "5.2.2 企业应用连接器配置示例：QQ 邮箱与腾讯乐享的 OAuth 扫码授权",
      "5.2.3 自定义 MCP 连接器：mcp.json 配置文件与腾讯云 MCP 市场",
      "5.2.4 连接器的安全与解绑：5 条安全使用原则",
    ]);
  }
};