const express = require("express");
// const { requireSignin } = require('../../common-middleware');
const router = express.Router();
const { initialData } = require("../../controller/admin/initialData");

router.post("/initialdata", initialData);

module.exports = router;
