var Chaplin = require('chaplin')

class Application extends Chaplin.Application {

  initialize(options) {

    this.initRouter(options.routes, options)
    this.initDispatcher(options)
    this.initLayout(options)
    this.start()

  }

  initLayout(options) {
    this.layout = new Chaplin.Layout({title: options.title || this.title})
  }

}

module.exports = Application
