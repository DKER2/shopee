import ProductService from "@/services/product-service"
import type { Product } from "@/types/product"
import { useQuery, useQueryClient } from "@tanstack/react-query"

export const useProducts = () => {
    return useQuery<Product[]>({ queryKey: ["products"], queryFn: () => ProductService.getProducts() })
}

export const useProduct = (id: number) => {
    const queryClient = useQueryClient()
    return useQuery<Product>({
        queryKey: ["products", id], queryFn: () => ProductService.getProduct(id),
        initialData: () => queryClient.getQueryData<Product[]>(["products"])?.find((product) => product.id === id)
    })
}