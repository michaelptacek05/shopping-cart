import { getProducts } from "@/lib/api";

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <div>
            <h1>Naše produkty</h1>
            <div className="flex flex-wrap gap-5">
                {products.map((product) => (
                    <>
                        <div className="bg-white p-5 border-gray-50 rounded-lg shadow-md" key={product.id}>
                            <img src={product.image} alt={product.title} className="w-32 h-32 object-cover mb-3" />
                            <h2>{product.title}</h2>
                            <p>{product.price}€</p>
                            <p>{product.description}</p>
                            <p>{product.category}</p> 
                            <button>Přidat do košíku</button>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}

