"use client";

import React from "react";
import { useCartStore } from "../stores/useCartStore";
import Image from "next/image";
import { X } from "lucide-react";
import Link from "next/link";

const Cart: React.FC = () => {
	const cart = useCartStore((state) => state.cart);
	const removeFromCart = useCartStore((state) => state.removeFromCart);
	const updateQuantity = useCartStore((state) => state.updateQuantity);

	const handleQuantityChange = (index: number, newQuantity: number) => {
		if (newQuantity > 0) {
			updateQuantity(index, newQuantity);
		}
	};

	return (
		<div className="grid justify-start md:ml-[12.5rem] ml-10">
			<div className="flex gap-36">
				<h2 className="mt-5 md:text-[25px] text-[20px] text-[#08319C] font-semibold uppercase">
					My cart
				</h2>
				<a
					href=""
					className="flex md:hidden text-[#08319C] underline font-semibold mt-[1.4rem]"
				>
					<li className="list-none">Update</li>
				</a>
			</div>
			<div className="grid grid-cols-4 mt-6 text-[18px] font-semibold">
				<div>
					<p>Product</p>
				</div>
				<div className="hidden md:flex ml-[18rem]">
					<span>Price</span>
				</div>
				<div className="hidden md:flex ml-[8rem]">
					<span>Quantity</span>
				</div>
				<div className="hidden md:flex ml-2">
					<span>Total</span>
				</div>
			</div>
			<div className="bg-[#00000080] border w-[20rem] md:w-[63rem] mt-4" />
			{cart.length > 0 ? (
				cart.map((item, index) => (
					<div
						key={index}
						className="grid grid-cols-4 md:mt-10 text-[18px] font-medium"
					>
						<div className="flex items-center ">
							<Image
								src={item.image}
								alt={item.name}
								width={200}
								height={150}
								className="bg-[#C8D3F0] rounded-md"
								unoptimized
							/>

							<div className="grid ml-10 text-[14px]">
								<span className="block font-semibold">{item.name}</span>
								<div className="flex gap-3">
									<span className="flex">
										<span className="font-semibold">Color: </span>
										<span className="ml-1">{item.color}</span>
									</span>
									<span className="flex">
										<span className="font-semibold">Model:</span>
										<span className="ml-1">{item.model}</span>
									</span>
								</div>
								<span>
									<span className="font-semibold">SN: </span> {item.SN}
								</span>
							</div>
						</div>

						<div className="hidden md:flex items-center ml-[18rem] font-semibold text-[15px]">
							<span>${item.discountedPrice}.00</span>
						</div>

						<div className="flex items-center text-center ml-8 md:ml-[8rem] mt-24 md:mt-0   font-semibold text-[15px]">
							<button
								onClick={() => handleQuantityChange(index, item.quantity - 1)}
								className="px-2 text-[20px] -mt-1"
							>
								-
							</button>
							<span className="mx-2">{item.quantity}</span>
							<button
								onClick={() => handleQuantityChange(index, item.quantity + 1)}
								className="px-2 text-[20px] -mt-1"
							>
								+
							</button>
						</div>
						<div className="flex items-center mt-24 md:mt-0 ml-8 md:ml-2 font-semibold text-[15px]">
							<span>${item.discountedPrice * item.quantity}.00</span>
							<X
								className="md:ml-7 cursor-pointer"
								onClick={() => removeFromCart(index)}
							/>
						</div>
						<div className="hidden md:block bg-[#00000080] border w-[20rem] md:w-[63rem] mt-4" />
					</div>
				))
			) : (
				<div className="grid justify-center items-center mt-10 text-[18px] font-medium">
					No items in the cart.
					<div>
						<Link href="/">
							<button className="bg-[#08319C] text-[16px] text-[#FFFFFF] w-[150px] h-[40px] rounded-md mt-3 uppercase">
								Add to cart
							</button>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
