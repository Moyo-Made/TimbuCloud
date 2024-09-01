"use client"

import React from "react";
import ProductForm from "@/components/ProductForm";
import { useRouter } from "next/navigation";
import { Product } from "@/types/Product";

const NewProductPage: React.FC = () => {
  const router = useRouter();

  const handleAddNewProduct = (newProduct: Product) => {
    const storedProducts = localStorage.getItem("products");
    const products = storedProducts ? JSON.parse(storedProducts) : [];
    const updatedProducts = [...products, newProduct];
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    router.push("/");
  };

  return <ProductForm addNewProduct={handleAddNewProduct} />;
};

export default NewProductPage;
