# 「双形态课件发布流水线」复刻指南

> 把同一套 `slide-XX.js` 课件源码，一键产出 **PPT（.pptx）+ 网页版课件（HTML）+ 并入 MkDocs 教材站**，并由 GitHub Actions 自动部署到 GitHub Pages。
>
> 适用于任何基于 **pptxgenjs 源码** 构建课件、用 **MkDocs + GitHub Pages** 发布文档的课程/教程项目。

---

## 一、流程纵览

```
slide-XX.js（pptxgenjs 源码，内容单一来源）
    │
    ├──①  node compile.js               ──►  output/*.pptx   （传统 PPT）
    │
    └──②  node export-html.js / slides-to-html.js
                                        ──►  output/*.html    （网页版课件，←/→ 翻页，F 全屏）
    │
    │  （可选）③  MkDocs 教材站
    │     docs/ ← 聚合 textbook/、labs/、html/
    │     mkdocs build ──► site/
    │
    └──④  GitHub Actions（deploy-pages.yml）
                                        ──►  GitHub Pages 在线访问
```

## 二、目录/文件约定（项目里需要具备）

```
你的项目/
├── textbook/              # 教材 Markdown（可选，仅当要教材站）
├── labs/ 或 manual/       # 实验 Markdown（可选）
├── ppt/
│   ├── ch01/ … ch0N/      # 每章一个独立工程
│   │   ├── common.js      # 公共样式库（C 配色 + helper 函数）
│   │   ├── compile.js     # PPT 编译脚本（TOTAL=N，循环 require slide-XX.js）
│   │   ├── slide-01.js …  # 每页一个文件：export { createSlide(pres) }
│   │   └── output/*.pptx
│   ├── scripts/
│   │   ├── export-html.js      # 本仓库版（CHAPTERS 硬编码）
│   │   └── slides-to-html.js   # 通用参数化版（推荐复刻用）
│   └── html/              # 生成的网页版课件 + index.html
├── mkdocs.yml             # MkDocs 站点配置（可选）
└── .github/workflows/deploy-pages.yml   # 自动部署
```

## 三、核心机制：双形态渲染的原理

pptxgenjs 的 `createSlide(pres)` 只依赖 `pres.addSlide()` 返回的 slide 对象，
以及 slide 上的 `addText / addShape / addTable`。因此可以**不用真实生成 pptx**，
而是 mock 一个 pres，把每次调用（文本、坐标 x/y、宽高 w/h、字号、颜色、透明度、对齐）
**原样记录**下来，再转写成绝对定位的 HTML。

```js
function createMockPres() {
  const slides = [];
  const makeSlide = () => ({
    background: null, items: [],
    addShape(shape, opts) { this.items.push({ kind: "shape", shape, opts }); },
    addText(text, opts)   { this.items.push({ kind: "text",  text, opts }); },
    addTable(rows, opts)  { this.items.push({ kind: "table", rows, opts }); },
  });
  return { slides, addSlide() { const s = makeSlide(); this.slides.push(s); return s; } };
}
// 调用每个 slide 模块
const mod = require("./slide-01.js");
const pres = createMockPres();
mod.createSlide(pres);
// pres.slides[0] 即该页的全部元素 → 渲染成 <section>
```

四个设计要点（已踩坑验证）：
1. **单位换算**：PPT 坐标单位是"英寸"，画布 10 × 5.625 英寸。HTML 用 `1in = 100px`（即画布 1000 × 562.5），字号 `1pt = 100/72px`。
2. **透明度**：pptxgenjs 的 `transparency`（0-100）换算为 CSS alpha = `1 - transparency/100`，用于 `rgba()`（文字与背景都要处理）。
3. **首屏必须静态显示**：所有 `.slide` 默认 `display:none`，若只靠 JS 在首帧加 `active` 会偶发空白。**必须在 HTML 静态文本中给第 1 页直接写 `class="slide active"`**。
4. **helper 只取已导出的**：`common.js` 里的 `sectionTitle/card/divider/...` 最终也是调用 `s.addShape/addText`，mock 天然兼容，无需改动。

## 四、通用脚本用法（slides-to-html.js）

```bash
node slides-to-html.js \
  --slides "../ch01" \
  --slides "../ch02" \
  --out "../html" \
  --titles "第 1 章 产品与基础入门|第 2 章 任务创建与结果管理" \
  --w 1000 --h 562.5
```

- `--slides` 可重复传，任意多个章节目录依次打包
- 自动按目录名生成 `ch01.html` 等，并生成 `index.html` 导航
- 不传 `--titles` 时用目录名作标题；`--titles` 用 `|` 分隔对应各目录
- 生成自包含 HTML（无外部依赖），支持 ←/→/空格翻页、F 全屏、点击切页、进度条、自适应缩放

## 五、接入 MkDocs 教材站（可选）

`mkdocs.yml` 关键配置：
- `docs_dir: docs`（MkDocs 要求 docs_dir 必须是 config 的子目录，**不能指向仓库根**）
- 用 `exclude` 插件排除 `ppt/**`、`*.js`、`*.json`、`.git*`
- nav 编排 教材 / 实验 / 网页版课件的入口

> 教材 source 与 MkDocs 的 docs 目录是**两份**：教材源放 `textbook/`，构建时用脚本把
> `textbook/`、`labs/`、`html/`、首页 复制进 `docs/` 再 `mkdocs build`。这样保持单源、避免重复维护。
> `.gitignore` 需忽略 `docs/`、`site/`、`.mkdocs_cache/`。

## 六、自动部署（GitHub Actions）

`.github/workflows/deploy-pages.yml`：
1. `push` 到 `main` 触发
2. `build` job：checkout → setup-python → 安装 `mkdocs-material mkdocs-exclude` → 聚合教材/实验/课件到 `docs/` → `mkdocs build --strict` → **用 `actions/upload-pages-artifact@v3` 上传 `site/`**
3. `deploy` job：`environment: github-pages` + `actions/deploy-pages@v4`
4. 需在仓库 Settings → Pages → Source 选择 **GitHub Actions**（或 `gh api repos/{owner}/{repo}/pages -X POST --input '{"build_type":"workflow"}'`）
5. `permissions: { pages: write, id-token: write }` + `concurrency: group: pages`

> ⚠️ **务必用 `upload-pages-artifact`，不要替换成通用 `upload-artifact`**——deploy-pages 依赖它特殊的打包格式，换成通用上传会报 "Artifact could not be deployed"。

## 七、复刻到新项目的迁移清单

- [ ] 课件改造为 pptxgenjs 源码结构（common.js + compile.js + slide-XX.js）
- [ ] 复制 `ppt/scripts/slides-to-html.js`，按本项目配色微调 CSS（主色默认 `#28B894`）
- [ ] 复制 `mkdocs.yml`，改 `site_name / site_url / nav`
- [ ] 复制 `.github/workflows/deploy-pages.yml`，改仓库名
- [ ] 复制 `docs-index.md` 作首页源（改项目简介）
- [ ] 更新 `.gitignore`（忽略 `docs/ site/ node_modules`）、`.gitattributes`
- [ ] gh 启用 Pages（build_type=workflow）→ push → 验证

## 八、常见坑（已踩，直接避）

| 现象 | 原因 | 解法 |
|---|---|---|
| 教材站首页 404 | MkDocs 生成的根目录无 `index.html`（nav 首项非 index） | 首页源设为 `index.md`，nav 首项 `首页: index.md` |
| 网页课件首页空白 | `.slide` 默认隐藏 + JS 首帧加 active 偶发失败 | HTML 静态给第 1 页写 `class="slide active"` |
| 部署报 "Artifact could not be deployed" | 用了通用 `upload-artifact` 而非 `upload-pages-artifact` | 换回 `actions/upload-pages-artifact@v3` |
| `mkdocs build` 报 docs_dir 非子目录 | docs_dir 指向仓库根 | docs_dir 设为 `docs`，用聚合脚本复制内容 |
| 部署 503 | GitHub 全局故障（Actions/Pages outage） | 查 githubstatus.com，稍后 `gh workflow run` 重试 |