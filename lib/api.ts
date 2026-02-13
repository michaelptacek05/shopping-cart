export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    description?: string;
    category?: string;
}

export async function getProducts(): Promise<Product[]> {
    const response = await fetch('https://fakestoreapi.com/products');
    return response.json();
}