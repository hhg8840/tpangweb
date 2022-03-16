const axios = require("axios");
const utf8 = require("utf8");
const { generateHmac } = require("./lib/hmacGenerator");
const fs = require("fs");

const keyword = "노트북";
const convertKeyword = encodeURIComponent(keyword);

const REQUEST_METHOD = "GET";
const DOMAIN = "https://api-gateway.coupang.com";
const URL = `/v2/providers/affiliate_open_api/apis/openapi/products/search?keyword=${convertKeyword}&limit=10&subid=eungwang1203`;

// Replace with your own ACCESS_KEY and SECRET_KEY
const ACCESS_KEY = "8ffaeca8-2c9d-4e68-a208-2ac6d728fc51";
const SECRET_KEY = "e6b0e1c0e5589ff34061c21fc338e3ccd1ba954a";
const REQUEST = {
  coupangUrls: [
    "https://www.coupang.com/np/search?component=&q=good&channel=user",
    "https://www.coupang.com/np/coupangglobal",
  ],
};

const generateData = async () => {
  const authorization = generateHmac(REQUEST_METHOD, URL, SECRET_KEY, ACCESS_KEY);
  axios.defaults.baseURL = DOMAIN;

  try {
    const response = await axios.request({
      headers: { Authorization: authorization },
      method: REQUEST_METHOD,
      url: URL,
    });
    console.log(response.data.data.productData);
    fs.writeFile(`./${keyword}.json`, JSON.stringify(response.data.data.productData, null, 4), (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("File has been created");
    });
  } catch (err) {
    console.error(err.response.data);
  }
};
