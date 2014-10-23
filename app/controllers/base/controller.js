var Chaplin  = require('chaplin'),
    Log      = require('../../../lib/logger')

var log = new Log({
  dir: 'app/controlers/base/controller',
  file: 'controller.js',
  name: 'BaseController',
  silent: true
})

class BaseController extends Chaplin.Controller {}

module.exports = BaseController
