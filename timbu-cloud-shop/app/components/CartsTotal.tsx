"use client";

import React, { useState } from "react";
import AirPods from "@/public/air-pods.png";
import BlackPods from "@/public/black-earpods.png";
import Ratings from "@/public/ratings.png";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "../stores/useCartStore";

const OtherProducts: React.FC = () => {
	const addToCart = useCartStore((state) => state.addToCart);
	const isInCart = useCartStore((state) => state.isInCart);
	const cart = useCartStore((state) => state.cart);
	const [shippingOption, setShippingOption] = useState<"flat" | "free">("free");

	const products = [
		{
			name: "Airpods Pro",
			originalPrice: 420,
			discountedPrice: 400,
			description:
				"Experience superior sound with active noise cancellation, a customizable fit, and seamless integration with your Apple devices for an unparalleled listening experience.",
			color: "Silver",
			model: "2022",
			SN: "HTNO-22-11",
			image: "../../public/air-pods.png",
			quantity: 1,
		},
		{
			name: "Black Wireless Pods",
			originalPrice: 180,
			discountedPrice: 200,
			description:
				"Experience superior sound with active noise cancellation, a customizable fit, and seamless integration with your Apple devices for an unparalleled listening experience.",
			color: "Silver",
			model: "2022",
			SN: "HTNO-22-11",
			image: "../../public/black-earpods.png",
			quantity: 1,
		},
	];

	// Calculate the subtotal
	const subtotal = cart.reduce(
		(acc, item) => acc + item.discountedPrice * item.quantity,
		0
	);

	// Calculate the total based on the shipping option
	const shippingCost = shippingOption === "flat" ? 30 : 0;
	const total = subtotal + shippingCost;

	return (
		<div className="md:flex md:flex-row flex flex-col-reverse md:ml-52 mt-10">
			<span className="hidden md:grid font-semibold md:ml-0 ml-10">
				You may be interested in
			</span>
			{/* Products */}
			<div className="flex-col md:flex md:flex-row md:-ml-48 mt-10 gap-10 justify-start items-start">
				{products.map((product, index) => (
					<div key={index}>
						<div
							className="w-[200px] h-[150px] bg-[#C8D3F0] rounded-lg flex items-center justify-center 
							md:ml-auto ml-24 md:mt-auto mt-3"
						>
							<Image src={product.image} alt={product.name} />
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

							{isInCart(product.name) ? (
								<Link href="/cart">
									<button className="bg-[#08319C] text-[15px] text-[#FFFFFF] w-[130px] h-[40px] rounded-md mt-5 uppercase flex justify-center items-center">
										See in cart
									</button>
								</Link>
							) : (
								<button
									className="bg-[#08319C] text-[15px] text-[#FFFFFF] w-[130px] h-[40px] rounded-md mt-5 uppercase"
									onClick={() => addToCart(product)}
								>
									Add to cart
								</button>                                                     
							)}
						</div>
					</div>
				))}
			</div>
			<span className="md:hidden grid font-semibold md:ml-0 ml-10 mt-10">
				You may be interested in
			</span>

			{/* Carts Totals */}
			<div className="md:ml-32 ml-9 mt-2">
				<h2 className="font-semibold text-[18px]">Cart Totals</h2>
				<div className="border border-[#0000004D] md:w-[450px] w-[350px] md:h-[320px] h-[280px] mt-2">
					<div className="flex md:gap-[15rem] gap-[12rem] mt-4 font-semibold">
						<h2 className="ml-4">Subtotal</h2>
						<h2>${subtotal.toFixed(2)}</h2>
					</div>
					<div className="hidden md:block bg-[#00000080] border w-[10rem] md:w-[25rem] ml-5 mt-4" />

					<div className="flex gap-[12rem] mt-4 ">
						<div>
							<h2 className="ml-4 font-semibold">Shipping</h2>
						</div>
						<div className="grid">
							<label className="font-semibold md:ml-0 -ml-16">
								<input
									type="radio"
									name="shipping"
									value="flat"
									checked={shippingOption === "flat"}
									onChange={() => setShippingOption("flat")}
									className="mr-1"
								/>
								Flat rate: $30
							</label>
							<label className="text-[14px] md:ml-0 -ml-16">
								<input
									type="radio"
									name="shipping"
									value="free"
									checked={shippingOption === "free"}
									onChange={() => setShippingOption("free")}
									className="mr-1"
								/>
								Free Shipping
							</label>
							<span className="text-[14px] md:-ml-20 -ml-36 mt-1">
								Shipping to{" "}
								<span className="font-semibold">14, AmoreGarden</span>{" "}
							</span>
							<a
								href=""
								className="mt-1 md:ml-4 -ml-12 text-[13px] text-[#08319C]"
							>
								Change Address
							</a>
						</div>
					</div>
					<div className="hidden md:block bg-[#00000080] border w-[10rem] md:w-[25rem] ml-5 mt-4" />

					<div className="flex md:gap-[17rem] gap-[13rem] mt-4 font-semibold">
						<h2 className="ml-4">Total</h2>
						<h2>${total.toFixed(2)}</h2>
					</div>
					<div className="hidden md:block bg-[#00000080] border w-[10rem] md:w-[28rem] mt-4" />

					<div className="flex justify-center items-center mt-4">
						<Link href="/checkout">
							<button className="bg-[#08319C] text-[15px] text-[#FFFFFF] w-[250px] h-[40px] rounded-md mt-3">
								Proceed to Checkout
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OtherProducts;
