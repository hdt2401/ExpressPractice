const newsRouter = require('./news')

function route(app) {
  app.get('/', (req, res) => {
    res.render('home')
  })
  app.get('/search', (req, res) => {
    res.render('search')
  })
  app.post('/search', (req, res) => {
    console.log(req.body)
    res.render('search')
  })

  // news
  app.use('/news', newsRouter)
}

module.exports = route;