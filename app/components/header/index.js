var BaseComponent = require('../base/component'),
    HeaderView    = require('./views/header')

class HeaderComponent extends BaseComponent {

  initialize() {

    this.view = new HeaderView()

  }

}

module.exports = HeaderComponent
