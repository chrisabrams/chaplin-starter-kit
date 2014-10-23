var BaseComponent = require('../base/component'),
    FooterView    = require('./views/footer')

class FooterComponent extends BaseComponent {

  initialize() {

    this.view = new FooterView()

  }

}

module.exports = FooterComponent
