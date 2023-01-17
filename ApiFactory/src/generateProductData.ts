import axios, { Method } from 'axios';
import { generateHmac } from './hmacGenerator';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
export const generateProductData = async (
  keyword: string,
  URL: string,
  DOMAIN: string,
  REQUEST_METHOD: Method
) => {
  const ACCESS_KEY = '163d41b7-aa59-4400-a4b3-025e56646abd';
  const SECRET_KEY = '94ab7c52c94f6b5f551637a793eee8bb0b70d60f';
  console.log(ACCESS_KEY + 'test');
  let authorization;
  if (SECRET_KEY && ACCESS_KEY) {
    authorization = generateHmac(REQUEST_METHOD, URL, SECRET_KEY, ACCESS_KEY);
    console.log(authorization);
  }

  axios.defaults.baseURL = DOMAIN;

  try {
    let response;
    if (authorization) {
      response = await axios.get(`${DOMAIN}${URL}`, {
        headers: { Authorization: authorization },
      });
      console.log(response);
    }
    if (response) {
      console.log(response.data);
      fs.writeFile(
        `./doc/${keyword}.json`,
        JSON.stringify(response.data.data.productData, null, 4),
        err => {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
    }
  } catch (err) {
    console.error(err);
  }
};
