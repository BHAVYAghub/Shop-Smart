const express=require('express');
const { requireSignin } = require('../../common-middleware');
const { signup, signin,signout  } = require('../../controller/admin/auth');
const { validateRequest, isRequestValidated, validateSigninRequest, validateSignupRequest } = require('../../validators/auth');
const router= express.Router();



router.post('/admin/signin',validateSigninRequest,isRequestValidated,signin);

router.post('/admin/signup',validateSignupRequest ,isRequestValidated,signup);
 
router.post('/admin/signout', requireSignin,signout)

module.exports=router;
