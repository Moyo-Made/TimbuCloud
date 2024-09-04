import { Suspense } from 'react';
import ProductDetail from "@/components/ProductDetail";

export default async function ProductPage({ params }: { params: { id: string } }) {
  const productId = params.id; // Assuming the first part of the slug is the product ID

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetail productId={productId} />
    </Suspense>
  );
}

