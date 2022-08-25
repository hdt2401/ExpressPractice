const Phone = require("../models/Phone");

class SiteController {
  // [GET] home page
  index(req, res) {
    Phone.find({}, (err, phones) => {
      if (!err) return res.json(phones);
      res.status(400).json({ err: "Error" });
    });
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
