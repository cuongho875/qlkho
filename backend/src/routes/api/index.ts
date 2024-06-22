import { Router } from "express";
import { getAllProduct } from "../../controllers/product";
import productRoute from "./product";

const apiRoute = Router();

// apiRoute.get('/',(req,res)=>{
//     res.send("What's up doc ?!");
// })
apiRoute.use('/product',productRoute)
export default apiRoute;