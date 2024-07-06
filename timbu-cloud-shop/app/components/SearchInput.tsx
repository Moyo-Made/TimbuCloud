import React from "react";
import { Search } from "lucide-react";
import { ChevronDown } from "lucide-react";

const SearchInput = () => {
	return (
		<div className="flex justify-around mt-3">
			<div className="relative flex items-center">
				<input
					type="text"
					placeholder="Search"
					className="pl-7 w-[400px] h-[35px] border border-[#08319C] rounded-md 
							   focus:outline-none focus:border-[#08319C] text-sm mr-20"
				/>
				<Search className="absolute w-4 h-4 left-2 text-[#00000080]" />
			</div>

			<div
				className="w-[140px] h-[35px] border border-[#08319C] rounded-md flex text-center 
							justify-center items-center"
			>
				<span className="text-[16px] text-[#00000080]">My Account</span>
				<ChevronDown className="w-4 h-4 ml-1" />
			</div>
		</div>
	);
};

export default SearchInput;
