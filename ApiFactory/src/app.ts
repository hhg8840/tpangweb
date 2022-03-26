import { generateProductData } from './generateProductData';

const keywords = ['노트북거치대'];
const REQUEST_METHOD = 'GET';
const DOMAIN = 'https://api-gateway.coupang.com';

keywords.forEach(keyword => {
  const convertKeyword = encodeURIComponent(keyword);
  const URL = `/v2/providers/affiliate_open_api/apis/openapi/products/search?keyword=${convertKeyword}&limit=10&subid=eungwang1203`;
  generateProductData(keyword, URL, DOMAIN, REQUEST_METHOD);
});
