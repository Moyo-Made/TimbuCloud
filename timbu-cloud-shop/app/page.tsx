import React from "react";
import SearchInput from "./components/SearchInput";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";

const page = () => {
	return (
		<div>
			<SearchInput />
			<Navbar />
			<Hero />
			<FeaturedProducts />
			<Footer />
		</div>
	);
};

export default page;
