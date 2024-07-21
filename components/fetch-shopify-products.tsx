'use client';
import { createStorefrontApiClient } from '@shopify/storefront-api-client';

// Fetch all products
const client = createStorefrontApiClient({
  storeDomain: 'dhiyyadev.myshopify.com',
  apiVersion: '2024-07',
  publicAccessToken: 'f0db4119fd3addb6d1089e24065ff6e5'
});

const productQuery = `
  query GetAllProductQuery {
    products(first: 50) {
      edges {
        node {
          id
          title
          productType
          description
        }
      }
    }
  }
`;

export const parseShopifyResponse = (response: any) => JSON.parse(JSON.stringify(response));

const getAllProductsFromShopify = async () => {
  const { data } = await client.request(productQuery);
  // console.log(data);
  return {
    props: {
      products: data
    }
  };
};

const FetchShopifyProducts = async () => {
  const response = await getAllProductsFromShopify();

  console.log(response);
  return <div>FetchShopifyProducts</div>;
};

FetchShopifyProducts.propTypes = {};

export default FetchShopifyProducts;
