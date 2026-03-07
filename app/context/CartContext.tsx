"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Product } from "../types/Product";
import { CartItem, CartContextType } from "../types/Cart";

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productID: number) => {
        setCart((prevCart) => {
            return prevCart.filter((item) => item.id !== productID);
        });
    };

    const updateQuantity = (productID: number, change: number) => {
        setCart((prevCart) => {
            const updateCart = prevCart.map((item) => {
                if (item.id === productID) {
                    return { ...item, quantity: item.quantity + change };
                }            
                return item;
            });
            return updateCart.filter((item) => item.quantity > 0);
        });
    };
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart musí být použit uvnitř CartProvider");
    }
    return context;
}