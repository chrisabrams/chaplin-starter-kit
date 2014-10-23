var BaseComponent = require('../base/component'),
    JumbotronView = require('./views/jumbotron')

class JumbotronComponent extends BaseComponent {

  initialize() {

    this.view = new JumbotronView()

  }

}

module.exports = JumbotronComponent
