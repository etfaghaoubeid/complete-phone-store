import { Product } from "../types";
import { ProductDao } from "./dao/productDao";

export class DataStore implements ProductDao {
  getProductList() {
    return { products: this.products };
  }
  createProduct(product: Product): Product | undefined {
    this.products.push(product);
    return product;
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
