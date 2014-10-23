var BaseView = require('../../../views/base/view')

class SomeContentView extends BaseView {}

SomeContentView.prototype.className = 'container component'
SomeContentView.prototype.container = '#main'
SomeContentView.prototype.id        = 'someContent'
SomeContentView.prototype.template  = require('../templates/somecontent')

module.exports = SomeContentView
