import { Suspense } from 'react';
import ProductDetail from "@/components/ProductDetail";

export default function ProductPage({ params }: { params: { slug: string[] } }) {
  const productId = params.slug[0]; // Assuming the first part of the slug is the product ID

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetail productId={productId} />
    </Suspense>
  );
}

// This ensures all routes are statically generated at build time
export const dynamicParams = false;

// This generates a static page for each product
export async function generateStaticParams() {
  // You can return an empty array if you want to generate all pages at runtime
  // or implement logic to return an array of slugs if you want to pre-generate some pages
  return [];
}