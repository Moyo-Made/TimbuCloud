import React from "react";
import SearchInput from "../components/SearchInput";
import CartNavbar from "../components/CartNavbar";
import Cart from "../components/Cart";
import PromocodeInput from "../components/PromocodeInput";
import CartsTotal from "../components/CartsTotal";

const cart = () => {
	return (
		<div>
			<SearchInput />
			<CartNavbar />
			<Cart />
			<PromocodeInput />
			<CartsTotal />
		</div>
	);
};

export default cart;
