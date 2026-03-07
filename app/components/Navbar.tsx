"use client"

import { FiShoppingBag } from "react-icons/fi";
import { useCart } from "../context/CartContext";

export default function Navbar() {
    const { cart } = useCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <nav className="bg-white border-b border-gray-200 py-4 px-6 md:px-12 w-full sticky top-0 z-50">
            <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
                <div>
                    <a href="/" className="text-xl md:text-2xl font-black tracking-widest uppercase text-black">
                        MYSTORE
                    </a>
                </div>
                <div className="flex items-center gap-8 md:gap-12">
                    <div className="flex items-center gap-6">
                        <a href="/" className="text-black font-bold text-sm tracking-wide">
                            Domů
                        </a>
                        <a href="/products" className="text-black font-bold text-sm tracking-wide">
                            Nakupovat
                        </a>
                    </div>

                    
                    <div className="flex items-center gap-6">
                    
                        <button 
                            onClick={() => window.location.href = '/cart'}
                            className="relative text-gray-800 hover:text-black transition-colors"
                        >
                            <FiShoppingBag className="text-2xl" />
                            
                            {totalItems > 0 && (
                                <span className="absolute -top-1.5 -right-2 bg-black text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                                    {totalItems}
                                </span>
                            )}
                        </button>

                    </div>
                </div>
            </div>
        </nav>
    );
}