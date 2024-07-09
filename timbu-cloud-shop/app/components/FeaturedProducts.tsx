"use client";

import React from "react";
import Image from "next/image";
import Categories from "./Categories";
import Laptop from "@/public/laptop.png";
import AirPods from "@/public/air-pods.png";
import PlayStation from "@/public/play-station-pad.png";
import iPhone from "@/public/iphone.png";
import Ratings from "@/public/ratings.png";
import Link from "next/link";
import { useCartStore } from "../stores/useCartStore"; // Importing the Zustand store

const FeaturedProducts: React.FC = () => {
	const addToCart = useCartStore((state) => state.addToCart);
	const isInCart = useCartStore((state) => state.isInCart);

	const products = [
		{
			name: "13’ Macbook Air 2020",
			originalPrice: 1200,
			discountedPrice: 1080,
			description:
				"Lightweight, powerful, and efficient. With the latest M2 chip, stunning Retina display, and up to 18 hours of battery life, it's perfect for work and play.",
			color: "Silver",
			model: "2020",
			SN: "HTNO-24-07",
			image: Laptop,
			quantity: 1,
		},
		{
			name: "Airpods Pro",
			originalPrice: 400,
			discountedPrice: 400,
			description:
				"Experience superior sound with active noise cancellation, a customizable fit, and seamless integration with your Apple devices for an unparalleled listening experience.",
			color: "Silver",
			model: "2022",
			SN: "HTNO-22-11",
			image: AirPods,
			quantity: 1,
		},
		{
			name: "Easy SMX Game Controller",
			originalPrice: 100,
			discountedPrice: 95,
			description:
				"Elevate your gaming with ergonomic design, responsive buttons, and customizable features for a truly immersive and precise gameplay experience.",
			color: "Black",
			model: "2020",
			SN: "HTNO-27-06",
			image: PlayStation,
			quantity: 1,
		},
		{
			name: "iPhone XSMAX",
			originalPrice: 800,
			discountedPrice: 720,
			description:
				"Enjoy a stunning 6.5-inch Super Retina display, powerful A12 Bionic chip, and advanced dual-camera system for exceptional performance and photography.",
			color: "Black",
			model: "2020",
			SN: "HTNO-27-06",
			image: iPhone,
			quantity: 1,
		},
	];

	return (
		<div>
			<div className="grid justify-center md:flex gap-9 mt-14">
				<div id="categories">
					<Categories />
				</div>
				<div className="-mt-1" id="products">
					<div className="flex">
						<h2 className="md:ml-auto ml-6 uppercase text-[19px] text-[#08319C] font-semibold">
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
					<div className="flex flex-col ml-12 md:ml-auto md:grid md:grid-cols-2 mt-8 gap-7 justify-center items-start">
						{products.map((product, index) => (
							<div key={index}>
								<div className="w-[320px] h-[200px] bg-[#C8D3F0] rounded-lg flex items-center justify-center">
									<Image src={product.image} alt={product.name} unoptimized />
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
                    unoptimized
									/>
									<div className="text-center max-w-[320px] mt-3 text-[13.5px] font-medium">
										<p>{product.description}</p>
									</div>
									{isInCart(product.name) ? (
										<Link href="/cart">
											<button className="bg-[#08319C] text-[16px] text-[#FFFFFF] w-[150px] h-[40px] rounded-md mt-3 uppercase flex justify-center items-center">
												See in cart
											</button>
										</Link>
									) : (
										<button
											className="bg-[#08319C] text-[16px] text-[#FFFFFF] w-[150px] h-[40px] rounded-md mt-3 uppercase"
											onClick={() => addToCart(product)}
										>
											Add to cart
										</button>
									)}
								</div>
							</div>
						))}
					</div>
					<div className="flex justify-center mt-10">
						<button className="bg-[#08319C] text-[15px] text-[#FFFFFF] w-[200px] h-[40px] rounded-md mt-3 uppercase">
							View more products
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedProducts;
