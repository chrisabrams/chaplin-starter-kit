var Chaplin = require('chaplin')

class BaseView extends Chaplin.View {

  getTemplateFunction() {

    return this.template

  }


}

BaseView.prototype.autoAttach = true
BaseView.prototype.autoRender = true

module.exports = BaseView
