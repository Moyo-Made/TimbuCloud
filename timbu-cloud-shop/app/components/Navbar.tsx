"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Logo from "@/public/logo.png";
import { X } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { NavLink, navLinks } from "../navLinks";

const Navbar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
			setIsMenuOpen(false);
		}
	};

	useEffect(() => {
		if (isMenuOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isMenuOpen]);

	return (
		<div className="flex justify-around items-center p-4 mt-4">
			<div className="mr-14">
				<Image
					src={Logo}
					alt="Timbu Cloud Logo"
					width={150}
					height={30}
					property="priority"
				/>
			</div>

			<div className="flex items-center gap-4">
				<div className="hidden md:flex uppercase gap-10 text-[#000000] text-[15px]">
					{navLinks.map((link: NavLink, index: number) => (
						<p key={index}>{link.name}</p>
					))}
				</div>

				<div className="flex items-center">
					<div
						className="hidden md:flex gap-2 ml-2 w-[178px] h-[35px] bg-[#08319C] text-[#FFFFFF] 
						justify-center items-center rounded-md"
					>
						<button className="uppercase">Shopping Cart</button>
						<ShoppingCart />
					</div>
					<ShoppingCart className="block md:hidden text-[#08319C]" />

					<button
						className="md:hidden text-[#08319C] ml-4"
						onClick={toggleMenu}
						aria-label="Toggle menu"
					>
						{isMenuOpen ? <X /> : "☰"}{" "}
					</button>
				</div>
			</div>

			{isMenuOpen && (
				<div
					ref={menuRef}
					className="absolute top-16 right-4 bg-white shadow-lg p-4 rounded-lg md:hidden"
				>
					{navLinks.map((link: NavLink, index: number) => (
						<p key={index} className="py-2">
							{link.name}
						</p>
					))}
				</div>
			)}
		</div>
	);
};

export default Navbar;
