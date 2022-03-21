const axios = require("axios");
const utf8 = require("utf8");
const { generateProductData } = require("./generateProductData");
const fs = require("fs");
require("dotenv").config({ path: "../.env" });
const keywords = ["여자향수", "핸드크림", "물티슈", "텀블러", "모니터암", "마스크", "디퓨져", "수분크림"];
const REQUEST_METHOD = "GET";
const DOMAIN = "https://api-gateway.coupang.com";

keywords.forEach((keyword) => {
  const convertKeyword = encodeURIComponent(keyword);
  const URL = `/v2/providers/affiliate_open_api/apis/openapi/products/search?keyword=${convertKeyword}&limit=10&subid=eungwang1203`;
  generateProductData(keyword, URL, DOMAIN, REQUEST_METHOD);
});
