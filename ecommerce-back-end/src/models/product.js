const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({

    name:{type:String,required:true,trim:true},
    slug:{type:String,required:true,unique:true} ,
    price:{type:Number,required:true},
    description:{
        type:String,
        required:true,
        trim:true

    },
    offers:{type:Number},
    productPictures:[
        {img:{type:String}}
    ],
    reviews:[
        {
            userId:mongoose.Schema.Types.ObjectId,ref:'User'
        }
    ]


},{timestamps:true});
module.exports=mongoose.model('Product',productSchema);