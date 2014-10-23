var BaseView = require('../../../views/base/view')

class FooterView extends BaseView {}

FooterView.prototype.className = 'container component'
FooterView.prototype.container = '#footer'
FooterView.prototype.template  = require('../templates/footer')

module.exports = FooterView
