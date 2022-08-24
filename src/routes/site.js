const express = require("express");
const siteController = require("../app/controllers/SiteController");
const router = express.Router();

router.use("/search", siteController.search);

module.exports = router;
