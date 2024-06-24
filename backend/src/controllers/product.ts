import { PrismaClient } from "@prisma/client"
import { NextFunction, Request, Response } from "express";

const prisma = new PrismaClient()
const getAllProduct = async(req: Request,res:Response,next:NextFunction)=>{
    const products = await prisma.product.findMany()
    res.json(products);
}

const createProduct = async(req: Request,res:Response,next:NextFunction)=>{
    const body = req.body
    const product =  await prisma.product.create({
        data: {
            name:body.name,
            description:body.description?body.description:'',
            price:parseFloat(body.price?body.price:0),
            quantity:parseInt(body.quantity?body.quantity:0),
            unit:body.unit
        }
    })
    res.json(product)
}
const updateProduct = async(req: Request,res:Response,next:NextFunction)=>{
    const id = req.params.id
    const product =  await prisma.product.update({
        where: {
            productId: parseInt(id),
        },
        data: req.body,
      })
    res.json(product)
}
const deleteProduct = async(req: Request,res:Response,next:NextFunction)=>{
    const id = req.params.id
    await prisma.product.delete({
        where: {
            productId: parseInt(id),
        }
      })
      const products = await prisma.product.findMany()
      res.json(products);
}
export {getAllProduct, createProduct, updateProduct,deleteProduct}