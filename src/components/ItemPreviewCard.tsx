import type { Product } from "@/types/product";
import { Card, CardContent } from "@mui/material";

const ItemPreviewCard = ({ item }: { item: Product }) => {
    return (
        <Card>
            <CardContent>
                <div className="flex justify-center mb-4">
                    <img src={item.image} alt={item.title} style={{ height: 200 }} />
                </div>
                <div className="flex flex-col items-start">
                    <h2 className="text-left h-12">{item.title.slice(0, 30) + '...'}</h2>
                    <p className="price">${item.price}</p>
                    <p>{item.category}</p>
                </div>
            </CardContent>
        </Card>
    )
}

export default ItemPreviewCard;