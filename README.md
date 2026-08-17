# WorkBuddy 效率进阶实训课程

[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)
[![Docs: workbuddy.cn](https://img.shields.io/badge/Docs-workbuddy.cn-28B894.svg)](https://www.workbuddy.cn/docs/workbuddy)
[![Slides: 9章+合集](https://img.shields.io/badge/Slides-9%E7%AB%A0%E5%90%88%E9%9B%86226%E9%A1%B5-28B894.svg)](./ppt/full-course/output/)

**全场景 AI 办公实操提效课程** —— 让学员熟练掌握 WorkBuddy 的实操技能，在日常办公中实实在在提升效率。

- **定位**：理论 + 实操 + 提效（非认证课程）
- **交付物**：教材（9 章 + 附录）· 实验手册（38 个实验）· 授课课件（9 章 222 页 + 课程总览 4 页 + 全套合集 226 页）
- **权威依据**：官方文档 [workbuddy.cn/docs/workbuddy](https://www.workbuddy.cn/docs/workbuddy)（全程逐条核验并链接引用）
- **版本基准**：WorkBuddy 当前最新版本，产品界面与功能迭代较快的内容标注"以产品实际为准"
- **许可证**：[CC BY-NC-ND 4.0](./LICENSE.md)（署名-非商业-禁止演绎）

---

## 目录结构

```
WorkBuddy-Course/
├── 课程大纲.md                  # 课程大纲（章 → 节 → 小节三级）
├── README.md                    # 本文件（仓库说明）
├── AGENT.md                     # 编写方法规范（供后续团队 / AI 代理升级迭代课程）
├── CHANGELOG.md                 # 变更记录
├── LICENSE.md                   # CC BY-NC-ND 4.0 授权
├── textbook/                    # 教材（9 章 + 附录 + 术语表 + 规范）
│   ├── ch01-product-fundamentals.md          # 第 1 章 产品与基础入门
│   ├── ch02-task-creation-and-results.md     # 第 2 章 任务创建与结果管理
│   ├── ch03-inspiration.md                   # 第 3 章 灵感模块
│   ├── ch04-skills-experts-and-teams.md      # 第 4 章 技能、专家与专家团
│   ├── ch05-connectors-and-library.md        # 第 5 章 连接器与资料库
│   ├── ch06-models.md                        # 第 6 章 模型配置
│   ├── ch07-assistant-channels.md            # 第 7 章 助理连接配置
│   ├── ch08-automation.md                    # 第 8 章 自动化
│   ├── ch09-office-scenarios-and-opc.md      # 第 9 章 综合实战与 OPC 一人公司
│   ├── appendix-official-docs-reference.md   # 附录 A 官方文档对照
│   ├── GLOSSARY.md                           # 术语表
│   ├── COURSE-OUTLINE.md                     # 教材大纲（章↔实验映射）
│   └── TEXTBOOK-STYLE-GUIDE.md               # 教材编写规范
├── labs/                         # 实验手册（与 textbook 平级，非子目录）
│   ├── README.md                 # 实验手册说明（图例、环境要求、对照表）
│   ├── ch01-labs.md ~ ch08-labs.md   # 第 1-8 章配套实验（知识点验证型）
│   └── ch09-labs.md              # 第 9 章综合演练（咖啡品牌季度经营分析，阶段 0-7）
└── ppt/                          # 授课课件（pptxgenjs 源码工程，可再生成）
    ├── ch01/ ~ ch09/             # 各章课件（slide-XX.js + common.js + compile.js + output/*.pptx）
    ├── course/                   # 课程总览（封面 / 路线图 / 九章回顾 / 总结尾）
    └── full-course/              # 全套合集（总览 + 九章拼接，226 页）
```

## 快速使用

- **大纲**：先看 `课程大纲.md`——章节结构、学时规划（约 49h / 紧凑 30h）、实验分级（必做 27 / 可选 11）
- **备课**：按章使用 `ppt/ch0N/output/*.pptx` 课件；制作/修改课件见 `ppt/ch0N/` 源码（`node compile.js` 重新生成）
- **讲授**：教材 + 课件 + 实验三件套配套使用，每章结尾衔接实验
- **考核**：每章验收清单 + 思考题；第 9 章综合演练按综合评分表自评/互评；结课做"改造前后效率对比"验证提效

## 本地构建课件

```bash
# 每个章节目录是独立工程（ch01 ~ ch09 / course / full-course）
cd ppt/ch01
npm install --no-audit --no-fund   # 首次安装依赖
node compile.js                    # 重新生成 output/*.pptx
```

## 更新迭代

- 内容修订请严格遵循 [AGENT.md](./AGENT.md) 中的编写规范（官方口径、全角引号、链接引用、结构骨架、字号规范等）
- 教材修订基准：`textbook/TEXTBOOK-STYLE-GUIDE.md`
- 课件重生成：修改 `ppt/ch0N/slide-*.js` 后在该目录执行 `node compile.js`，修改章节前后需同步重编 `ppt/full-course`
- **复刻到其他项目**：见 [COURSE-WEB-PIPELINE.md](./COURSE-WEB-PIPELINE.md)「双形态课件发布流水线」复刻指南（含通用脚本 `ppt/scripts/slides-to-html.js`）

## 贡献指南

- 本仓库采用 CC BY-NC-ND 4.0 授权：**允许引用分享（须署名），禁止商业用途，禁止修改后重新分发**
- 欢迎提交 Issue 反馈勘误与建议；如需提交内容变更，请阅读 [AGENT.md](./AGENT.md) 并遵循其中规范
- 未经授权的修改版不得分发——如需改编合作，请通过仓库主页联系作者

---

> 课程名称：WorkBuddy 效率进阶实训课程 ｜ 版本基准：以官方文档与当前产品版本为准 ｜ 2026-08