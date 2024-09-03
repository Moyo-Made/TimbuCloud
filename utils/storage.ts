import { Product } from "@/types/Product";

const STORAGE_KEY = "ecommerce_products";

export const getProducts = (): Product[] => {
  if (typeof window !== "undefined") {
    console.log("Attempting to retrieve products from localStorage");
    const storedProducts = localStorage.getItem(STORAGE_KEY);
    if (storedProducts) {
      try {
        const products = JSON.parse(storedProducts);
        console.log("Retrieved products from localStorage:", products);
        return products;
      } catch (error) {
        console.error("Error parsing products from localStorage:", error);
      }
    } else {
      console.log("No products found in localStorage");
    }
  } else {
    console.log("Window is undefined, likely running on server side");
  }
  return [];
};

export const getProductById = (id: number): Product | null => {
  const products = getProducts();
  console.log("Fetching product with ID:", id);
  const product = products.find((p) => p.id === id);
  console.log("Found product:", product);
  return product || null;
};

export const saveProducts = (products: Product[]): void => {
  if (typeof window !== "undefined") {
    console.log("Saving products to localStorage:", products);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    console.log("Products saved successfully");
  } else {
    console.log("Unable to save products: window is undefined");
  }
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
