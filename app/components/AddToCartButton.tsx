"use client";

import { Product } from "../types/Product";
import { useCart } from "../context/CartContext";

interface AddToCartButtonProps {
    product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
    const { addToCart } = useCart();

    return (
        <button
            onClick={() => {
                addToCart(product);
                console.log("Přidáno do košíku", product.title);
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
            Přidat do košíku
        </button>
    );
}
