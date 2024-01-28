import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://shopify-back.vercel.app/api/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `get-products`,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
