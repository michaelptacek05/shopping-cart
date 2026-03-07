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
            <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center justify-between border border-gray-200 rounded-md h-10 w-full overflow-hidden bg-white">
                    <button
                        onClick={() => updateQuantity(product.id, -1)}
                        className="w-10 h-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                        -
                    </button>
                    <span className="flex-1 text-center font-medium text-gray-800 text-sm select-none border-x border-gray-200 h-full flex items-center justify-center">
                        {cartItem.quantity}
                    </span>
                    
                    <button
                        onClick={() => updateQuantity(product.id, 1)}
                        className="w-10 h-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                        +
                    </button>
                </div>
            </div>
        );
    }

    return (
        <button
            onClick={() => {
                addToCart(product);
            }}
            className="w-full bg-[#00cfa1] hover:bg-[#00b38a] text-white py-2.5 rounded-md text-sm font-bold transition-all duration-300 shadow-sm hover:shadow active:scale-[0.98]"
        >
            Add to Cart
        </button>
    );
}