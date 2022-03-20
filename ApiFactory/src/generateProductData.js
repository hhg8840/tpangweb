const axios = require("axios");
fs = require("fs");
const { generateHmac } = require("./hmacGenerator");
require("dotenv").config({ path: "../.env" });

module.exports = {
  generateProductData: async (keyword, URL, DOMAIN, REQUEST_METHOD) => {
    const ACCESS_KEY = process.env.ACCESS_KEY;
    const SECRET_KEY = process.env.SECRET_KEY;

    const authorization = generateHmac(REQUEST_METHOD, URL, SECRET_KEY, ACCESS_KEY);
    axios.defaults.baseURL = DOMAIN;

    try {
      const response = await axios.request({
        headers: { Authorization: authorization },
        method: REQUEST_METHOD,
        url: URL,
      });
      console.log(response.data);
      fs.writeFile(
        `./doc/${keyword}.json`,
        JSON.stringify(response.data.data.productData, null, 4),
        (err) => {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
    } catch (err) {
      // console.error(err.response.data);
      console.error(err);
    }
  },
};
