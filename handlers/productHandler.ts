import { ProductListRequest, ProductListResponse } from "../api";
import { db } from "../dataStore";
import { ExpressHandler } from "../types";

export const getProudctList: ExpressHandler<
  ProductListRequest,
  ProductListResponse
> = async (req, res) => {
  return res.send(db.getProductList());
};
