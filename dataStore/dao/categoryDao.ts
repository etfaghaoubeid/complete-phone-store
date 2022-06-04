import { Product } from "../../types";

export interface Category {
  getProductByC(): { product: Category[] };
  createProduct(product: Product): Product | undefined;
  getProductById(productId: string): Product | undefined;
  deletProductById(productId: string): void;
}
