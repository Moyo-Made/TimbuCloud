import Laptop from "@/public/laptop.png";
import AirPods from "@/public/air-pods.png";
import PlayStation from "@/public/play-station-pad.png";
import iPhone from "@/public/iphone.png";
import { Product } from "../types/Product";

export const products: Product[] = [
	{
		id: 1,
		name: "13’ Macbook Air 2020",
		originalPrice: 1200,
		discountedPrice: 1080,
		category: "Gadgets",
		description:
			"Lightweight, powerful, and efficient. With the latest M2 chip, stunning Retina display, and up to 18 hours of battery life, it's perfect for work and play.",
		color: "Silver",
		model: "2020",
		SN: "HTNO-24-07",
		image: Laptop,
		quantity: 1,
	},
	{
		id: 2,
		name: "Airpods Pro",
		originalPrice: 400,
		discountedPrice: 400,
		category: "Gadgets",
		description:
			"Experience superior sound with active noise cancellation, a customizable fit, and seamless integration with your Apple devices for an unparalleled listening experience.",
		color: "Silver",
		model: "2022",
		SN: "HTNO-22-11",
		image: AirPods,
		quantity: 1,
	},
	{
		id: 3,
		name: "Easy SMX Game Controller",
		originalPrice: 100,
		discountedPrice: 95,
		category: "Gadgets",
		description:
			"Elevate your gaming with ergonomic design, responsive buttons, and customizable features for a truly immersive and precise gameplay experience.",
		color: "Black",
		model: "2020",
		SN: "HTNO-27-06",
		image: PlayStation,
		quantity: 1,
	},
	{
		id: 4,
		name: "iPhone XSMAX",
		originalPrice: 800,
		discountedPrice: 720,
		category: "Gadgets",
		description:
			"Enjoy a stunning 6.5-inch Super Retina display, powerful A12 Bionic chip, and advanced dual-camera system for exceptional performance and photography.",
		color: "Black",
		model: "2020",
		SN: "HTNO-27-06",
		image: iPhone,
		quantity: 1,
	},
];

export default products;
