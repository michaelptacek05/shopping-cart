"use client"

import { FaCartShopping } from "react-icons/fa6";
import { useCart } from "../context/CartContext";

export default function Navbar() {

    const { cart } = useCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <nav className="bg-gray-800 text-white p-4 w-full sticky top-0">
            <div className="w-auto flex justify-between">
                <div className="flex gap-5 flex-row items-center">
                    <h1 className="text-xl font-bold">E-shop</h1>
                    <a href="/">Homepage</a>
                    <a href="/products">Products</a>
                </div>
                <div className="flex gap-2 flex-row items-center">
                    ({totalItems})
                    <FaCartShopping className="cursor-pointer" onClick={() => window.location.href = '/cart'} />
                </div>
            </div>
        </nav>
    );
}       


