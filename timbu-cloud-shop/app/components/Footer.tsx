import React from "react";
import FooterLogo from "@/public/footer-logo.png";
import Facebook from "@/public/facebook.png";
import LinkedIn from "@/public/linkedin.png";
import Instagram from "@/public/instagram.png";
import Image from "next/image";

const Footer = () => {
	return (
		<div
			className="grid grid-cols-1 md:grid-cols-3 gap-10 bg-[#08319C] w-[1080px] h-[400px] mt-20 md:ml-32"
			id="contact"
		>
			<div className="mt-7 ml-12">
				<Image src={FooterLogo} alt="Timbo cloud" width={150} height={30} />
				<div className="hidden md:block mt-5 w-[400px]">
					<p className="text-[#FFFF] leading-7 ">
						At Timbu Cloud Shop, we cater to all your gadget needs in one
						convenient location. We offer a wide range of affordable and
						accessible products, no matter where you are or what you&apos;re
						looking for. Timbu Cloud Shop is your ultimate one-stop shop for
						gadgets.
					</p>
				</div>
			</div>

			<div className="flex md:block ml-10 md:ml-36  md:mt-7 text-[#FFFF]">
				<h2 className="text-[25px] font-semibold">Support</h2>
				<div className="-ml-24 md:ml-auto list-none leading-7 mt-10 md:mt-3">
					<a href="">
						<li>FAQ</li>
					</a>
					<a href="">
						<li>Return Policy</li>
					</a>
					<a href="">
						<li>Shipping Information</li>
					</a>
					<a href="">
						<li>Order Tracking</li>
					</a>
					<a href="">
						<li>Help</li>
					</a>
				</div>
				<div className="ml-10 md:ml-auto md:mt-7">
					<h2 className="text-[25px] font-semibold">Contact</h2>
					<div className="list-none leading-7 mt-3">
						<li>@gadget.com</li>
						<li>+123 456789</li>
						<li>Anywhere</li>
					</div>
				</div>
			</div>

			<div className=" text-[#FFFF] ml-10 mt-7">
				<h2 className="hidden md:block text-[25px] font-semibold">
					Legal Info
				</h2>
				<div className="hidden md:block list-none leading-7 mt-3">
					<a href="">
						<li>Terms of Service</li>
					</a>
					<a href="">
						<li>Privacy Policy</li>
					</a>
					<a href="">
						<li>Cookie Policy</li>
					</a>
				</div>

				<div>
					<div className="flex gap-3 md:gap-5 -mt-6 md:mt-10">
						<Image src={Facebook} alt="Facebook icon" />
						<Image src={LinkedIn} alt="LinkedIn icon" />
						<Image src={Instagram} alt="Instagram icon" />
					</div>

					<div className="flex ml-32 -mt-5 md:hidden list-none gap-3 text-[13px] italic">
						<a href="">
							<li>Terms of Service</li>
						</a>
						<a href="">
							<li>Privacy Policy</li>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
