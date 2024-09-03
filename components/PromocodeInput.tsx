import React from "react";

const PromocodeInput = () => {
	return (
		<div className="flex">
			<div className="flex ml-10 md:ml-52 mt-10 ">
				<div className="relative md:w-[350px] w-[300px]">
					<input
						name="text"
						type="text"
						placeholder="Promo Code Here"
						className="w-full text-[#ffff] h-[40px] placeholder:font-semibold placeholder:text-[15px] border border-[#08319C] 
			 			pl-2 pr-[80px] focus:outline-none"
					/>
					<button
						type="submit"
						className="w-[120px] h-[40px] absolute right-0 top-0 bottom-1 bg-[#08319C] font-semibold text-[15px] text-white px-4"
					>
						Apply
					</button>
				</div>
			</div>
		</div>
	);
};

export default PromocodeInput;
