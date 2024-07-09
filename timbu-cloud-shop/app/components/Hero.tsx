import React from "react";
import HeroImage from "@/public/hero-image.png";
import Image from "next/image";

const Hero: React.FC = () => {
	return (
		<div className="grid justify-center items-center">
			<div className="mt-3">
				<Image
					src={HeroImage}
					alt="Hero Image"
					className="md:w-[1080px] w-[380px]"
					unoptimized
				/>
				<div className="hidden md:block w-[1080px] h-[20px] bg-[#08319C26] mt-3"></div>
			</div>
		</div>
	);
};

export default Hero;
