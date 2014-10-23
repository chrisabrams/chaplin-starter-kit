var BaseView = require('./base/view')

class IndexPageView extends BaseView {}

IndexPageView.prototype.container = 'body'
IndexPageView.prototype.id = 'indexPage'
IndexPageView.prototype.template = require('../templates/indexPage')

module.exports = IndexPageView
