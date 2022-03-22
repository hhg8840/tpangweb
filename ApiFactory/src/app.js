const axios = require("axios");
const utf8 = require("utf8");
const { generateProductData } = require("./generateProductData");
const fs = require("fs");
require("dotenv").config({ path: "../.env" });
const keywords = [
  "손소독제",
  "스마트장갑",
  "프라이팬",
  "인덕션냄비",
  "프로젝터",
  "면도기",
  "면도크림",
  "외장하드",
];
const REQUEST_METHOD = "GET";
const DOMAIN = "https://api-gateway.coupang.com";

keywords.forEach((keyword) => {
  const convertKeyword = encodeURIComponent(keyword);
  const URL = `/v2/providers/affiliate_open_api/apis/openapi/products/search?keyword=${convertKeyword}&limit=10&subid=eungwang1203`;
  generateProductData(keyword, URL, DOMAIN, REQUEST_METHOD);
});
