const Phone = require("../models/Phone");
const { mutipleMongooseToArray } = require("../../util/mongoose");
class SiteController {
  // [GET] home page
  index(req, res, next) {
    // Phone.find({}, (err, phones) => {
    //   if (!err) return res.json(phones);
    //   res.status(400).json({ err: "Error" });
    // });
    Phone.find({})
      .then((phones) => {
        // phones = phones.map((item) => item.toObject());
        res.render("home", { phones: mutipleMongooseToArray(phones) });
      })
      .catch(next);
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
