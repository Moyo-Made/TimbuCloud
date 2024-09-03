import ProductDetail from "@/components/ProductDetail";

export default async function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <ProductDetail />
    </div>
  );
}
