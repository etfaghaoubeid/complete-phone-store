import { RequestHandler } from "express";

export type WithError<T> = T & { error: string };

export type ExpressHandler<Req, Res> = RequestHandler<
  string,
  Partial<Req>,
  Partial<WithError<Res>>,
  any
>;

export interface Product {
  id: string;
  name: string;
  price: number;
}
export interface Category {
  categoryName: string;
}
