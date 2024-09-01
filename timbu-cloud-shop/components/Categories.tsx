import React from "react";
import BestGadget from "@/public/best-gadget.png";
import Image from "next/image";

const Categories = () => {
	return (
		<div className="grid mt-10">
			<div className="hidden md:block w-[270px] h-[310px] border rounded-sm border-[#08319C] shadow-[#08319C] shadow-sm">
				<div className="grid justify-center items-center text-center">
					<h2 className="uppercase text-[17px] text-[#08319C] font-semibold mt-2">
						Best Gadgets
					</h2>
					<span className="uppercase text-[15px] text-[#000000] font-medium mt-1">
						Shop Now!
					</span>
					<Image src={BestGadget} alt="Best Gadget Image" unoptimized />
				</div>
			</div>
		</div>
	);
};

export default Categories;
