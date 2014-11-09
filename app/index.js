var $          = require('jquery')

var Backbone   = require('backbone')
Backbone.$     = $

var Application = require('./application'),
    Handlebars  = require('hbsfy/runtime'),
    Log         = require('../lib/logger')

// Set to true if you want to turn off all the logs for the app
Log.prototype.silent = false

$(function() {

  return new Application({
    title: 'Chaplin Starter Kit',
    controllerSuffix: '',
    routes: require ('./routes')
  })

})
