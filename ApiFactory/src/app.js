const axios = require("axios");
const { generateHmac } = require("./lib/hmacGenerator");
const fs = require("fs");

const REQUEST_METHOD = "POST";
const DOMAIN = "https://api-gateway.coupang.com";
const URL = "/v2/providers/affiliate_open_api/apis/openapi/v1/deeplink";

// Replace with your own ACCESS_KEY and SECRET_KEY
const ACCESS_KEY = "8ffaeca8-2c9d-4e68-a208-2ac6d728fc51";
const SECRET_KEY = "e6b0e1c0e5589ff34061c21fc338e3ccd1ba954a";

const REQUEST = {
  coupangUrls: [
    "https://www.coupang.com/np/search?component=&q=good&channel=user",
    "https://www.coupang.com/np/coupangglobal",
  ],
};

(async () => {
  const authorization = generateHmac(REQUEST_METHOD, URL, SECRET_KEY, ACCESS_KEY);
  axios.defaults.baseURL = DOMAIN;

  try {
    const response = await axios.request({
      method: REQUEST_METHOD,
      url: URL,
      headers: { Authorization: authorization },
      data: REQUEST,
    });
    console.log(response.data);
    const testJSON = JSON.stringify(response.data);
    fs.writeFileSync("test.json", testJSON);
  } catch (err) {
    console.error(err.response.data);
  }
})();
