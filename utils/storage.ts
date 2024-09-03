import { Product } from "@/types/Product";

const STORAGE_KEY = "ecommerce_products";

// Helper function to safely access localStorage
const safeLocalStorage = {
  getItem: (key: string): string | null => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(key);
    }
    return null;
  },
  setItem: (key: string, value: string): void => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, value);
    }
  },
};

export const getProducts = (): Product[] => {
  console.log("Attempting to retrieve products");
  const storedProducts = safeLocalStorage.getItem(STORAGE_KEY);
  if (storedProducts) {
    try {
      const products = JSON.parse(storedProducts);
      console.log("Retrieved products:", products);
      return products;
    } catch (error) {
      console.error("Error parsing products:", error);
    }
  } else {
    console.log("No products found");
  }
  return [];
};

export const getProductIds = (): number[] => {
  const products = getProducts();
  return products.map(product => product.id);
};

export const getProductById = (id: number): Product | null => {
  const products = getProducts();
  console.log("Fetching product with ID:", id);
  const product = products.find((p) => p.id === id);
  console.log("Found product:", product);
  return product || null;
};

export const saveProducts = (products: Product[]): void => {
  console.log("Saving products:", products);
  safeLocalStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  console.log("Products saved successfully");
};

export const addProduct = (product: Omit<Product, "id">): Product => {
  const newProduct = { ...product, id: Date.now() };
  const updatedProducts = [...getProducts(), newProduct];
  saveProducts(updatedProducts);
  console.log("Added new product:", newProduct);
  return newProduct;
};

export const updateProduct = (updatedProduct: Product): void => {
  const products = getProducts();
  const updatedProducts = products.map((product) =>
    product.id === updatedProduct.id ? updatedProduct : product
  );
  saveProducts(updatedProducts);
  console.log("Updated product:", updatedProduct);
};

export const deleteProduct = (id: number): void => {
  const products = getProducts();
  const updatedProducts = products.filter((product) => product.id !== id);
  saveProducts(updatedProducts);
  console.log("Deleted product with ID:", id);
};