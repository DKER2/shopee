import { Add, Remove } from "@mui/icons-material"
import { Button } from "@mui/material"

interface QuantitySelectorProps {
    quantity: number,
    setQuantity: (quantity: number) => void
}

const QuantitySelector = ({ quantity, setQuantity }: QuantitySelectorProps) => {
    return (
        <div>
            <Button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>
                <Remove />
            </Button>
            {quantity}
            <Button onClick={() => setQuantity(quantity + 1)} >
                <Add />
            </Button>
        </div>
    )
}

export default QuantitySelector