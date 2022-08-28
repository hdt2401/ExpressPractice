const express = require("express");
const siteController = require("../app/controllers/SiteController");
const router = express.Router();

router.get("/search", siteController.search);
router.get("/create", siteController.create);
router.post("/store", siteController.store);
router.get("/:name/edit", siteController.editView);
router.put("/:name", siteController.update);
router.get("/:name", siteController.detail);
router.get("/", siteController.index);

module.exports = router;
