// common.js — WorkBuddy 课程 PPT 公共库（版式参照 K8s 课程范例，配色 WorkBuddy 品牌青绿）
const pptxgen = require("pptxgenjs");
const SHAPE = { RECT: "rect", ELLIPSE: "ellipse", LINE: "line" };

// 配色体系：WorkBuddy 品牌青绿主色 + 灰蓝辅色 + 琥珀警示
const C = {
  primary:    "28B894",  // WorkBuddy 品牌青绿 — 标题、表头、卡片左色条
  primaryDark: "1E8F73", // 深一档青绿 — 封面/分隔页背景
  secondary:  "5A6B7F",  // 灰蓝 — 数字圆标、次级装饰
  accent:     "2E9E83",  // 深青绿 — 强调条、高亮、结论
  accentWarm: "A8895F",  // 琥珀 — 警示、互动装饰
  gold:       "8A6A42",  // 深琥珀 — 少量点缀

  bgWhite:  "FFFFFF",
  bgLight:  "F2F8F6",  // 浅青灰，交替页背景
  bgCard:   "E9F5F1",  // 浅青绿，卡片填充
  bgAccent: "E7F3EE",  // 浅青绿，结论/提示条背景
  bgBlue:   "E0F2EC",  // 浅青绿，主题提示条背景

  textDark:  "2C3E50",  // 正文
  textMid:   "7F8C8D",  // 副文、注释
  textLight: "FFFFFF",  // 深色背景文字

  border: "D5DBDB",
  darkBg: "1E8F73",  // 封面/分隔/总结背景
};

// 卡片阴影
const mkSh = () => ({
  type: "outer", color: "000000",
  blur: 6, offset: 2, angle: 135, opacity: 0.08
});

// 内容页标题 + 强调下划线
function sectionTitle(s, title, bgColor) {
  s.background = { color: bgColor || C.bgWhite };
  s.addText(title, {
    x: 0.6, y: 0.3, w: 8.8, h: 0.65,
    fontSize: 26, fontFace: "Microsoft YaHei",
    bold: true, color: C.primary, margin: 0,
  });
  s.addShape(SHAPE.RECT, {
    x: 0.6, y: 0.95, w: 1.0, h: 0.035,
    fill: { color: C.accent }
  });
}

// 顶部/底部强调条
function topAccentBar(s) {
  s.addShape(SHAPE.RECT, { x: 0, y: 0, w: 10, h: 0.05, fill: { color: C.accent } });
}
function bottomAccentBar(s) {
  s.addShape(SHAPE.RECT, { x: 0, y: 5.575, w: 10, h: 0.05, fill: { color: C.accent } });
}

// 数字圆标
function numBadge(s, x, y, num, color) {
  s.addShape(SHAPE.ELLIPSE, { x, y, w: 0.45, h: 0.45, fill: { color: color || C.secondary } });
  s.addText(String(num).padStart(2, "0"), {
    x, y, w: 0.45, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: C.textLight, bold: true,
    align: "center", valign: "middle", margin: 0
  });
}

// 卡片（白色 + 阴影 + 左侧色条）
function card(s, x, y, w, h, stripColor) {
  s.addShape(SHAPE.RECT, { x, y, w, h, fill: { color: C.bgWhite }, shadow: mkSh() });
  s.addShape(SHAPE.RECT, { x, y, w: 0.06, h, fill: { color: stripColor || C.primary } });
}

// 底部调用条
function calloutBar(s, text, y, color) {
  const by = y || 4.7;
  s.addShape(SHAPE.RECT, { x: 0.6, y: by, w: 8.8, h: 0.5, fill: { color: color || C.bgAccent } });
  s.addShape(SHAPE.RECT, { x: 0.6, y: by, w: 0.05, h: 0.5, fill: { color: C.accent } });
  s.addText(text, {
    x: 0.85, y: by, w: 8.3, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: C.textDark, valign: "middle", margin: 0
  });
}

// 警示条（琥珀左侧条）
function warnBar(s, text, y) {
  const by = y || 4.7;
  s.addShape(SHAPE.RECT, { x: 0.6, y: by, w: 8.8, h: 0.5, fill: { color: C.bgAccent } });
  s.addShape(SHAPE.RECT, { x: 0.6, y: by, w: 0.05, h: 0.5, fill: { color: C.accentWarm } });
  s.addText(text, {
    x: 0.85, y: by, w: 8.3, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: C.textDark, valign: "middle", margin: 0
  });
}

// 分隔页（深青绿底）：大节号 + 节标题 + 要点列表（试点特效版：水印节号 + 圆环 + 圆点列表）
function divider(s, num, title, points) {
  s.background = { color: C.darkBg };
  topAccentBar(s);
  bottomAccentBar(s);
  // 装饰层
  s.addText(num, {
    x: 6.6, y: 0.1, w: 3.4, h: 3.4,
    fontSize: 150, fontFace: "Arial", bold: true,
    color: "28B894", transparency: 82, align: "center", valign: "middle", margin: 0
  });
  s.addShape(SHAPE.ELLIPSE, { x: 7.9, y: -1.3, w: 3.6, h: 3.6, fill: { color: "FFFFFF", transparency: 93 }, line: { color: "B8E8DC", width: 1.2, transparency: 60 } });
  s.addShape(SHAPE.ELLIPSE, { x: 8.5, y: -0.7, w: 2.4, h: 2.4, fill: { color: "28B894", transparency: 87 }, line: { color: "B8E8DC", width: 1, transparency: 65 } });
  s.addShape(SHAPE.ELLIPSE, { x: -1.3, y: 4.1, w: 2.8, h: 2.8, fill: { color: "2E9E83", transparency: 85 }, line: { color: "B8E8DC", width: 1, transparency: 60 } });
  s.addShape(SHAPE.ELLIPSE, { x: 0.55, y: 0.5, w: 0.32, h: 0.32, fill: { color: "B8E8DC", transparency: 55 } });
  // 左侧品牌竖线
  s.addShape(SHAPE.RECT, { x: 0.8, y: 1.0, w: 0.07, h: 2.2, fill: { color: "B8E8DC" } });
  // 标题区
  s.addText(num, {
    x: 1.2, y: 0.9, w: 2.5, h: 0.9,
    fontSize: 32, fontFace: "Microsoft YaHei", bold: true,
    color: "B8E8DC", margin: 0
  });
  s.addText(title, {
    x: 1.2, y: 1.85, w: 7.5, h: 0.8,
    fontSize: 24, fontFace: "Microsoft YaHei", bold: true,
    color: C.textLight, margin: 0
  });
  let y = 3.0;
  points.forEach(pt => {
    s.addShape(SHAPE.ELLIPSE, { x: 1.3, y: y + 0.14, w: 0.18, h: 0.18, fill: { color: "28B894" } });
    s.addText(pt, {
      x: 1.65, y, w: 7.4, h: 0.45,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: "DDF2EC", margin: 0
    });
    y += 0.5;
  });
}

// 金句/大结论条（强调页用）—— 字号 12，高度按文本长度自适应收窄
function bigCallout(s, text, y, h) {
  const by = y || 2.2;
  const lines = Math.max(1, Math.ceil(text.length / 44));
  const bh = 0.2 + lines * 0.24;
  s.addShape(SHAPE.RECT, { x: 0.6, y: by, w: 8.8, h: bh, fill: { color: C.bgCard }, shadow: mkSh() });
  s.addShape(SHAPE.RECT, { x: 0.6, y: by, w: 0.07, h: bh, fill: { color: C.primary } });
  s.addText(text, {
    x: 0.95, y: by, w: 8.2, h: bh,
    fontSize: 12, fontFace: "Microsoft YaHei", bold: true,
    color: C.primary, valign: "middle", margin: 0, lineSpacingMultiple: 1.2, fit: "shrink"
  });
}

// 代码块（深底等宽）
function codeBlock(s, x, y, w, h, code, size) {
  s.addShape(SHAPE.RECT, { x, y, w, h, fill: { color: "2C3E50" }, shadow: mkSh() });
  s.addText(code, {
    x: x + 0.2, y, w: w - 0.4, h,
    fontSize: size || 12, fontFace: "Consolas",
    color: "E0F2EC", valign: "top", margin: 0, lineSpacingMultiple: 1.25
  });
}

module.exports = { SHAPE, C, mkSh, sectionTitle, topAccentBar, bottomAccentBar,
  numBadge, card, calloutBar, warnBar, divider, bigCallout, codeBlock };
