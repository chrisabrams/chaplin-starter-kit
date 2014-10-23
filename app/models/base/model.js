var Chaplin = require('chaplin'),
    Log     = require('../../../lib/logger')

var log = new Log({
  dir: 'app/models/base/',
  file: 'model.js',
  name: 'BaseModel',
  silent: true
})

class BaseModel extends Chaplin.Model {}

module.exports = BaseModel
