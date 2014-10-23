var BaseView = require('../../../views/base/view')

class JumbotronView extends BaseView {}

JumbotronView.prototype.className = 'container component'
JumbotronView.prototype.container = '#main'
JumbotronView.prototype.id        = 'jumbotron'
JumbotronView.prototype.template  = require('../templates/jumbotron')

module.exports = JumbotronView
