import { Product } from "../types";
import { ProductDao } from "./dao/productDao";

export class DataStore implements ProductDao {
  getProductList(): { product: Product[] } {
    return { product: this.products };
  }
  createProduct(product: Product): Product | undefined {
    throw new Error("Method not implemented.");
  }
  getProductById(productId: string): Product | undefined {
    throw new Error("Method not implemented.");
  }
  deletProductById(productId: string): void {
    throw new Error("Method not implemented.");
  }
  products: Product[] = [];
}
export const db = new DataStore();
