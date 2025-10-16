import type { CartStoreState, CartStoreActions } from '@/types/cart'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create<CartStoreState & CartStoreActions>()(
    persist(
        (set) => ({
            items: {},
            addItem: (productId, quantity) => {
                set((state) => ({
                    items: {
                        ...state.items,
                        [productId]: (state.items[productId] || 0) + quantity
                    }
                }))
            },
            removeItems: (productId) => {
                set((state) => {
                    const { [productId]: _, ...remainingItems } = state.items;
                    return { items: remainingItems };
                });
            },
            changeQuantity: (productId, quantity) => {
                set((state) => ({
                    items: {
                        ...state.items,
                        [productId]: quantity
                    }
                }))
            }
        }),
        { name: "shopee-cart" }
    )
)