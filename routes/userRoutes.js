const express = require("express");
const { getdata } = require("../controllers/user");
const router = express.Router();

router.get("/getdata", getdata);

// router.post("/signup", register);

module.exports = router;
