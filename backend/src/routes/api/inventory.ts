import { Router } from "express";
import { importInventory } from "~/controllers/inventory";


const inventoryRoute = Router()
inventoryRoute.post('/importInventory/:id',importInventory)
export default inventoryRoute