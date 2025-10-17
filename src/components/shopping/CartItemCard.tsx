import { useProduct } from "@/hooks/useProducts";
import { useCartStore } from "@/stores/cart-store";
import { Alert, Card, CardContent, CircularProgress } from "@mui/material"
import QuantitySelector from "../QuantitySelector";

const CartItemCard = ({ id }: { id: number }) => {
    const { data: item, isLoading, isError } = useProduct(id);
    const quantity = useCartStore((state) => state.items[id]);
    const setQuantity = useCartStore((state) => state.changeQuantity)

    if (isLoading) {
        return (
            <Card>
                <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 300 }}>
                    <CircularProgress />
                </CardContent>
            </Card>
        );
    }

    if (isError) {
        return <Alert severity="error">Could not fetch product.</Alert>;
    }

    if (!item) {
        return null;
    }

    return (
        <Card>
            <CardContent className="flex justify-between">
                <img src={item.image} alt={item.title} style={{ width: 100 }} />
                <h2 className="text-left h-12">{item.title}</h2>
                <p className="price">${item.price}</p>
                <QuantitySelector quantity={quantity} setQuantity={(quantity) => setQuantity(id, quantity)} />
                <div>${(item.price * quantity).toFixed(2)}</div>
            </CardContent>
        </Card>
    )
}

export default CartItemCard