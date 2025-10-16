export interface CartStoreState {
    items: Record<number, number>
}

export interface CartStoreActions {
    addItem: (productId: number, quantity: number) => void,
    removeItems: (productId: number) => void,
    changeQuantity: (productId: number, newQuantiy: number) => void
}