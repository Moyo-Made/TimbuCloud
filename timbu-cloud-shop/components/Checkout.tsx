"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import CreditCard from "@/public/credit-card.png";
import GiftCard from "@/public/gift-card.png";
import PayPal from "@/public/paypal.png";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "../stores/useCartStore";

const Checkout = () => {
	const [showPopup, setShowPopup] = useState(false);
	const cart = useCartStore((state) => state.cart);
	const [shippingOption, setShippingOption] = useState<"flat" | "free">("free");

	const handlePurchaseClick = () => {
		setShowPopup(true);

		// Automatically close the popup after 2 seconds
		setTimeout(() => {
			setShowPopup(false);
		}, 2000);
	};

	// Calculate the subtotal
	const subtotal = cart.reduce(
		(acc, item) => acc + item.discountedPrice * item.quantity,
		0
	);

	// Calculate the total based on the shipping option
	const shippingCost = shippingOption === "flat" ? 30 : 0;
	const total = subtotal + shippingCost;

	return (
		<div>
			<Navbar />
			<div className="flex flex-col-reverse md:flex md:flex-row gap-5 ml-5 md:ml-40">
				<div className="grid">
					<h2 className="uppercase text-[19px] text-[#08319C] font-semibold mt-8">
						Checkout
					</h2>
					<div className=" md:w-[500px] w-[350px] md:h-[600px] h-[650px] bg-[#C8D3F0] mt-8">
						<div className="mt-5">
							<span className="text-[16px] font-semibold ml-6">
								Delivery Information
							</span>
						</div>

						<div className="mt-7 ml-6">
							<label className="text-[14px] font-semibold">
								Delivery Address
							</label>
							<input
								type="text"
								className="md:w-[420px] w-[300px] h-[30px] border border-[#00000077] rounded-md mt-1 focus:outline-none bg-[#C8D3F0] placeholder:pl-3"
							/>
						</div>

						<div className="mt-5 ml-6">
							<span className="text-[14px] font-semibold">
								Delivery Options
							</span>

							<div className="flex gap-24 md:gap-16 mt-2 ml-24 md:ml-4 ">
								<label className="text-[14px] md:ml-0 -ml-16">
									<input type="radio" className="mr-2" />
									Standard
								</label>

								<label className="text-[14px] md:ml-0 -ml-16">
									<input type="radio" className="mr-2" />
									Express
								</label>
							</div>
						</div>

						<div className="mt-5 ml-6">
							<span className="text-[17px] font-semibold">Payment Methods</span>
							<div className="flex gap-3 md:gap-10 ml-3 md:ml-6 mt-3">
								<Image
									src={CreditCard}
									alt="Credit card"
									className="w-[80px] h-[80px]"
									unoptimized
								/>
								<Image
									src={GiftCard}
									alt="Gift card"
									className="w-[80px] h-[80px]"
									unoptimized
								/>
								<Image
									src={PayPal}
									alt="PayPal"
									className="w-[80px] h-[80px]"
									unoptimized
								/>
							</div>
						</div>

						<div className="ml-6 mt-4">
							<label className="text-[14px] font-semibold">
								Credit Card Info
							</label>
							<input
								type="text"
								placeholder="0000 - 0000 - 0000 - 0000"
								className="md:w-[420px] w-[300px] h-[30px] border border-[#00000077] rounded-md mt-1 focus:outline-none bg-[#C8D3F0] placeholder:pl-3"
							/>
						</div>

						<div className="ml-6 mt-4">
							<label className="text-[14px] font-semibold">Name on Card</label>
							<input
								type="text"
								className="md:w-[420px] w-[300px] h-[30px] border border-[#00000077] rounded-md mt-1 focus:outline-none bg-[#C8D3F0] placeholder:pl-3"
							/>
						</div>

						<div className="flex flex-wrap gap-10">
							<div className="ml-6 mt-4">
								<label className="text-[14px] font-semibold">CVV Number</label>
								<div>
									<input
										type="text"
										placeholder="000"
										className="w-[100px] h-[30px] border border-[#00000077] rounded-md mt-1 placeholder:text-[15px] focus:outline-none bg-[#C8D3F0] placeholder:pl-3"
									/>
								</div>
							</div>

							<div className="mt-4 relative">
								<label className="text-[14px] font-semibold">
									Expiry Month
								</label>
								<div className="relative">
									<input
										type="text"
										placeholder="Month"
										className="w-[100px] h-[30px] border border-[#00000077] rounded-md mt-1 placeholder:text-[15px] focus:outline-none bg-[#C8D3F0] placeholder:pl-3 pr-8" // Add pr-8 for padding right
									/>
									<ChevronDown className="absolute w-5 h-5 mt-1 right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" />{" "}
								</div>
							</div>

							<div className="-mt-5 md:mt-4 ml-6 md:ml-0 relative">
								<label className="text-[14px] font-semibold">Expiry Year</label>
								<div className="relative">
									<input
										type="text"
										placeholder="Year"
										className="w-[100px] h-[30px] border border-[#00000077] rounded-md mt-1 placeholder:text-[15px] focus:outline-none bg-[#C8D3F0] placeholder:pl-3 pr-8" // Add pr-8 for padding right
									/>
									<ChevronDown className="absolute w-5 h-5 mt-1 right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" />{" "}
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Order Summary */}
				<div className="mt-10 md:mt-32">
					<h2 className="text-[15px] font-semibold">Order Summary</h2>
					<div className="border border-[#0000004D] md:w-[450px] w-[350px] md:h-[250px] h-[280px] mt-4">
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
					</div>
					<div className="grid justify-center items-center mt-4 ">
						<Link href="/checkout">
							<button
								onClick={handlePurchaseClick}
								className="bg-[#08319C] text-[15px] text-[#FFFFFF] w-[250px] h-[40px] rounded-md mt-3"
							>
								Complete Purchase
							</button>
						</Link>
						{showPopup && (
							<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
								<div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
									<div className="checkmark-container mb-4">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-12 w-12 text-green-500"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M5 13l4 4L19 7"
											/>
										</svg>
									</div>
									<p className="text-lg font-semibold">Purchase Successful</p>
								</div>
							</div>
						)}
						<Link
							href="/cart"
							className="text-[14px] underline mt-2 text-center"
						>
							Back to cart
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
