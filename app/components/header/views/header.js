var BaseView = require('../../../views/base/view')

class HeaderView extends BaseView {}

HeaderView.prototype.className = 'container component'
HeaderView.prototype.container = '#header'
HeaderView.prototype.template  = require('../templates/header')

module.exports = HeaderView
