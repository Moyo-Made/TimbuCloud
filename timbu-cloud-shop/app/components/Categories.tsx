import React from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import BestGadget from "@/public/best-gadget.png";
import Image from "next/image";

const Categories = () => {
	return (
		<div className="grid">
			<div className="hidden md:block w-[250px] h-[400px]">
				<div className="md:w-[250px] h-[35px] bg-[#08319C] text-[#FFFFFF] flex justify-center items-center">
					<span className="uppercase text-[16px] font-medium">
						Shop by category
					</span>
				</div>
				<div className="flex justify-between items-center h-[35px] bg-[#08319C33] text-[#08319C] text-start">
					<span className="text-[15px] font-medium ml-3">Smartphones</span>
					<ChevronRight className="mr-2" />
				</div>

				<div className="flex justify-between items-center h-[35px] mt-[3px] bg-[#08319C33] text-[#08319C] text-start">
					<span className="text-[15px] font-medium ml-3">Laptops</span>
					<ChevronRight className="mr-2" />
				</div>

				<div className="flex justify-between items-center h-[35px] mt-[3px] bg-[#08319C33] text-[#08319C] text-start">
					<span className="text-[15px] font-medium ml-3">Accessories</span>
					<ChevronRight className="mr-2" />
				</div>

				<div className="flex justify-between items-center h-[35px] mt-[3px] bg-[#08319C33] text-[#08319C] text-start">
					<span className="text-[15px] font-medium ml-3">Gaming</span>
					<ChevronRight className="mr-2" />
				</div>

				<div className="flex justify-between items-center h-[35px] mt-[3px] bg-[#08319C33] text-[#08319C] text-start">
					<span className="text-[15px] font-medium ml-3">
						Wearable Technologies
					</span>
					<ChevronRight className="mr-2" />
				</div>

				<div className="flex justify-between items-center h-[35px] mt-[3px] bg-[#08319C33] text-[#08319C] text-start">
					<span className="text-[15px] font-medium ml-3">
						Photo/Videography
					</span>
					<ChevronRight className="mr-2" />
				</div>

				<div className="flex justify-between items-center h-[35px] mt-[3px] bg-[#08319C33] text-[#08319C] text-start">
					<span className="text-[15px] font-medium ml-3">
						Audio Entertainment
					</span>
					<ChevronRight className="mr-2" />
				</div>
			</div>

			{/* For Mobile */}
			<div>
				<div className="md:hidden grid w-[380px] h-[35px] ml-10 -mt-6 bg-[#08319C] text-[#FFFFFF] text-center justify-center items-center">
					<span className="uppercase text-[16px] font-medium">
						Shop by category
					</span>
				</div>

				<div className="grid grid-cols-2 ml-10">
					<div className="md:hidden flex justify-start items-center w-[180px] h-[35px] mt-2 bg-[#08319C33] text-[#08319C] text-start">
						<span className="text-[15px] font-medium pl-8">Smartphones</span>
						<ChevronDown className="ml-2" />
					</div>

					<div className="md:hidden flex justify-start items-center w-[180px] h-[35px] -ml-1 mt-2 bg-[#08319C33] text-[#08319C] text-start">
						<span className="text-[15px] font-medium pl-8">Accessories</span>
						<ChevronDown className="ml-2" />
					</div>

					<div className="md:hidden flex justify-start items-center w-[160px] h-[35px] mt-2 bg-[#08319C33] text-[#08319C] text-start">
						<span className="text-[15px] font-medium pl-8">Laptops</span>
						<ChevronDown className="ml-2" />
					</div>

					<div className="md:hidden flex justify-start items-center w-[195px] h-[35px] -ml-5 mt-2 bg-[#08319C33] text-[#08319C] text-start">
						<span className="text-[15px] font-medium pl-8">Wearable Tech</span>
						<ChevronDown className="ml-2" />
					</div>

					<div className="md:hidden flex justify-start items-center w-[220px] h-[35px] mt-2 bg-[#08319C33] text-[#08319C] text-start">
						<span className="text-[15px] font-medium pl-8">
							Photo/Videography
						</span>
						<ChevronDown className="ml-2" />
					</div>

					<div className="md:hidden flex justify-start items-center w-[150px] h-[35px] ml-6 mt-2 bg-[#08319C33] text-[#08319C] text-start">
						<span className="text-[15px] font-medium pl-8">Gaming</span>
						<ChevronDown className="ml-2" />
					</div>
				</div>
			</div>

			<div className="hidden md:block w-[270px] h-[310px] border rounded-sm border-[#08319C] shadow-[#08319C] shadow-sm">
				<div className="grid justify-center items-center text-center">
					<h2 className="uppercase text-[17px] text-[#08319C] font-semibold mt-2">
						Best Gadgets
					</h2>
					<span className="uppercase text-[15px] text-[#000000] font-medium mt-1">
						Shop Now!
					</span>
					<Image src={BestGadget} alt="Best Gadget Image" />
				</div>
			</div>
		</div>
	);
};

export default Categories;
