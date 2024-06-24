import { Router } from "express";
import { getAllProduct } from "../../controllers/product";
import productRoute from "./product";
import inventoryRoute from "./inventory";

const apiRoute = Router();

apiRoute.use('/product',productRoute)
apiRoute.use('/inventory',inventoryRoute)
export default apiRoute;