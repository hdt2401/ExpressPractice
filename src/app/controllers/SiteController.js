const Phone = require("../models/Phone")

class SiteController {
  // [GET] /search
  search(req, res) {
    // res.render("search");
    Phone.find({}, (err, phones)=>{
      if(!err) return res.json(phones)
      res.status(400).json({err:'Error'})
    })
  }
}

module.exports = new SiteController();
