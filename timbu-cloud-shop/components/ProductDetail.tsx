'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { getProductById, updateProduct, deleteProduct } from '../utils/storage';
import { Product } from '../types/Product';
import { useCartStore } from '../stores/useCartStore';
import Link from 'next/link';

const ProductDetail: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [editedProduct, setEditedProduct] = useState<Product | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const addToCart = useCartStore((state) => state.addToCart);
  const isInCart = useCartStore((state) => state.isInCart);

  useEffect(() => {
    const fetchProduct = async () => {
      if (params.id) {
        const fetchedProduct = getProductById(Number(params.id));
        setProduct(fetchedProduct);
        setEditedProduct(fetchedProduct);
      }
    };

    fetchProduct();
  }, [params.id]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedProduct) {
      updateProduct(editedProduct);
      setProduct(editedProduct);
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    if (product) {
      if (window.confirm('Are you sure you want to delete this product?')) {
        deleteProduct(product.id);
        router.push('/');
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (editedProduct) {
      const { name, value } = e.target;
      setEditedProduct({
        ...editedProduct,
        [name]: name === 'discountedPrice' || name === 'originalPrice' ? parseFloat(value) : value,
      });
    }
  };

  const handleAddToCart = async () => {
    if (product) {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      addToCart(product);
      setLoading(false);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={editedProduct?.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        ) : (
          product.name
        )}
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#C8D3F0] rounded-lg flex items-center justify-center p-4">
          <Image
            src={product.image.src || ""}
            alt={product.name}
            width={400}
            height={300}
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div>
          {isEditing ? (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium">Discounted Price</label>
                <input
                  type="number"
                  name="discountedPrice"
                  value={editedProduct?.discountedPrice}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Original Price</label>
                <input
                  type="number"
                  name="originalPrice"
                  value={editedProduct?.originalPrice}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Description</label>
                <textarea
                  name="description"
                  value={editedProduct?.description}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </>
          ) : (
            <>
              <p className="text-2xl font-semibold mb-2">
                ${product.discountedPrice}{" "}
                <span className="line-through text-gray-500 text-xl">
                  ${product.originalPrice}
                </span>
              </p>
              <p className="mb-4">{product.description}</p>
            </>
          )}
          <div className="flex gap-4">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-6 py-2 rounded-md uppercase"
              >
                Save
              </button>
            ) : (
              <>
                {isInCart(product.name) ? (
                  <Link href="/cart">
                    <button className="bg-[#08319C] text-white px-6 py-2 rounded-md uppercase">
                      View in Cart
                    </button>
                  </Link>
                ) : (
                  <button
                    className="bg-[#08319C] text-white px-6 py-2 rounded-md uppercase flex items-center justify-center"
                    onClick={handleAddToCart}
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="w-6 h-6 border-t-2 border-white border-solid rounded-full animate-spin"></div>
                    ) : (
                      "Add to Cart"
                    )}
                  </button>
                )}
              </>
            )}
            {isEditing ? (
              <button
                onClick={() => setIsEditing(false)}
                className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md uppercase"
              >
                Cancel
              </button>
            ) : (
              <button
                onClick={handleEdit}
                className="border border-[#08319C] text-[#08319C] px-6 py-2 rounded-md uppercase"
              >
                Edit
              </button>
            )}
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-6 py-2 rounded-md uppercase"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <Link href="/">
        <button className="mt-8 border border-[#08319C] text-[#08319C] px-6 py-2 rounded-md uppercase">
          Back to Products
        </button>
      </Link>
    </div>
  );
};

export default ProductDetail;