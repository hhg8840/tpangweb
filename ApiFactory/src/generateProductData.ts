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
  const ACCESS_KEY = '7f9f186f-ae6a-48fd-a3f2-2ec9372a7f06';
  const SECRET_KEY = '797423a893d5281f5e1ef957821913813e40cfa5';
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
