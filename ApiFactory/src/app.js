const axios = require("axios");
const utf8 = require("utf8");
const { generateProductData } = require("./generateProductData");
const fs = require("fs");
require("dotenv").config({ path: "../.env" });
const keywords = [
  "귀걸이",
  "게이밍헤드셋",
  "웹캠",
  "캡슐커피머신",
  "무선청소기",
  "게이밍의자",
  "족욕기",
  "샌드메이커",
  "여자팔찌",
];
const REQUEST_METHOD = "GET";
const DOMAIN = "https://api-gateway.coupang.com";

keywords.forEach((keyword) => {
  const convertKeyword = encodeURIComponent(keyword);
  const URL = `/v2/providers/affiliate_open_api/apis/openapi/products/search?keyword=${convertKeyword}&limit=10&subid=eungwang1203`;
  generateProductData(keyword, URL, DOMAIN, REQUEST_METHOD);
});
