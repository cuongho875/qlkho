import { Router } from "express";
import { exportInventory, importInventory } from "~/controllers/inventory";


const inventoryRoute = Router()
inventoryRoute.post('/importInventory/:id',importInventory)
inventoryRoute.post('/exportInventory/:id',exportInventory)
export default inventoryRoute