const express=require('express');
const router=express.Router();
const Category=require('../models/category');
const slugify=require('slugify');
const { addcategory, getCategories } = require('../controller/category');
const { requireSignin, adminMiddleware } = require('../common-middleware');
router.post('/category/create',requireSignin,adminMiddleware,addcategory);
router.get('/category/getcategory',getCategories);
 module.exports=router;