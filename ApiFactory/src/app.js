const axios = require("axios");
const utf8 = require("utf8");
const { generateHmac } = require("./lib/hmacGenerator");
const { generateProductData } = require("./lib/generateProductData");
const fs = require("fs");

// 오늘 날짜구하기.
let today = new Date();
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1; // 월
let date = today.getDate(); // 요일
const now = `${year}.${month}.${date}`;

const keywords = [
  "노트북",
  "블루투스마우스",
  "게이밍키보드",
  "모니터",
  "남성지갑",
  "여성지갑",
  "액션캠",
  "통돌이세탁기",
  "블루투스스피커",
  "목걸이",
];
const REQUEST_METHOD = "GET";
const DOMAIN = "https://api-gateway.coupang.com";
const ACCESS_KEY = "8ffaeca8-2c9d-4e68-a208-2ac6d728fc51";
const SECRET_KEY = "e6b0e1c0e5589ff34061c21fc338e3ccd1ba954a";
keywords.forEach((keyword) => {
  const convertKeyword = encodeURIComponent(keyword);
  const URL = `/v2/providers/affiliate_open_api/apis/openapi/products/search?keyword=${convertKeyword}&limit=10&subid=eungwang1203`;
  generateProductData(keyword, URL, DOMAIN, REQUEST_METHOD);
});
