const express = require("express");
const newsController = require("../app/controllers/NewsController");
const router = express.Router();

router.get("/:slug", newsController.detail);
router.get("/", newsController.index);

module.exports = router;
