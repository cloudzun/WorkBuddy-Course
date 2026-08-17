// export-html.js — 将 ppt/ch0N 的 slide-XX.js 渲染为自包含 HTML 网页版课件
// 用法: node export-html.js   (在 ppt/scripts 目录下执行)
// 输出: ppt/html/ch01.html ~ ch09.html + course.html + index.html（导航首页）
const fs = require("fs");
const path = require("path");

const OUT_DIR = path.join(__dirname, "..", "html");
const SLIDE_W = 1000;   // 10 英寸 * 100
const SLIDE_H = 562.5;  // 5.625 英寸 * 100
const IN_TO_PX = 100;   // 1 英寸 = 100px
const PT_TO_PX = 100 / 72; // 1pt = 1.389px

// 章节元数据
const CHAPTERS = [
  { dir: "ch01", title: "第 1 章 产品与基础入门", file: "ch01" },
  { dir: "ch02", title: "第 2 章 任务创建与结果管理", file: "ch02" },
  { dir: "ch03", title: "第 3 章 灵感模块", file: "ch03" },
  { dir: "ch04", title: "第 4 章 技能、专家与专家团", file: "ch04" },
  { dir: "ch05", title: "第 5 章 连接器与资料库", file: "ch05" },
  { dir: "ch06", title: "第 6 章 模型配置", file: "ch06" },
  { dir: "ch07", title: "第 7 章 助理连接配置", file: "ch07" },
  { dir: "ch08", title: "第 8 章 自动化", file: "ch08" },
  { dir: "ch09", title: "第 9 章 典型办公场景综合实战与 OPC 一人公司", file: "ch09" },
  { dir: "course", title: "课程总览", file: "course" },
];

// ---------- mock pptxgenjs ----------
function createMockPres() {
  const slides = [];
  const makeSlide = () => ({
    background: null,
    items: [],
    addShape(shape, opts) { this.items.push({ kind: "shape", shape, opts: opts || {} }); },
    addText(text, opts) { this.items.push({ kind: "text", text, opts: opts || {} }); },
    addTable(rows, opts) { this.items.push({ kind: "table", rows, opts: opts || {} }); },
    addImage() {},
    addChart() {},
    addMedia() {},
  });
  return {
    slides,
    addSlide() { const s = makeSlide(); this.slides.push(s); return s; },
  };
}

// ---------- 渲染工具 ----------
function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function hexToRgba(hex, transparency) {
  let h = String(hex || "FFFFFF").replace("#", "");
  if (h.length === 3) h = h.split("").map(c => c + c).join("");
  const n = parseInt(h, 16);
  const alpha = transparency == null ? 1 : 1 - Number(transparency) / 100;
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${Math.max(0, Math.min(1, alpha)).toFixed(2)})`;
}

function cssColor(color) {
  if (!color) return null;
  return hexToRgba(color, 0);
}

function fontFamily(face) {
  if (!face) return "'Microsoft YaHei', 'PingFang SC', 'Noto Sans SC', sans-serif";
  if (/consolas/i.test(face)) return "Consolas, 'Courier New', monospace";
  return `'${face}', 'Microsoft YaHei', 'PingFang SC', sans-serif`;
}

function textStyle(opts) {
  const st = [];
  st.push(`font-size:${(opts.fontSize || 12) * PT_TO_PX}px`);
  st.push(`font-family:${fontFamily(opts.fontFace)}`);
  if (opts.bold) st.push("font-weight:700");
  if (opts.italic) st.push("font-style:italic");
  if (opts.color) st.push(`color:${hexToRgba(opts.color, opts.transparency)}`);
  if (opts.align) st.push(`text-align:${opts.align}`);
  const lh = opts.lineSpacingMultiple || 1;
  st.push(`line-height:${(lh * 1.25).toFixed(2)}`);
  return st.join(";");
}

function renderTextItems(text) {
  if (typeof text === "string") {
    return esc(text).split("\n").map(t => `<div>${t}</div>`).join("");
  }
  if (Array.isArray(text)) {
    return text.map(seg => {
      const segText = typeof seg === "string" ? seg : (seg.text || "");
      const segOpts = seg && seg.options ? seg.options : {};
      const inner = esc(segText).split("\n").map(t => `<div>${t}</div>`).join("");
      return `<span style="${textStyle(segOpts)}">${inner}</span>`;
    }).join("");
  }
  return "";
}

function renderShape(item) {
  const o = item.opts;
  const x = (o.x || 0) * IN_TO_PX, y = (o.y || 0) * IN_TO_PX;
  const w = (o.w || 0) * IN_TO_PX, h = (o.h || 0) * IN_TO_PX;
  const st = [`position:absolute;left:${x}px;top:${y}px;width:${w}px;height:${h}px;`];
  const fill = o.fill || {};
  if (fill.color != null) {
    st.push(`background-color:${hexToRgba(fill.color, fill.transparency)}`);
  } else {
    st.push("background-color:rgba(0,0,0,0)");
  }
  if (o.line && o.line.color) {
    st.push(`border:${(o.line.width || 1) * IN_TO_PX}px solid ${hexToRgba(o.line.color, o.line.transparency)}`);
  } else {
    st.push("border:1px solid rgba(0,0,0,0)");
  }
  if (item.shape === "ellipse") st.push("border-radius:50%");
  if (item.shape === "roundRect" && o.rectRadius) {
    st.push(`border-radius:${(o.rectRadius || 0) * IN_TO_PX}px`);
  }
  if (o.shadow) st.push("box-shadow:2px 3px 8px rgba(0,0,0,0.18)");
  return `<div style="${st.join(';')}"></div>`;
}

function renderText(item) {
  const o = item.opts;
  const x = (o.x || 0) * IN_TO_PX, y = (o.y || 0) * IN_TO_PX;
  const w = (o.w || 0) * IN_TO_PX, h = (o.h || 0) * IN_TO_PX;
  let align = "flex-start";
  if (o.valign === "middle") align = "center";
  else if (o.valign === "bottom") align = "flex-end";
  const st = [
    `position:absolute;left:${x}px;top:${y}px;width:${w}px;height:${h}px;`,
    `display:flex;flex-direction:column;justify-content:${align};`,
    "overflow:hidden;",
    textStyle(o),
  ];
  return `<div style="${st.join(';')}">${renderTextItems(item.text)}</div>`;
}

function renderTable(item) {
  const o = item.opts;
  const x = (o.x || 0) * IN_TO_PX, y = (o.y || 0) * IN_TO_PX;
  const w = (o.w || 0) * IN_TO_PX;
  const colW = (o.colW || []).map(c => c * IN_TO_PX);
  const rowH = o.rowH || [];
  const cellStyle = (cellOpts, i, j) => {
    const st = [
      `padding:6px 8px;border:${(o.border && o.border.pt ? o.border.pt * PT_TO_PX : 0.5)}px solid #D5DBDB;`,
      `font-size:${(cellOpts.fontSize || o.fontSize || 11) * PT_TO_PX}px;`,
      `font-family:${fontFamily(cellOpts.fontFace || o.fontFace)};`,
      `color:${hexToRgba(cellOpts.color || o.color || "2C3E50", cellOpts.transparency)};`,
      `text-align:${cellOpts.align || o.align || "left"};vertical-align:middle;`,
      cellOpts.bold ? "font-weight:700;" : "",
      cellOpts.fill && cellOpts.fill.color ? `background-color:${hexToRgba(cellOpts.fill.color, cellOpts.fill.transparency)};` : "",
    ].join("");
    return st;
  };
  let html = `<div style="position:absolute;left:${x}px;top:${y}px;width:${w}px;"><table style="width:100%;border-collapse:collapse;">`;
  (item.rows || []).forEach((row, i) => {
    html += "<tr>";
    (row || []).forEach((cell, j) => {
      const c = typeof cell === "object" && cell !== null ? cell : { text: cell, options: {} };
      const opts = c.options || {};
      const cw = colW[j] ? `width:${colW[j]}px;` : "";
      const rh = rowH[i] ? `height:${rowH[i] * IN_TO_PX}px;` : "";
      html += `<td style="${cw}${rh}${cellStyle(opts, i, j)}">${renderTextItems(c.text)}</td>`;
    });
    html += "</tr>";
  });
  html += "</table></div>";
  return html;
}

// ---------- 单章 HTML 生成 ----------
function buildChapterHtml(ch, slides) {
  const body = slides.map((slide, idx) => {
    const bg = slide.background && slide.background.color ? slide.background.color : "FFFFFF";
    const items = slide.items.map(it => {
      if (it.kind === "shape") return renderShape(it);
      if (it.kind === "text") return renderText(it);
      if (it.kind === "table") return renderTable(it);
      return "";
    }).join("\n");
    const label = slide.title || `第 ${idx + 1} 页`;
    return `<section class="slide" data-title="${esc(label)}" style="background-color:${hexToRgba(bg, 0)}">${items}</section>`;
  }).join("\n");

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(ch.title)} · 网页版课件</title>
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
  var s=Math.min(window.innerWidth/SLIDE_W, window.innerHeight/(SLIDE_H+60));
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

// ---------- 索引页 ----------
function buildIndex(chapters) {
  const rows = chapters.map(ch => {
    const pageCount = ch.pages;
    return `<tr><td><a href="${ch.file}.html">${esc(ch.title)}</a></td><td style="text-align:center">${pageCount} 页</td></tr>`;
  }).join("\n");
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>WorkBuddy 效率进阶实训课程 · 网页版课件</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Microsoft YaHei','PingFang SC','Noto Sans SC',sans-serif;background:#f2f8f6;color:#2C3E50;min-height:100vh}
.wrap{max-width:860px;margin:0 auto;padding:48px 24px}
h1{font-size:30px;color:#1E8F73;margin-bottom:8px}
.sub{color:#5A6B7F;font-size:15px;margin-bottom:32px}
table{width:100%;border-collapse:collapse;background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.06)}
th{background:#28B894;color:#fff;text-align:left;padding:12px 16px;font-size:14px}
td{padding:12px 16px;border-top:1px solid #E9F5F1;font-size:14px}
a{color:#1E8F73;text-decoration:none;font-weight:600}
a:hover{text-decoration:underline}
.note{margin-top:20px;font-size:12.5px;color:#7F8C8D;line-height:1.7}
</style>
</head>
<body>
<div class="wrap">
  <h1>WorkBuddy 效率进阶实训课程</h1>
  <div class="sub">网页版课件 · 点击章节进入，←/→ 或点击屏幕翻页，F 全屏</div>
  <table>
    <tr><th>章节</th><th style="width:90px">页数</th></tr>
    ${rows}
  </table>
  <div class="note">由 ppt/ch0N 的 slide-*.js 源码自动生成（node ppt/scripts/export-html.js）。桌面端浏览器体验最佳，支持键盘翻页与全屏放映。</div>
</div>
</body>
</html>`;
}

// ---------- 主流程 ----------
fs.mkdirSync(OUT_DIR, { recursive: true });
const indexEntries = [];

for (const ch of CHAPTERS) {
  const dir = path.join(__dirname, "..", ch.dir);
  if (!fs.existsSync(dir)) { console.log(`skip missing ${ch.dir}`); continue; }
  const slides = [];
  let idx = 1;
  while (true) {
    const f = path.join(dir, `slide-${String(idx).padStart(2, "0")}.js`);
    if (!fs.existsSync(f)) break;
    const mod = require(f);
    const pres = createMockPres();
    mod.createSlide(pres);
    // 该 slide 模块可能只调用了 pres.addSlide() 一次；取最后一次创建的 slide
    const last = pres.slides[pres.slides.length - 1];
    slides.push({ ...mod.slideConfig, background: last ? last.background : null, items: last ? last.items : [] });
    idx++;
  }
  if (slides.length === 0) { console.log(`skip empty ${ch.dir}`); continue; }
  const html = buildChapterHtml(ch, slides);
  fs.writeFileSync(path.join(OUT_DIR, `${ch.file}.html`), html, "utf8");
  indexEntries.push({ ...ch, pages: slides.length });
  console.log(`✅ ${ch.file}.html  ${slides.length} 页`);
}

fs.writeFileSync(path.join(OUT_DIR, "index.html"), buildIndex(indexEntries), "utf8");
console.log(`✅ index.html（${indexEntries.length} 章导航）`);
console.log(`输出目录: ${OUT_DIR}`);
