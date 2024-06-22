import {Request,Response, NextFunction, Router } from "express";
import { createProduct, deleteProduct, getAllProduct, updateProduct } from "../../controllers/product";

const productRoute = Router();

productRoute.get('/',getAllProduct);
productRoute.post('/createProduct',createProduct)
productRoute.post('/updateProduct/:id',updateProduct)
productRoute.post('/deleteProduct/:id',deleteProduct)


export default productRoute;