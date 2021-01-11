const express=require('express');
const router=express.Router();
const Category=require('../models/category');
const slugify=require('slugify');
const { addcategory, getCategories } = require('../controller/category');
const { requireSignin, adminMiddleware } = require('../common-middleware');
const multer=require('multer');

const shortid=require('shortid');

const path=require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.join(path.dirname(__dirname),'uploads') )
    },
    filename: function (req, file, cb) { 
      cb(null, shortid.generate() + '-' + file.originalname)
    }
  });

  const upload=multer({storage });






router.post('/category/create',requireSignin,adminMiddleware,upload.single('categoryImage'),addcategory);
router.get('/category/getcategory',getCategories);
 module.exports=router;