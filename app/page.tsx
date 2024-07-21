import { Carousel } from 'components/carousel';
import FetchShopifyProducts from 'components/fetch-shopify-products';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <FetchShopifyProducts />
      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </>
  );
}
