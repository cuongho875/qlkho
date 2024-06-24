import { PrismaClient } from "@prisma/client"
import { NextFunction, Request, Response } from "express";

const prisma = new PrismaClient()
const importInventory = async (req:Request,res: Response,next:NextFunction)=>{
    const id = req.params.id;
    const currentProduct = (await prisma.product.findUnique({
        where:{
            productId:parseInt(id)
        },
        select:{
            quantity:true
        }
    }))
    
    if(currentProduct){
        const quantity = req.body.quantity;
        const product = await prisma.product.update({
        where:{
            productId:parseInt(id)
        },
        data:{
            quantity:currentProduct.quantity+parseInt(quantity),
            importWarehouses:{
                create:[{
                    quantity:parseInt(quantity),
                }]
            }
        }
        })
        res.json(product)
    }
    else{
        res.status(404).json('not found')
    }
}
const exportInventory = async(req:Request,res: Response,next:NextFunction)=>{
    const id = req.params.id;
    const currentProduct = (await prisma.product.findUnique({
        where:{
            productId:parseInt(id)
        },
        select:{
            quantity:true
        }
    }))
    if(currentProduct){
        const quantity = req.body.quantity;
        const product = await prisma.product.update({
        where:{
            productId:parseInt(id)
        },
        data:{
            quantity:currentProduct.quantity-parseInt(quantity),
            exportWarehouses:{
                create:[{
                    quantity:parseInt(quantity),
                }]
            }
        }
        })
        res.json(product)
    }
    else{
        res.status(404).json('not found')
    }
}

export {importInventory, exportInventory}