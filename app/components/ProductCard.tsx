import { Product } from "../types/Product";
import AddToCartButton from "../components/AddToCartButton";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { id, title, image, price, description, category } = product;

    return (
        <div
            className="bg-white p-5 border-gray-50 rounded-lg shadow-md"
        >
            <img
                src={image}
                alt={title}
                className="w-32 h-32 object-cover mb-3"
            />
            <h2>{title}</h2>
            <p>{price}€</p>
            <p>{description}</p>
            <p>{category}</p>
            <AddToCartButton product={product} />
        </div>
    );
}
