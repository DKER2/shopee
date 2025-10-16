import CartItemCard from "@/components/shopping/CartItemCard"
import { useCartStore } from "@/stores/cart-store"

const Cart = () => {
    const itemsInCart = useCartStore((state) => state.items)
    return (
        <div>
            {
                Object.keys(itemsInCart).map((itemId) => (
                    <CartItemCard key={itemId} id={parseInt(itemId)} />
                ))
            }
        </div>
    )
}

export default Cart