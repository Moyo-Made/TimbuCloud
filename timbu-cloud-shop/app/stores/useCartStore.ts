import create from "zustand";


interface Product {
  name: string;
  originalPrice: number;
  discountedPrice: number;
  description: string;
  color: string;
  model: string;
  SN: string;
  image: string;
  quantity: number;
}

interface CartState {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (index: number) => void;
  updateQuantity: (index: number, newQuantity: number) => void;
  isInCart: (productName: string) => boolean; // Corrected return type for isInCart
}

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, { ...product, quantity: 1 }],
    })),
  removeFromCart: (index) =>
    set((state) => ({
      cart: state.cart.filter((_, i) => i !== index),
    })),
  updateQuantity: (index, newQuantity) =>
    set((state) => ({
      cart: state.cart.map((item, i) =>
        i === index ? { ...item, quantity: newQuantity } : item
      ),
    })),
    isInCart: (productName) => {
      const { cart } = get();
      return cart.some((item) => item.name === productName);
    }, 
}));
