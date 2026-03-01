"use client";

import { Product } from "../types/Product";


interface AddToCartButtonProps {
    product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
    return (
        <button onClick={() => console.log("Přidáno do košíku", product.title)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Přidat do košíku
        </button>
    );
}