var BaseModel = require('./model'),
    Chaplin   = require('chaplin'),
    Log       = require('../../../lib/logger')

var log = new Log({
  dir: 'app/models/base/',
  file: 'collection.js',
  name: 'BaseCollection',
  silent: true
})

class BaseCollection extends Chaplin.Collection {}

BaseCollection.prototype.model = BaseModel

module.exports = BaseCollection
