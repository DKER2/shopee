import { useProduct } from "@/hooks/useProducts";
import { useCartStore } from "@/stores/cart-store";
import { Alert, Card, CardContent, CircularProgress } from "@mui/material"
import { useShallow } from "zustand/shallow";


const CartItemCard = ({ id }: { id: number }) => {
    const { data: item, isLoading, isError } = useProduct(id);
    const quantity = useCartStore(useShallow((state) => state.items[id]))

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
            <CardContent>
                <div className="flex justify-center mb-4">
                    <img src={item.image} alt={item.title} style={{ height: 200 }} />
                </div>
                <div className="flex flex-col items-start">
                    <h2 className="text-left h-12">{item.title.slice(0, 30) + '...'}</h2>
                    <p className="price">${item.price}</p>
                    <div>{quantity}</div>
                </div>
            </CardContent>
        </Card>
    )
}

export default CartItemCard