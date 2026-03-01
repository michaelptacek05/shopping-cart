import { Product } from "@/app/types/Product";

export async function getProducts(): Promise<Product[]> {
    const response = await fetch('https://fakestoreapi.com/products');
    return response.json();
}