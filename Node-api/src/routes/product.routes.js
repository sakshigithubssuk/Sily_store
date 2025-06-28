const express = require('express');
const router = express.Router();

const productController= require('../controller/productcontroller.js');
const authenticate = require('../middlware/authenticate.js');

router.get("/",productController.getAllProducts);
router.get("/id/:id",productController.findProductById);

module.exports=router;
