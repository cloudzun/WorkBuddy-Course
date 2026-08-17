// slide-11.js — 5.2.3 自定义 MCP 连接器（mcp.json 代码块 + 字段说明）
const { C, sectionTitle, codeBlock } = require("./common");
module.exports = {
  slideConfig: { type: "code", index: 11, title: "自定义 MCP 连接器" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "自定义 MCP 连接器", C.bgLight);
    s.addText("如果内置连接器无法满足你的需求，你可以通过自定义 MCP 连接器接入内部系统或第三方开源服务。配置主要涉及编辑配置文件（连接器管理 > 自定义 MCP 连接器 > MCP 服务管理弹窗）。", {
      x: 0.6, y: 1.08, w: 8.8, h: 0.55, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0, lineSpacingMultiple: 1.2
    });
    const code = [
      "{",
      '  "mcpServers": {',
      '    "demo-server": {',
      '      "command": "<本地启动命令>",',
      '      "args": ["<参数>"],',
      '      "env": { "<变量名>": "<变量值>" },',
      '      "url": "<远程服务地址>",',
      '      "headers": { "<鉴权信息>": "<API Key>" }',
      "    }",
      "  }",
      "}",
    ].join("\n");
    codeBlock(s, 0.6, 1.75, 4.35, 2.6, code, 10);
    const fields = [
      { t: "mcpServers", d: "定义所有的自定义服务对象" },
      { t: "command / args", d: "stdio 模式下指定本地启动命令及其参数" },
      { t: "env", d: "配置运行该服务所需的系统环境变量" },
      { t: "url / headers", d: "通过 HTTP 访问远程 MCP 服务时，填写连接地址与鉴权信息（如 API Key）" },
    ];
    fields.forEach((it, i) => {
      const y = 1.75 + i * 0.63;
      s.addText(it.t, { x: 5.15, y, w: 4.25, h: 0.3, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: 5.15, y: y + 0.33, w: 4.25, h: 0.28, fontSize: 9.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0 });
    });
    s.addShape("rect", { x: 0.6, y: 4.5, w: 8.8, h: 0.6, fill: { color: C.bgCard } });
    s.addShape("rect", { x: 0.6, y: 4.5, w: 0.07, h: 0.6, fill: { color: C.accent } });
    s.addText("没有自行开发 MCP 服务能力的用户，可以前往“腾讯云 MCP 市场”获取更多开放生态能力，寻找并引用现成的 MCP 服务配置，极大降低接入门槛。", {
      x: 0.95, y: 4.5, w: 8.2, h: 0.6, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.15
    });
    s.addText("字段为典型结构示意，具体支持字段以官方文档及产品实际为准。（官方文档：《MCP》 https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/MCP-Guide）", {
      x: 0.6, y: 5.22, w: 8.8, h: 0.3, fontSize: 9, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};