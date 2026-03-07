"use client";

import { getProducts } from "@/lib/api";
import ProductCard from "../components/ProductCard";
import { Product } from "../types/Product";
import { useEffect, useState } from "react";

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            const data = await getProducts();
            setProducts(data);
            setLoading(false);
        };

        loadData();
    }, []);

    if (loading) {
        return <div className="p-10 text-xl font-bold">Produkty se načítají</div>;
    }

    if (products.length === 0) {
        return <div className="p-10 text-xl text-red-500">Omlouváme se, produkty se nepodařilo načíst.</div>;
    }

    
    return (
        <div>
            <h1>Naše produkty</h1>
            <div className="flex flex-wrap gap-5">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
