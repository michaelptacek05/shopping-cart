"use client";

import { useCart } from "../context/CartContext";

export default function CartPage() {
    const { cart } = useCart();
    const celkovaCena = cart.reduce((soucet, item) => soucet + (item.price * item.quantity), 0);

return (
    <div>
    
        {cart.map(item => (
            <div key={item.id} className="border p-4 mb-2">
                <p><strong>{item.title}</strong></p>
                <p>Cena: {item.price} €</p>
                <p>Kusů v košíku: {item.quantity}</p>
            </div>
        ))}

        {/* A dole pod košíkem vypíšeš spočítanou cenu */}
        <h3>Celková cena: {celkovaCena} €</h3>
    </div>
);
}