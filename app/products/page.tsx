import { getProducts } from "@/lib/api";
import ProductCard from "../components/ProductCard";
import { Product } from "../types/Product";

export default async function ProductsPage() {
    const products: Product[] = await getProducts();
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
