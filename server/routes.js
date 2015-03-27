var Log = require('../lib/logger'),
    log = new Log({
      dir: __dirname,
      name: 'routes',
      silent: true
    })

module.exports = (server) => {

  server.get('', (req, res, next) => {

    var templateData = {
      layout: false
    }

    return res.render('index', templateData)

  })

  server.get('*', (req, res) => {

    return res.status(404).send()

  })


}
