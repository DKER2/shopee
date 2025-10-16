import CartItemCard from "@/components/shopping/CartItemCard"
import { useCartStore } from "@/stores/cart-store"

const Cart = () => {
    const itemsInCart = useCartStore((state) => state.items)
    return (
        <div>
            {
                Object.entries(itemsInCart).map(([itemId, _]) => (
                    <CartItemCard key={itemId} id={parseInt(itemId)} />
                ))
            }
        </div>
    )
}

export default Cart