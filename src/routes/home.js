const express = require("express");
const homeController = require("../app/controllers/HomeController");
const router = express.Router();

router.use("/", homeController.index);

module.exports = router;
