const newsRouter = require("./news");
const homeRouter = require("./home");
const siteRouter = require("./site");

function route(app) {
  // app.get("/search", (req, res) => {
  //   res.render("search");
  // });
  // app.post("/search", (req, res) => {
  //   console.log(req.body);
  //   res.render("search");
  // });

  // home
  app.use("/home", homeRouter);
  // news
  app.use("/news", newsRouter);
  // site
  app.use("/", siteRouter);
}

module.exports = route;
