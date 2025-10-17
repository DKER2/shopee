import CartItemCard from "@/components/shopping/CartItemCard"
import ProductService from "@/services/product-service";
import { useCartStore } from "@/stores/cart-store"
import { useQueries } from "@tanstack/react-query";
import { useMemo } from "react";

const Cart = () => {
    const itemsInCart = useCartStore((state) => state.items);
    const productQueries = useQueries({
        queries: Object.keys(itemsInCart).map((id) => ({
            queryKey: ['products', Number(id)],
            queryFn: () => ProductService.getProduct(Number(id)),
        })),
    });
    const allQueriesLoaded = productQueries.every((query) => query.isSuccess);
    const totalPrice = useMemo(() => {
        if (!allQueriesLoaded) return 0;
        return productQueries.reduce((total, query) => {
            const product = query.data;
            if (product) {
                const quantity = itemsInCart[product.id];
                return total + (product.price * quantity);
            }
            return total;
        }, 0);
    }, [allQueriesLoaded, productQueries, itemsInCart]);



    if (!allQueriesLoaded) return <p>Calculating total...</p>;
    return (
        <div>
            <div className="flex flex-col gap-5">
                {
                    Object.keys(itemsInCart).map((itemId) => (
                        <CartItemCard key={itemId} id={parseInt(itemId)} />
                    ))
                }
            </div>
            <div>
                Total Amount: ${totalPrice}
            </div>
        </div>
    )
}

export default Cart