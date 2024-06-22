"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_1 = require("../../controllers/product");
const apiRoute = (0, express_1.Router)();
apiRoute.get('/', (req, res) => {
    res.send("What's up doc ?!");
});
apiRoute.use('/product', product_1.getAllProduct);
exports.default = apiRoute;
