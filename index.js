require('6to5/register')
require('6to5/polyfill')

var bodyParser   = require('body-parser'),
    express      = require('express'),
    favicon      = require('serve-favicon'),
    glob         = require('glob'),
    fs           = require('fs'),
    hbs          = require('hbs'),
    Log          = require('./lib/logger'),
    morgan       = require('morgan'),
    path         = require('path'),
    port         = 9999,
    serveStatic  = require('serve-static')

var argv = require('minimist')(process.argv.slice(2))

var server = express()

server.set('views', path.join(__dirname, '/public'))
server.set('view engine', 'hbs')
server.engine('hbs', hbs.__express)
server.use(serveStatic(__dirname + '/public'))

// Janky middleware to stop express from catching media files that are missing
server.use(function(req, res, next) {

  var dontServe = [
    '.css',
    '.ico',
    '.js'
  ]

  dontServe.forEach(function(item) {

    if(req.originalUrl.indexOf(item) > 0) {
      console.error("404:", req.originalUrl)
      res.status(404).send()
    }

  })

  next()

})
server.use(bodyParser.json())
server.use(morgan('combined'))
//server.use(favicon(__dirname + '/public/favicon.ico')) <-- uncomment when you have a favicon

// Cache express endpoints for duration of node process while developing
if((typeof process.env.NODE_ENV == 'undefined' || process.env.NODE_ENV == 'development') && argv.cache) {
  console.log("Route caching enabled.")

  var routeCache = require('route-cache')

  // Cache endpoints for a day
  server.use(routeCache.cacheSeconds(86400))
}

require('./server/routes')(server)

server.listen(port)

console.log('Express server instance listening on port ' + port)
