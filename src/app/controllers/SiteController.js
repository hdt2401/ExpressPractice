class SiteController {
  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
