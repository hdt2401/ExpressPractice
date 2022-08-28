const Phone = require("../models/Phone");
const {
  mutipleMongooseToArray,
  singleMongooseToArray,
} = require("../../util/mongoose");
class SiteController {
  // [GET] home page
  index(req, res, next) {
    Phone.find({})
      .then((phones) => {
        res.render("home", { phones: mutipleMongooseToArray(phones) });
      })
      .catch(next);
  }

  // [GET] create
  create(req, res, next) {
    res.render("createPhone");
  }

  // [POST] store
  store(req, res, next) {
    // res.render("createPhone");
    const formData = req.body;

    const phone = new Phone(formData);
    phone
      .save()
      .then(() => res.redirect("/"))
      .catch(next);
    // res.json(phone);
  }

  // [GET] detail
  detail(req, res, next) {
    Phone.findOne({ name: req.params.name })
      .then((phone) =>
        res.render("detailPhone", { phone: singleMongooseToArray(phone) })
      )
      .catch(next);
  }

  // [GET] edit
  editView(req, res, next) {
    Phone.findOne({ name: req.params.name })
      .then((phone) =>
        res.render("editPhone", { phone: singleMongooseToArray(phone) })
      )
      .catch(next);
  }
  // [PUT] edit
  update(req, res, next) {
    Phone.updateOne({ name: req.params.name }, req.body)
      .then(() => res.redirect("/"))
      .catch(next)

  }
  
  // [DELETE] delete
  delete(req, res, next) {
    Phone.deleteOne({ name: req.params.name })
      .then(() => res.redirect("/"))
      .catch(next)

  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
