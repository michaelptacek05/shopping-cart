import { Product } from "../types/Product";
import AddToCartButton from "../components/AddToCartButton";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { title, image, price, description, category } = product;

    return (
        <div className="flex flex-col bg-white p-4 md:p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">            
            <div className="w-full aspect-square bg-white mb-4 flex items-center justify-center overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain mix-blend-multiply" 
                />
            </div>

            <div className="flex flex-col flex-grow text-left">
                
                <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    {category}
                </p>

                <h2 className="text-sm md:text-base font-bold text-gray-800 line-clamp-1 mb-1">
                    {title}
                </h2>

                {description && (
                    <p className="text-xs text-gray-500 line-clamp-2 mb-3">
                        {description}
                    </p>
                )}

                <div className="flex justify-between items-center mt-auto mb-4">
                    <p className="text-base md:text-lg font-extrabold text-gray-900">
                        ${price}
                    </p>
                </div>

                <div className="w-full mt-auto">
                    <AddToCartButton product={product} />
                </div>
            </div>
        </div>
    );
}