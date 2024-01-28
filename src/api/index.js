import axios from 'axios';

export const getProducts = async () => {
  const res = await axios.get('https://shopify-back.vercel.app/api/get-products');
  return res;
};
