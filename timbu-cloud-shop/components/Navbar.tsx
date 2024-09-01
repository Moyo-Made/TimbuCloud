"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Logo from "@/public/logo.png";
import { X } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { NavLink, navLinks } from "../navLinks";
import Link from "next/link";

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
				<Link href="/">
					<Image
						src={Logo}
						alt="Timbu Cloud Logo"
						width={150}
						height={30}
						property="priority"
					/>
				</Link>
			</div>

			<div className="flex items-center gap-4">
				<div className="hidden md:flex uppercase gap-10 text-[#000000] text-[15px] list-none">
					{navLinks.map((link: NavLink, index: number) => (
						<Link key={index} href={link.id}>
							<li className="hover:font-bold">{link.name}</li>
						</Link>
					))}
				</div>

				<div className="flex items-center">
					<div
						className="hidden md:flex gap-2 ml-2 w-[200px] h-[35px] bg-[#08319C] text-[#FFFFFF] 
						justify-center items-center rounded-md"
					>
						<Link href="/cart">
							<button className="uppercase">Shopping Cart</button>
						</Link>
						<ShoppingCart />
					</div>

					<Link href="/cart">
						<ShoppingCart className="flex md:hidden text-[#08319C]" />
					</Link>
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
					className="absolute top-16 right-4 bg-white shadow-lg p-4 rounded-lg md:hidden list-none"
				>
					{navLinks.map((link: NavLink, index: number) => (
						<Link key={index} href={link.id}>
							<li className="hover:font-semibold py-2">{link.name}</li>
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

export default Navbar;
