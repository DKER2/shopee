import QuantitySelector from '@/components/QuantitySelector';
import { useProduct } from '@/hooks/useProducts';
import { useCartStore } from '@/stores/cart-store';
import { ArrowBack } from '@mui/icons-material';
import { Button, Card, CardContent } from '@mui/material';
import { useState } from 'react';
import { Navigate, NavLink, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [quantity, setQuantity] = useState(1);
    const addToCart = useCartStore((state) => state.addItem)

    const handleSetQuanity = (newValue: number) => {
        if (newValue < 1) {
            alert("Quantity can't be smaller than 1")
        }
        setQuantity(newValue)
    }

    if (!id) {
        return <Navigate to="/search" />
    }
    const { data: product, isLoading, isError } = useProduct(parseInt(id))

    if (isError) {
        return <div>Error</div>
    }

    if (isLoading) {
        return <div>Loading..</div>
    }

    return (
        <div>
            <div className="text-left mb-5">
                <NavLink to="/search">
                    <ArrowBack />
                </NavLink>
            </div>
            <Card>
                <CardContent className="grid grid-cols-3 gap-10">
                    <img src={product!.image} />
                    <div className="col-span-2 text-left flex flex-col gap-5">
                        <h1 className="font-bold">{product!.title}</h1>
                        <div>{product!.description}</div>
                        <div className="price">${product!.price}</div>
                        <div>
                            <QuantitySelector quantity={quantity} setQuantity={handleSetQuanity} />
                            <Button onClick={() => addToCart(product!.id, quantity)}>
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div >
    );
}

export default ProductDetails;