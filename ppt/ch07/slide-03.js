// slide-03.js — 分隔页 7.1
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 3, title: "助理机制与核心原理" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "7.1", "助理机制与核心原理", [
      "助理的本质：桥接跨端消息、解析并路由指令、触发本机任务调度",
      "三大能力边界：远程触达 / 环境固定 / 场景匹配",
      "通信链路：移动端 → 云端中转 → 本机 WorkBuddy（WebSocket 长连接）",
      "核心通信模式对比：WebSocket 长连接 vs URL 回调",
    ]);
  }
};