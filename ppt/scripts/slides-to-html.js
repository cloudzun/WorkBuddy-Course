// slides-to-html.js — 通用版：把任意 pptxgenjs 课件源码渲染为网页版课件
// 用法（在该脚本所在目录执行）：
//   node slides-to-html.js \
//     --slides "../ch01" --out "../html" --title "第 1 章 产品与基础入门" \
//     --file "ch01" --w 1000 --h 562.5 --pt 100/72 --prefix "slide-"
//   （--slides 可传多次以打包多章到同一 index；不带参数则打印用法）
//
// 原理：mock 一个 pptxgenjs 的 pres/slide，调用每个 slide 模块的 createSlide(pres)，
// 把 addText / addShape / addTable 的文本、坐标、字号、颜色、透明度精确提取，
// 渲染为 16:9 自包含 HTML（键盘翻页 / F 全屏 / 自适应缩放，无外部依赖）。
const fs = require("fs");
const path = require("path");

function parseArgs(argv) {
  const a = {};
  for (let i = 2; i < argv.length; i++) {
    if (argv[i].startsWith("--")) a[argv[i].slice(2)] = argv[i + 1];
  }
  return a;
}

// ---------- mock pptxgenjs ----------
function createMockPres() {
  const slides = [];
  const makeSlide = () => ({
    background: null,
    items: [],
    addShape(shape, opts) { this.items.push({ kind: "shape", shape, opts: opts || {} }); },
    addText(text, opts) { this.items.push({ kind: "text", text, opts: opts || {} }); },
    addTable(rows, opts) { this.items.push({ kind: "table", rows, opts: opts || {} }); },
    addImage() {}, addChart() {}, addMedia() {},
  });
  return {
    slides,
    addSlide() { const s = makeSlide(); this.slides.push(s); return s; },
  };
}

// ---------- 渲染工具 ----------
function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function hexToRgba(hex, transparency) {
  let h = String(hex || "FFFFFF").replace("#", "");
  if (h.length === 3) h = h.split("").map(c => c + c).join("");
  const n = parseInt(h, 16);
  const alpha = transparency == null ? 1 : 1 - Number(transparency) / 100;
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${Math.max(0, Math.min(1, alpha)).toFixed(2)})`;
}
function fontFamily(face) {
  if (!face) return "'Microsoft YaHei', 'PingFang SC', 'Noto Sans SC', sans-serif";
  if (/consolas/i.test(face)) return "Consolas, 'Courier New', monospace";
  return `'${face}', 'Microsoft YaHei', 'PingFang SC', sans-serif`;
}
function textStyle(o, IN_TO_PX, PT_TO_PX) {
  const st = [];
  st.push(`font-size:${(o.fontSize || 12) * PT_TO_PX}px`);
  st.push(`font-family:${fontFamily(o.fontFace)}`);
  if (o.bold) st.push("font-weight:700");
  if (o.italic) st.push("font-style:italic");
  if (o.color) st.push(`color:${hexToRgba(o.color, o.transparency)}`);
  if (o.align) st.push(`text-align:${o.align}`);
  st.push(`line-height:${((o.lineSpacingMultiple || 1) * 1.25).toFixed(2)}`);
  return st.join(";");
}
function renderTextItems(text, o, IN_PX, PT_PX) {
  if (typeof text === "string") {
    return esc(text).split("\n").map(t => `<div>${t}</div>`).join("");
  }
  if (Array.isArray(text)) {
    return text.map(seg => {
      const segT = typeof seg === "string" ? seg : (seg.text || "");
      const segO = seg && seg.options ? seg.options : {};
      return `<span style="${textStyle(segO, IN_PX, PT_PX)}">${esc(segT).split("\n").map(t => `<div>${t}</div>`).join("")}</span>`;
    }).join("");
  }
  return "";
}
function renderShape(it, IN_PX) {
  const o = it.opts;
  const x = (o.x || 0) * IN_PX, y = (o.y || 0) * IN_PX, w = (o.w || 0) * IN_PX, h = (o.h || 0) * IN_PX;
  const st = [`position:absolute;left:${x}px;top:${y}px;width:${w}px;height:${h}px;`];
  const fill = o.fill || {};
  st.push(fill.color != null ? `background-color:${hexToRgba(fill.color, fill.transparency)}` : "background-color:rgba(0,0,0,0)");
  st.push(o.line && o.line.color ? `border:${(o.line.width || 1) * IN_PX}px solid ${hexToRgba(o.line.color, o.line.transparency)}` : "border:1px solid rgba(0,0,0,0)");
  if (it.shape === "ellipse") st.push("border-radius:50%");
  if (it.shape === "roundRect" && o.rectRadius) st.push(`border-radius:${(o.rectRadius || 0) * IN_PX}px`);
  if (o.shadow) st.push("box-shadow:2px 3px 8px rgba(0,0,0,0.18)");
  return `<div style="${st.join(';')}"></div>`;
}
function renderText(it, IN_PX, PT_PX) {
  const o = it.opts;
  const x = (o.x || 0) * IN_PX, y = (o.y || 0) * IN_PX, w = (o.w || 0) * IN_PX, h = (o.h || 0) * IN_PX;
  let align = "flex-start";
  if (o.valign === "middle") align = "center";
  else if (o.valign === "bottom") align = "flex-end";
  const st = [
    `position:absolute;left:${x}px;top:${y}px;width:${w}px;height:${h}px;`,
    `display:flex;flex-direction:column;justify-content:${align};`, "overflow:hidden;",
    textStyle(o, IN_PX, PT_PX),
  ];
  return `<div style="${st.join(';')}">${renderTextItems(it.text, o, IN_PX, PT_PX)}</div>`;
}
function renderTable(it, IN_PX, PT_PX) {
  const o = it.opts;
  const x = (o.x || 0) * IN_PX, y = (o.y || 0) * IN_PX, w = (o.w || 0) * IN_PX;
  const colW = (o.colW || []).map(c => c * IN_PX);
  const rowH = o.rowH || [];
  let html = `<div style="position:absolute;left:${x}px;top:${y}px;width:${w}px;"><table style="width:100%;border-collapse:collapse;">`;
  (it.rows || []).forEach((row, i) => {
    html += "<tr>";
    (row || []).forEach((cell, j) => {
      const c = typeof cell === "object" && cell !== null ? cell : { text: cell, options: {} };
      const opts = c.options || {};
      const cs = [
        `padding:6px 8px;border:${(o.border && o.border.pt ? o.border.pt * PT_PX : 0.5)}px solid #D5DBDB;`,
        `font-size:${(opts.fontSize || o.fontSize || 11) * PT_PX}px;`,
        `font-family:${fontFamily(opts.fontFace || o.fontFace)};`,
        `color:${hexToRgba(opts.color || o.color || "2C3E50", opts.transparency)};`,
        `text-align:${opts.align || o.align || "left"};vertical-align:middle;`,
        opts.bold ? "font-weight:700;" : "",
        opts.fill && opts.fill.color ? `background-color:${hexToRgba(opts.fill.color, opts.fill.transparency)};` : "",
      ].join("");
      const cw = colW[j] ? `width:${colW[j]}px;` : "";
      const rh = rowH[i] ? `height:${rowH[i] * IN_PX}px;` : "";
      html += `<td style="${cw}${rh}${cs}">${renderTextItems(c.text, opts, IN_PX, PT_PX)}</td>`;
    });
    html += "</tr>";
  });
  html += "</table></div>";
  return html;
}

// ---------- 单章 HTML ----------
function buildChapterHtml(slides, title, SLIDE_W, SLIDE_H, IN_PX, PT_PX) {
  const body = slides.map((slide, idx) => {
    const bg = slide.background && slide.background.color ? slide.background.color : "FFFFFF";
    const items = slide.items.map(it => {
      if (it.kind === "shape") return renderShape(it, IN_PX);
      if (it.kind === "text") return renderText(it, IN_PX, PT_PX);
      if (it.kind === "table") return renderTable(it, IN_PX, PT_PX);
      return "";
    }).join("\n");
    const active = idx === 0 ? " active" : "";
    const label = slide.title || `第 ${idx + 1} 页`;
    return `<section class="slide${active}" data-title="${esc(label)}" style="background-color:${hexToRgba(bg, 0)}">${items}</section>`;
  }).join("\n");

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)} · 网页版课件</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{height:100%;background:#1a1f24;color:#333;font-family:'Microsoft YaHei','PingFang SC','Noto Sans SC',sans-serif;overflow:hidden}
#stage{position:fixed;inset:0;display:flex;align-items:center;justify-content:center}
#viewport{position:relative;width:${SLIDE_W}px;height:${SLIDE_H}px;transform-origin:center center;box-shadow:0 10px 40px rgba(0,0,0,.5)}
.slide{position:absolute;inset:0;display:none;overflow:hidden}
.slide.active{display:block}
#hud{position:fixed;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:space-between;
  padding:10px 18px;background:rgba(20,24,28,.92);color:#cdd6dd;font-size:13px;z-index:50;user-select:none}
#hud .btn{cursor:pointer;padding:6px 14px;border-radius:6px;background:#28B894;color:#fff;font-weight:600;border:none;font-size:13px}
#hud .btn:hover{background:#1E8F73}
#hud .btn.ghost{background:transparent;color:#cdd6dd;border:1px solid #4a5560}
#hud .info{display:flex;align-items:center;gap:14px}
#progress{position:fixed;top:0;left:0;height:3px;background:#28B894;z-index:60;width:0;transition:width .2s}
#toast{position:fixed;top:16px;left:50%;transform:translateX(-50%);background:#28B894;color:#fff;
  padding:8px 18px;border-radius:20px;font-size:13px;opacity:0;transition:opacity .3s;z-index:70;pointer-events:none}
</style>
</head>
<body>
<div id="progress"></div>
<div id="stage"><div id="viewport">${body}</div></div>
<div id="toast"></div>
<div id="hud">
  <span class="btn ghost" onclick="location.href='index.html'">⬅ 目录</span>
  <span class="info"><span id="slideTitle" style="font-weight:600;color:#fff"></span>
    <span id="counter" style="color:#8fa1ad"></span></span>
  <span style="display:flex;gap:10px">
    <span class="btn ghost" onclick="prev()">◀ 上一页</span>
    <span class="btn" onclick="next()">下一页 ▶</span>
  </span>
</div>
<script>
var slides=[].slice.call(document.querySelectorAll('.slide'));
var cur=0,total=slides.length;
var titleEl=document.getElementById('slideTitle'),counter=document.getElementById('counter'),
    prog=document.getElementById('progress'),toast=document.getElementById('toast');
function show(i){
  cur=Math.max(0,Math.min(total-1,i));
  slides.forEach(function(s,k){s.classList.toggle('active',k===cur)});
  titleEl.textContent=slides[cur].dataset.title;
  counter.textContent=(cur+1)+' / '+total;
  prog.style.width=((cur+1)/total*100)+'%';
}
function next(){show(cur+1)}
function prev(){show(cur-1)}
function resize(){
  var s=Math.min(window.innerWidth/${SLIDE_W}, window.innerHeight/(${SLIDE_H}+60));
  document.getElementById('viewport').style.transform='scale('+s+')';
}
document.addEventListener('keydown',function(e){
  if(e.key==='ArrowRight'||e.key===' '||e.key==='PageDown'){e.preventDefault();next()}
  else if(e.key==='ArrowLeft'||e.key==='PageUp'){e.preventDefault();prev()}
  else if(e.key==='Home'){e.preventDefault();show(0)}
  else if(e.key==='End'){e.preventDefault();show(total-1)}
  else if(e.key==='f'||e.key==='F'){
    if(document.fullscreenElement){document.exitFullscreen()}else{document.documentElement.requestFullscreen()}
  }
});
document.addEventListener('click',function(e){
  if(e.target.closest('#hud'))return;
  var r=document.getElementById('viewport').getBoundingClientRect();
  if(e.clientX>r.left+r.width*0.7){next()}else if(e.clientX<r.left+r.width*0.3){prev()}
});
window.addEventListener('resize',resize);
resize();show(0);
</script>
</body>
</html>`;
}

function buildIndex(entries, OUT_DIR) {
  const rows = entries.map(e => `<tr><td><a href="${e.file}.html">${esc(e.title)}</a></td><td style="text-align:center">${e.pages}</td></tr>`).join("\n");
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>网页版课件</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Microsoft YaHei','PingFang SC','Noto Sans SC',sans-serif;background:#f2f8f6;color:#2C3E50;min-height:100vh}
.wrap{max-width:760px;margin:0 auto;padding:48px 24px}
h1{font-size:28px;color:#1E8F73;margin-bottom:6px}
.sub{color:#5A6B7F;font-size:14px;margin-bottom:28px}
a{color:#1E8F73;text-decoration:none;font-weight:600}a:hover{text-decoration:underline}
table{width:100%;border-collapse:collapse;background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.06)}
th{background:#28B894;color:#fff;text-align:left;padding:11px 16px}td{padding:11px 16px;border-top:1px solid #E9F5F1}
</style>
</head>
<body><div class="wrap"><h1>网页版课件</h1><div class="sub">←/→ 翻页 · F 全屏 · 点击屏幕切页</div>
<table><tr><th>章节</th><th style="width:80px">页数</th></tr>${rows}</table>
<div style="margin-top:16px;font-size:12px;color:#7F8C8D">由 slide-*.js 源码经 slides-to-html.js 自动生成。</div></div></body></html>`;
}

// ---------- 主流程 ----------
function main() {
  const argv = process.argv.slice(2);
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith("--")) args[argv[i].slice(2)] = argv[i + 1];
  }
  if (!args.slides) {
    console.log("用法:");
    console.log("  node slides-to-html.js --slides <目录> --out <输出目录> \\");
    console.log("        [--titles '第1章|第2章'] [--w 1000] [--h 562.5]");
    console.log("  --slides 可重复传，多个目录依次打包；index.html 自动生成。");
    process.exit(0);
  }
  const SLIDE_W = Number(args.w || 1000), SLIDE_H = Number(args.h || 562.5);
  const IN_PX = 100, PT_PX = 100 / 72;
  const OUT = path.resolve(process.cwd(), args.out || "html");
  fs.mkdirSync(OUT, { recursive: true });

  // 收集 --slides 目录（可能多次出现）
  const dirs = [];
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--slides" && argv[i + 1]) dirs.push(argv[i + 1]);
  }
  const titles = (args.titles || "").split("|").filter(Boolean);

  const entries = [];
  dirs.forEach((dir, di) => {
    const abs = path.resolve(process.cwd(), dir);
    const files = fs.readdirSync(abs).filter(f => /^slide-\d+\.js$/.test(f)).sort();
    const slides = [];
    files.forEach(function (f) {
      const mod = require(path.join(abs, f));
      const pres = createMockPres();
      mod.createSlide(pres);
      const last = pres.slides[pres.slides.length - 1];
      slides.push({ ...(mod.slideConfig || {}), background: last ? last.background : null, items: last ? last.items : [] });
    });
    if (!slides.length) return;
    const base = path.basename(abs);
    const file = base.replace(/[^a-z0-9]/gi, "_").toLowerCase();
    const title = titles[di] || base;
    fs.writeFileSync(path.join(OUT, `${file}.html`),
      buildChapterHtml(slides, title, SLIDE_W, SLIDE_H, IN_PX, PT_PX), "utf8");
    entries.push({ title, file, pages: slides.length });
    console.log(`✅ ${file}.html  ${slides.length} 页  (${title})`);
  });

  if (entries.length) {
    fs.writeFileSync(path.join(OUT, "index.html"), buildIndex(entries, OUT), "utf8");
    console.log(`✅ index.html（${entries.length} 章导航）→ ${OUT}`);
  }
}
main();
