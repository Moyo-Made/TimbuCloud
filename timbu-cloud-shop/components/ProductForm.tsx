import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Product } from "../types/Product";
import { getProducts, saveProducts } from "../utils/storage";

type ImageData = {
	src: string;
	height: number;
	width: number;
	blurDataURL?: string;
};

const ProductForm: React.FC = () => {
	const router = useRouter();
	const [formData, setFormData] = useState<Omit<Product, "id" | "image">>({
		name: "",
		originalPrice: 0,
		discountedPrice: 0,
		description: "",
		category: "",
		color: "",
		model: "",
		SN: "",
		quantity: 1,
	});

	const [imageData, setImageData] = useState<ImageData | null>(null);
	const [debug, setDebug] = useState<string>("");

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]:
				name === "originalPrice" ||
				name === "discountedPrice" ||
				name === "quantity"
					? Number(value)
					: value,
		}));
	};

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];
			const reader = new FileReader();

			reader.onload = (event) => {
				if (event.target && typeof event.target.result === "string") {
					const img = new window.Image();
					img.onload = () => {
						if (event.target && event.target instanceof FileReader) {
							setImageData({
								src: event.target.result as string,
								height: img.height,
								width: img.width,
							});
						}
					};
					img.src = event.target.result;
				}
			};

			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (imageData) {
			const newProduct: Product = {
				...formData,
				id: Date.now(),
				image: imageData,
			};

			const currentProducts = getProducts();
			setDebug(
				(prev) =>
					prev + `\nCurrent products: ${JSON.stringify(currentProducts)}`
			);

			const updatedProducts = [...currentProducts, newProduct];
			saveProducts(updatedProducts);

			setDebug(
				(prev) =>
					prev + `\nUpdated products: ${JSON.stringify(updatedProducts)}`
			);
			setDebug(
				(prev) => prev + `\nNew product added: ${JSON.stringify(newProduct)}`
			);

			router.push("/");
		} else {
			alert("Please upload an image before submitting.");
		}
	};

	return (
		<form onSubmit={handleSubmit} className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Add New Product</h1>

			{/* Product Name */}
			<div className="mb-4">
				<label className="block text-sm font-medium">Product Name</label>
				<input
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
					className="w-full p-2 border rounded"
					required
				/>
			</div>

			{/* Original Price */}
			<div className="mb-4">
				<label className="block text-sm font-medium">Original Price</label>
				<input
					type="number"
					name="originalPrice"
					value={formData.originalPrice}
					onChange={handleChange}
					className="w-full p-2 border rounded"
					required
					min="0"
					step="0.01"
				/>
			</div>

			{/* Discounted Price */}
			<div className="mb-4">
				<label className="block text-sm font-medium">Discounted Price</label>
				<input
					type="number"
					name="discountedPrice"
					value={formData.discountedPrice}
					onChange={handleChange}
					className="w-full p-2 border rounded"
					required
					min="0"
					step="0.01"
				/>
			</div>

			{/* Description */}
			<div className="mb-4">
				<label className="block text-sm font-medium">Description</label>
				<textarea
					name="description"
					value={formData.description}
					onChange={handleChange}
					className="w-full p-2 border rounded"
					required
				/>
			</div>

			{/* Category */}
			<div className="mb-4">
				<label className="block text-sm font-medium">Category</label>
				<input
					type="text"
					name="category"
					value={formData.category}
					onChange={handleChange}
					className="w-full p-2 border rounded"
					required
				/>
			</div>

			{/* Color */}
			<div className="mb-4">
				<label className="block text-sm font-medium">Color</label>
				<input
					type="text"
					name="color"
					value={formData.color}
					onChange={handleChange}
					className="w-full p-2 border rounded"
					required
				/>
			</div>

			{/* Model */}
			<div className="mb-4">
				<label className="block text-sm font-medium">Model</label>
				<input
					type="text"
					name="model"
					value={formData.model}
					onChange={handleChange}
					className="w-full p-2 border rounded"
					required
				/>
			</div>

			{/* SN */}
			<div className="mb-4">
				<label className="block text-sm font-medium">SN</label>
				<input
					type="text"
					name="SN"
					value={formData.SN}
					onChange={handleChange}
					className="w-full p-2 border rounded"
					required
				/>
			</div>

			{/* Quantity */}
			<div className="mb-4">
				<label className="block text-sm font-medium">Quantity</label>
				<input
					type="number"
					name="quantity"
					value={formData.quantity}
					onChange={handleChange}
					className="w-full p-2 border rounded"
					required
					min="1"
					step="1"
				/>
			</div>

			{/* Image Upload */}
			<div className="mb-4">
				<label className="block text-sm font-medium">Upload Image</label>
				<input
					type="file"
					accept="image/*"
					onChange={handleImageChange}
					className="w-full p-2 border rounded"
					required={!imageData}
				/>
				{imageData && (
					<div className="mt-4 relative h-[200px] w-[200px]">
						<Image
							src={imageData.src}
							alt="Product Preview"
							fill
							style={{ objectFit: "contain" }}
							unoptimized={true} // Allows dynamic images like base64
						/>
					</div>
				)}
			</div>
			<button
				type="submit"
				className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
			>
				Add Product
			</button>

			{/* Debug information */}
			<pre className="mt-4 p-4 bg-gray-100 rounded">{debug}</pre>
		</form>
	);
};

export default ProductForm;
