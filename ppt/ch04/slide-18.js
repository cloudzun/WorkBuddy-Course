// slide-18.js — 分隔页 4.4
const { divider } = require("./common");
module.exports = {
  slideConfig: { type: "divider", index: 18, title: "高频专家团解析与应用" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "4.4", "高频专家团解析与应用", [
      "专家中心：覆盖法律、财务、品牌、研究、产品与技术等多个细分领域",
      "五类典型专家团：OPC 一人公司 / 产品设计 / 技术工程 / 金融投资 / 品牌营销",
      "多团协作：“产品-内容-落地”闭环，一名超级个体打通完整商业闭环",
    ]);
  }
};