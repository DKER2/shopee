import { BaseService } from "@/services/base-service";
import type { Product } from "@/types/product";

export default class ProductService extends BaseService {
    static async getProducts(): Promise<Product[]> {
        return this.get("products");
    }

    static async getProduct(id: number): Promise<Product> {
        return this.get(`products/${id}`)
    }
}