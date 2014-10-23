var BaseComponent = require('../base/component'),
    SomeContentCollection = require('./models/collection'),
    SomeContentView = require('./views/somecontent')

class SomeContentComponent extends BaseComponent {

  initialize() {
    var _this = this

    this.collection = new SomeContentCollection()

    this.collection.fetch().then( () => {

      _this.view = new SomeContentView({
        collection: _this.collection
      })

    })

  }

}

module.exports = SomeContentComponent
