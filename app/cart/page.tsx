"use client";

import { useCart } from "../context/CartContext";

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity } = useCart();
    const celkovaCena = cart.reduce((soucet, item) => soucet + (item.price * item.quantity), 0);

return (
    <div>
    
        {cart.map(item => (
            <div key={item.id} className="border p-4 mb-2">
                <p><strong>{item.title}</strong></p>
                <p>Cena: {item.price} €</p>
                <p>Kusů v košíku: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-2 py-1 mt-2">Odebrat z košíku</button>
                <button onClick={() => updateQuantity(item.id, 1)} className="bg-gray-500 text-white px-2 py-1 mt-2">+</button>
                <button onClick={() => updateQuantity(item.id, -1)} className="bg-gray-500 text-white px-2 py-1 mt-2">-</button>
            </div>
        ))}

        <h3>Celková cena: {celkovaCena.toFixed(2)} €</h3>
    </div>
);
}