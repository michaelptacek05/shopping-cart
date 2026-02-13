import { getProducts } from "@/lib/api";

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <div>
            <h1>Naše produkty</h1>
            {products.map((product) => (
                <li key={product.id}>{product.title}</li>
            ))}
        </div>
    );
}
