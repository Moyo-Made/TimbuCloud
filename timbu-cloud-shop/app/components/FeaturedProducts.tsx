import React from "react";
import Categories from "./Categories";
import Image from "next/image";
import Laptop from "@/public/laptop.png";
import AirPods from "@/public/air-pods.png";
import PlayStation from "@/public/play-station-pad.png";
import iPhone from "@/public/iphone.png";
import Ratings from "@/public/ratings.png";

const FeaturedProducts = () => {
	return (
		<div>
			<div className="grid justify-center md:flex gap-9 mt-14">
				<div className="">
					<Categories />
				</div>

				<div className="-mt-1">
					<div className="flex">
						<h2 className="md:ml-auto ml-10 uppercase text-[19px] text-[#08319C] font-semibold">
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
					{/* Products */}
					<div className="flex flex-col ml-16 md:ml-auto md:grid md:grid-cols-2 mt-8 gap-7 justify-center items-start">
						{/* 13’ Macbook Air 2020 */}
						<div>
							<div className="w-[320px] h-[200px] bg-[#C8D3F0] rounded-lg flex items-center justify-center">
								<Image src={Laptop} alt="Laptop" />
							</div>

							<div className="flex flex-col justify-center items-center mt-3 -ml-4">
								<p className="text-[16px] text-[#000000] font-medium text-center">
									13’ Macbook Air 2020 <br />
									$1080{" "}
									<span className="line-through text-[#2b2a2a]">$1200</span>
								</p>
								<Image
									src={Ratings}
									alt="Ratings"
									className="mt-1"
									width={100}
									height={18}
								/>
								<div className="text-center max-w-[320px] mt-3 text-[13.5px] font-medium">
									<p>
										Lightweight, powerful, and efficient. With the latest M2
										chip, stunning Retina display, and up to 18 hours of battery
										life, it&#39;s perfect for work and play.
									</p>
								</div>

								<button className="bg-[#08319C] text-[16px] text-[#FFFFFF] w-[150px] h-[40px] rounded-md mt-3 uppercase">
									Add to cart
								</button>
							</div>
						</div>

						{/* Airpods pro */}
						<div>
							<div className="w-[320px] h-[200px] bg-[#C8D3F0] rounded-lg flex items-center justify-center">
								<Image src={AirPods} alt="AirPods" />
							</div>

							<div className="flex flex-col justify-center items-center mt-3 -ml-4">
								<p className="text-[16px] text-[#000000] font-medium text-center">
									Airpods pro <br /> $400
								</p>
								<Image
									src={Ratings}
									alt="Ratings"
									className="mt-1"
									width={100}
									height={18}
								/>
								<div className="text-center max-w-[320px] mt-3 text-[13.5px] font-medium">
									<p>
										Experience superior sound with active noise cancellation, a
										customizable fit, and seamless integration with your Apple
										devices for an unparalleled listening experience.
									</p>
								</div>

								<button className="bg-[#08319C] text-[16px] text-[#FFFFFF] w-[150px] h-[40px] rounded-md mt-3 uppercase">
									Add to cart
								</button>
							</div>
						</div>

						{/* Easy SMX Game Controller */}
						<div className="md:ml-4 ml-0">
							<div className="w-[320px] h-[200px] bg-[#C8D3F0] rounded-lg flex items-center justify-center ">
								<Image src={PlayStation} alt="PlayStation" />
							</div>

							<div className="flex flex-col justify-center items-center mt-3 -ml-4">
								<p className="text-[16px] text-[#000000] font-medium text-center">
									Easy SMX Game Controller
									<br /> $95{" "}
									<span className="line-through text-[#2b2a2a]">$100</span>
								</p>
								<Image
									src={Ratings}
									alt="Ratings"
									className="mt-1"
									width={100}
									height={18}
								/>
								<div className="text-center max-w-[320px] mt-3 text-[13.5px] font-medium">
									<p>
										Elevate your gaming with ergonomic design, responsive
										buttons, and customizable features for a truly immersive and
										precise gameplay experience.
									</p>
								</div>

								<button className="bg-[#08319C] text-[16px] text-[#FFFFFF] w-[150px] h-[40px] rounded-md mt-3 uppercase">
									Add to cart
								</button>
							</div>
						</div>

						{/* iPhone XSMAX */}
						<div className="md:ml-5 ml-0">
							<div className="w-[320px] h-[200px] bg-[#C8D3F0] rounded-lg flex items-center justify-center">
								<Image src={iPhone} alt="iPhone" />
							</div>

							<div className="flex flex-col justify-center items-center mt-3 -ml-4">
								<p className="text-[16px] text-[#000000] font-medium text-center">
									iPhone XSMAX <br /> $720{" "}
									<span className="line-through text-[#2b2a2a]">$800</span>
								</p>
								<Image
									src={Ratings}
									alt="Ratings"
									className="mt-1"
									width={100}
									height={18}
								/>
								<div className="text-center max-w-[320px] mt-3 text-[13.5px] font-medium">
									<p>
										Enjoy a stunning 6.5-inch Super Retina display, powerful A12
										Bionic chip, and advanced dual-camera system for exceptional
										performance and photography.
									</p>
								</div>

								<button className="bg-[#08319C] text-[16px] text-[#FFFFFF] w-[150px] h-[40px] rounded-md mt-3 uppercase">
									Add to cart
								</button>
							</div>
						</div>
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
