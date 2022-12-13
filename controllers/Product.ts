import { Request, Response } from "express";

const Product = require('../models/Product')
// @description Get all products
// @route  GET /api/v1/bootcamps
// @access  Public
exports.getProducts = async (req:Request, res:Response) => {
    try {
      const products = await Product.find();
      console.log(products,'products');
      res.status(200).json({ sucess: true, data: products, count: products.length  });
    } catch (err) {
      res.status(400).json({ sucess: false, msg: 'Show all products' });
    }
  };