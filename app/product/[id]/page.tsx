import ProductDetail from "@/components/ProductDetail";
import { getProductIds, getProductById } from '@/utils/storage';

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <ProductDetail id={params.id} />
    </div>
  );
}

export async function generateStaticParams() {
  const productIds = getProductIds();

  return productIds.map((id) => ({
    id: id.toString(),
  }));
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const product = getProductById(Number(params.id));
  
  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      product,
    },
  };
}