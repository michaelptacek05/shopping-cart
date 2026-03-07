"use client";

import { Product } from "../types/Product";
import { useCart } from "../context/CartContext";

interface AddToCartButtonProps {
    product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
    const { cart, addToCart, updateQuantity } = useCart();
    const cartItem = cart.find((item) => item.id === product.id);

    if (cartItem) {
        return (
            <div className="flex items-center gap-3 bg-gray-100 p-1 rounded-lg w-fit border shadow-sm">
                <button
                    onClick={() => updateQuantity(product.id, -1)}
                    className="bg-white hover:bg-gray-200 text-black px-3 py-1 rounded font-bold transition-colors"
                >
                    -
                </button>
                <span className="font-semibold w-6 text-center select-none">
                    {cartItem.quantity}
                </span>
                <button
                    onClick={() => updateQuantity(product.id, 1)}
                    className="bg-white hover:bg-gray-200 text-black px-3 py-1 rounded font-bold transition-colors"
                >
                    +
                </button>
            </div>
        );
    }

    return (
        <button
            onClick={() => {
                addToCart(product);
                console.log("Přidáno do košíku", product.title);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors w-full sm:w-auto font-medium shadow-sm"
        >
            Přidat do košíku
        </button>
    );
}