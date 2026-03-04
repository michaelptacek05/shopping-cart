import { Product } from "@/app/types/Product";

export async function getProducts(): Promise<Product[]> {
    try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            console.warn(`FakeStoreAPI returned status: ${response.status}`);
            return [];
        }

        const text = await response.text();

        if (text.startsWith("<!DOCTYPE") || text.startsWith("<html")) {
            console.error("Received HTML instead of JSON from FakeStoreAPI");
            return [];
        }

        return JSON.parse(text);
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}
