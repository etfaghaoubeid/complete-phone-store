import { RequestHandler } from "express";

export type WithError<T> = T & { error: string };

export type ExpressHandler<Req, Res> = RequestHandler<
  string,
  Partial<WithError<Res>>,
  Required<Req>,
  any
>;

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  createdAt: Date;
}
export interface Category {
  categoryName: string;
}

export type CreateProductRequest = Pick<
  Product,
  "name" | "description" | "price"
>;

export type CreateProductResponse = Required<Product>;
