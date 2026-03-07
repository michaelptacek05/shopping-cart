"use client";

import { useCart } from "../context/CartContext";
import { FiX } from "react-icons/fi";

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity } = useCart();
    const celkovaCena = cart.reduce((soucet, item) => soucet + (item.price * item.quantity), 0);

    if (cart.length === 0) {
        return (
            <div className="min-h-[70vh] bg-[#f8f9fa] flex flex-col items-center justify-center px-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Tvůj košík je prázdný</h2>
                <p className="text-gray-500 mb-8">Vypadá to, že jsi sem ještě nic nepřidal.</p>
                <button 
                    onClick={() => window.location.href = '/products'}
                    className="bg-[#00cfa1] hover:bg-[#00b38a] text-white px-8 py-3 rounded-md font-bold transition-all shadow-sm"
                >
                    Zpět do obchodu
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f8f9fa] py-12 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
                    Nákupní košík
                </h1>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
                    {cart.map(item => (
                        <div key={item.id} className="flex flex-col sm:flex-row items-center p-4 md:p-6 border-b border-gray-50 last:border-0 gap-4 md:gap-6 hover:bg-gray-50 transition-colors">
                            <div className="w-24 h-24 bg-white rounded-lg p-2 border border-gray-100 flex-shrink-0">
                                <img src={item.image} alt={item.title} className="w-full h-full object-contain mix-blend-multiply" />
                            </div>
                            <div className="flex-1 text-center sm:text-left">
                                <h3 className="font-bold text-gray-800 text-lg mb-1">{item.title}</h3>
                                <p className="text-gray-500 font-medium">{item.price} € / ks</p>
                            </div>
                            <div className="flex items-center justify-between border border-gray-200 rounded-md h-10 w-28 bg-white flex-shrink-0">
                                <button
                                    onClick={() => updateQuantity(item.id, -1)}
                                    className="w-10 h-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-colors"
                                >
                                    -
                                </button>
                                <span className="flex-1 text-center font-medium text-gray-800 text-sm border-x border-gray-200 h-full flex items-center justify-center">
                                    {item.quantity}
                                </span>
                                <button
                                    onClick={() => updateQuantity(item.id, 1)}
                                    className="w-10 h-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-colors"
                                >
                                    +
                                </button>
                            </div>
                            <div className="w-24 text-center sm:text-right font-extrabold text-gray-900 text-lg flex-shrink-0">
                                {(item.price * item.quantity).toFixed(2)} €
                            </div>
                            <button 
                                onClick={() => removeFromCart(item.id)} 
                                className="w-10 h-10 flex items-center justify-center text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors flex-shrink-0"
                                title="Odebrat z košíku"
                            >
                                <FiX className="text-xl" />
                            </button>
                        </div>
                    ))}
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-gray-500 font-medium mb-1">Celková cena</p>
                        <h2 className="text-3xl font-extrabold text-gray-900">
                            {celkovaCena.toFixed(2)} €
                        </h2>
                    </div>
                    <button className="w-full md:w-auto bg-[#00cfa1] hover:bg-[#00b38a] text-white px-10 py-4 rounded-md font-bold text-lg transition-all shadow-sm hover:shadow active:scale-[0.98]">
                        Přejít k platbě
                    </button>
                </div>

            </div>
        </div>
    );
}