import express from "express";
import { getcode,getProductController, addProductController, updateProductController, deleteProductController } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/", getcode);
productRouter.get("/getproducts", getProductController);

productRouter.post("/addproducts", addProductController);

productRouter.put("/updateproducts", updateProductController);

productRouter.post("/deleteproducts", deleteProductController);

export default productRouter;