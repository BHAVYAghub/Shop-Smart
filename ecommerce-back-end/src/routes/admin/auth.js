const express=require('express');
const { signup, signin, requireSignin } = require('../../controller/admin/auth');
const { validateRequest, isRequestValidated, validateSigninRequest, validateSignupRequest } = require('../../validators/auth');
const router= express.Router();



router.post('/admin/signin',validateSigninRequest,isRequestValidated,signin);

router.post('/admin/signup',validateSignupRequest,isRequestValidated,signup);



module.exports=router;
