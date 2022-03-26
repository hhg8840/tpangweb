import axios, { Method } from 'axios';
import { generateHmac } from './hmacGenerator';
import fs from 'fs';

export const generateProductData = async (
  keyword: string,
  URL: string,
  DOMAIN: string,
  REQUEST_METHOD: Method
) => {
  const ACCESS_KEY = process.env.ACCESS_KEY;
  const SECRET_KEY = process.env.SECRET_KEY;
  let authorization;
  if (SECRET_KEY && ACCESS_KEY) {
    authorization = generateHmac(REQUEST_METHOD, URL, SECRET_KEY, ACCESS_KEY);
  }

  axios.defaults.baseURL = DOMAIN;

  try {
    let response;
    if (authorization) {
      response = await axios.request({
        headers: { Authorization: authorization },
        method: REQUEST_METHOD,
        url: URL,
      });
    }

    console.log(response?.data);
    fs.writeFile(
      `./doc/${keyword}.json`,
      JSON.stringify(response?.data.data.productData, null, 4),
      err => {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
  } catch (err) {
    console.error(err);
  }
};
