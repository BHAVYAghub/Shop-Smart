const express = require("express");
const {
  signup,
  signin,
  resetPassword,
  signout,
  deleteUser,
  fetchUser,
} = require("../controller/auth");

const {
  validateRequest,
  isRequestValidated,
  validateSigninRequest,
  validateSignupRequest,
} = require("../validators/auth");

const { requireSignin } = require("../common-middleware/index");
const router = express.Router();

router.post("/signin", validateSigninRequest, isRequestValidated, signin);

router.post("/signup", validateSignupRequest, isRequestValidated, signup);

router.post("/signout", signout);

router.post("/resetPassword", resetPassword);

router.get("/fetch", requireSignin, fetchUser);

router.delete("/delete", requireSignin, deleteUser);

/*router.post('/profile',requireSignin,(req,res)=>{
    res.status(200).json({
        message:"User profile"
    });

});
*/
module.exports = router;
