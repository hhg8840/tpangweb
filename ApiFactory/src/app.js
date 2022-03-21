const axios = require("axios");
const utf8 = require("utf8");
const { generateProductData } = require("./generateProductData");
const fs = require("fs");
require("dotenv").config({ path: "../.env" });
const keywords = [
  "선풍기",
  "무드등",
  "섬유유연제",
  "폼클렌징",
  "샴푸",
  "트리트먼트",
  "바디워시",
  "에어프라이어",
];
const REQUEST_METHOD = "GET";
const DOMAIN = "https://api-gateway.coupang.com";

keywords.forEach((keyword) => {
  const convertKeyword = encodeURIComponent(keyword);
  const URL = `/v2/providers/affiliate_open_api/apis/openapi/products/search?keyword=${convertKeyword}&limit=10&subid=eungwang1203`;
  generateProductData(keyword, URL, DOMAIN, REQUEST_METHOD);
});
