import { useCartStore } from "@/stores/cart-store"
import { ShoppingCartCheckout } from "@mui/icons-material"
import { useMemo } from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
    const cart = useCartStore((state) => state.items)
    const cartCount = useMemo(
        () => Object.values(cart).reduce((sum, v) => sum + v, 0),
        [cart])
    return (
        <nav className="h-20 fixed bg-orange-500 w-full">
            <div className="container mx-auto flex justify-between items-center h-full">
                <NavLink to="/search" className="flex items-center"><img src="/logo.png" style={{ height: 50 }} />Shopee</NavLink>
                <NavLink to="/cart"><ShoppingCartCheckout />{cartCount}</NavLink>
            </div>
        </nav>
    )
}


export default Header