const axios = require("axios");
const utf8 = require("utf8");
const { generateProductData } = require("./generateProductData");
const fs = require("fs");
require("dotenv").config({ path: "../.env" });
const keywords = [
  "비타민",
  "유선이어폰",
  "전기장판",
  "샴푸",
  "바디워시",
  "트리트먼트",
  "고대기",
  "남자BB크림",
];
const REQUEST_METHOD = "GET";
const DOMAIN = "https://api-gateway.coupang.com";

keywords.forEach((keyword) => {
  const convertKeyword = encodeURIComponent(keyword);
  const URL = `/v2/providers/affiliate_open_api/apis/openapi/products/search?keyword=${convertKeyword}&limit=10&subid=eungwang1203`;
  generateProductData(keyword, URL, DOMAIN, REQUEST_METHOD);
});
