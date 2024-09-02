"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Categories from "./Categories";
import Ratings from "@/public/ratings.png";
import { useCartStore } from "../stores/useCartStore";
import { Product } from "../types/Product";
import { products as defaultProducts } from "../data/products";
import { getProducts, saveProducts } from "../utils/storage";

const FeaturedProducts: React.FC = () => {
	const addToCart = useCartStore((state) => state.addToCart);
	const isInCart = useCartStore((state) => state.isInCart);
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState<Record<string, boolean>>({});
	const [debug, setDebug] = useState<string>("");

	// ProductFilter states
	const [isOpen, setIsOpen] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState("All");

	const categories = ["All", "Gadgets", "Bags", "Accessories"];

	useEffect(() => {
		const initializeProducts = () => {
			const storedProducts = getProducts();

			if (storedProducts.length === 0) {
				saveProducts(defaultProducts);
				setProducts(defaultProducts);
			} else {
				setProducts(storedProducts);
			}
		};

		initializeProducts();
	}, []);

	const handleAddToCart = async (product: Product) => {
		setLoading((prev) => ({ ...prev, [product.id]: true }));
		await new Promise((resolve) => setTimeout(resolve, 1000));
		addToCart(product);
		setLoading((prev) => ({ ...prev, [product.id]: false }));
	};

	const filteredProducts =
		selectedCategory === "All"
			? products
			: products.filter((product) => product.category === selectedCategory);

	return (
		<div>
			<div className="grid justify-center md:flex gap-9 md:mt-14">
				<div id="categories">
					<Categories />
				</div>
				<div className="-mt-1" id="products">
					<div className="flex flex-col md:flex-row md:items-center mb-4">
						<h2 className="md:ml-auto ml-4 uppercase text-[19px] text-[#08319C] font-semibold">
							Featured Products
						</h2>
						<div className="hidden md:flex ml-[22rem] text-[19px] font-semibold text-[#08319C]">
							<a href="" className="underline">
								Promo
							</a>
							<a href="" className="ml-8">
								New Arrival
							</a>
						</div>
					</div>

					{/* Product Filter */}
					<div className="relative w-64 mb-4 md:ml-0 ml-5">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="w-full flex items-center justify-between bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							{selectedCategory}
							<ChevronDown className="ml-2 h-5 w-5 text-gray-400" />
						</button>

						{isOpen && (
							<div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
								{categories.map((category) => (
									<div
										key={category}
										className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-100"
										onClick={() => {
											setSelectedCategory(category);
											setIsOpen(false);
										}}
									>
										{category}
									</div>
								))}
							</div>
						)}
					</div>

					<div className="flex flex-col ml-4 md:ml-auto md:grid md:grid-cols-2 mt-8 gap-7 justify-center items-start">
						{filteredProducts.map((product) => (
							<div key={product.id}>
								<div className="w-[320px] h-[200px] bg-[#C8D3F0] rounded-lg flex items-center justify-center">
									<Image
										src={product.image.src || ""}
										alt={product.name}
										width={product.image?.width || 200}
										height={product.image?.height || 150}
										loading="lazy"
									/>
								</div>
								<div className="flex flex-col justify-center items-center mt-3 -ml-4">
									<p className="text-[16px] text-[#000000] font-medium text-center">
										{product.name} <br />${product.discountedPrice}{" "}
										<span className="line-through text-[#2b2a2a]">
											${product.originalPrice}
										</span>
									</p>
									<Image
										src={Ratings}
										alt="Ratings"
										className="mt-1"
										width={100}
										height={18}
									/>
									<div className="text-center max-w-[320px] mt-3 text-[13.5px] font-medium">
										<p>{product.description}</p>
									</div>
									<div className="flex gap-2 mt-3">
										<Link href={`/product/${product.id}`}>
											<button className="bg-[#08319C] text-[16px] text-[#FFFFFF] w-[150px] h-[40px] rounded-md uppercase">
												View Details
											</button>
										</Link>
										{isInCart(product.id) ? (
											<Link href="/cart">
												<button className="bg-[#08319C] text-[16px] text-[#FFFFFF] w-[150px] h-[40px] rounded-md uppercase flex justify-center items-center">
													See in cart
												</button>
											</Link>
										) : (
											<button
												className="bg-[#08319C] text-[16px] text-[#FFFFFF] w-[150px] h-[40px] rounded-md uppercase flex justify-center items-center"
												onClick={() => handleAddToCart(product)}
												disabled={loading[product.id]}
											>
												{loading[product.id] ? (
													<div className="w-6 h-6 border-t-2 border-white border-solid rounded-full animate-spin"></div>
												) : (
													"Add to cart"
												)}
											</button>
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<Link href="/product/new">
				<button className="md:ml-[45rem] ml-24 mt-10 bg-[#08319C] text-[16px] text-[#FFFFFF] w-[200px] h-[40px] rounded-md uppercase flex justify-center items-center">
					Add New Product
				</button>
			</Link>
			<pre>{debug}</pre>
		</div>
	);
};

export default FeaturedProducts;
