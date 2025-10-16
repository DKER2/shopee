import ItemPreviewCard from "@/components/ItemPreviewCard";
import ItemFilter from "@/components/shopping/ItemFilter";
import { useProducts } from "@/hooks/useProducts";
import { useMemo } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

const ShoppingPage = () => {
    const { data: products, isLoading, error } = useProducts();
    const [queryParams] = useSearchParams();
    const selectedCategory = queryParams.get("category");

    const filteredProducts = useMemo(() => {
        if (!products) return [];
        if (!selectedCategory) return products;
        return products.filter(product => product.category === selectedCategory);
    }, [products, selectedCategory]);

    return (
        <div className="grid grid-cols-6">
            <div>
                <ItemFilter />
            </div>
            <div className="grid col-span-5 grid-cols-5 gap-4">
                {isLoading && <p>Loading...</p>}
                {error && <p>Error loading products</p>}
                {products && (
                    filteredProducts.map((product) => (
                        <NavLink to={`/product/${product.id}`} key={product.id}>
                            <ItemPreviewCard item={product} />
                        </NavLink>
                    ))
                )}
            </div>
        </div>
    );
};

export default ShoppingPage;