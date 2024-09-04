import React from "react";
import FooterLogo from "@/public/footer-logo.png";
import Image from "next/image";

const Footer = () => {
	return (
		<div
			className="flex flex-col md:flex md:flex-row gap-7 md:gap-20 bg-[#08319C] w-[1080px] h-[260px] mt-20 md:ml-[10rem]"
			id="contact"
		>
			<div className="mt-7 ml-12">
				<Image
					src={FooterLogo}
					alt="Timbo cloud"
					width={150}
					height={30}
				/>
				<div className="hidden md:block mt-5 w-[600px]">
					<p className="text-[#FFFF] leading-7 ">
						At Timbu Cloud Shop, we cater to all your gadget needs in one
						convenient location. We offer a wide range of affordable and
						accessible products, no matter where you are or what you&apos;re
						looking for. Timbu Cloud Shop is your ultimate one-stop shop for
						gadgets.
					</p>
				</div>
			</div>

			<div className="flex md:block ml-3 md:ml-36 md:mt-7 text-[#FFFF]">
				<div className="ml-10 md:ml-auto md:mt-7">
					<h2 className="text-[25px] font-semibold">Contact</h2>
					<div className="list-none leading-7 mt-3">
						<a href="">
							<li>@timbucloud.com</li>
						</a>
						<a href="">
							<li>+234 807 556 5557</li>
						</a>
						<a href="">
							<li>Lagos, Nigeria</li>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
