import { StaticImageData } from "next/image";

export interface ProductImage {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
}

export interface Product {
  id: number;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  description: string;
  category: string;
  color: string;
  model: string;
  SN: string;
  image: ProductImage;
  quantity: number;
}