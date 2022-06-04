import express from "express";
const app = express();
import { createProduct, getProudctList } from "./handlers/productHandler";
app.use(express.json());
app.get("/v1/productList", getProudctList);
app.post("/v1/createProduct", createProduct);

app.listen(3333, () => {
  console.log("app runing on port 3333");
});
