import { ProductListRequest, ProductListResponse } from "../api";
import crypto from "crypto";
import { db } from "../dataStore";
import {
  CreateProductRequest,
  CreateProductResponse,
  ExpressHandler,
  Product,
} from "../types";

export const getProudctList: ExpressHandler<
  ProductListRequest,
  ProductListResponse
> = async (req, res) => {
  return res.send(db.getProductList());
};
export const createProduct: ExpressHandler<
  CreateProductRequest,
  CreateProductResponse
> = async (req, res) => {
  const { description, name, price } = req.body;
  const newProduct: Product = {
    id: crypto.randomUUID(),
    createdAt: new Date(),
    description: description,
    name: name,
    price: price,
  };
  db.createProduct(newProduct);

  return res.status(200).send(newProduct);
};
