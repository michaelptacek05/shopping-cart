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
        return (
            <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center">
                <div className="text-lg font-medium text-gray-500 animate-pulse">
                    Načítání produktů...
                </div>
            </div>
        );
    }
    if (products.length === 0) {
        return (
            <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center">
                <div className="text-lg text-red-500">
                    Omlouváme se, produkty se nepodařilo načíst.
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f8f9fa] py-12 px-6 md:px-12">
            <div className="max-w-screen-2xl mx-auto">
                <div className="mb-10">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
                        Naše produkty
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base">
                        Prohlížejte z naší široké nabídky produktů
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                
            </div>
        </div>
    );
}