// slide-03.js — 分隔页 5.1
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 3, title: "连接器与 MCP 协议" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "5.1", "连接器与 MCP 协议", [
      "5.1.1 技能、连接器与 MCP 的关系：大脑与触手的分工协作",
      "5.1.2 深入理解 MCP 协议：Client/Server、三类资源与两种传输方式",
      "5.1.3 OAuth 授权流程解析：用户授权、颁发令牌、凭令牌访问",
    ]);
  }
};