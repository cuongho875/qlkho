"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_1 = require("../../controllers/product");
const productRoute = (0, express_1.Router)();
productRoute.get('/', product_1.getAllProduct);
productRoute.post('/createProduct', product_1.createProduct);
exports.default = productRoute;
