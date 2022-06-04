import { Product } from "../../types";

export interface ProductDao {
  getProductList(): { product: Product[] };
  createProduct(product: Product): Product | undefined;
  getProductById(productId: string): Product | undefined;
  deletProductById(productId: string): void;
}
