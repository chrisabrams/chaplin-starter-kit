var BaseController  = require('./base/controller'),
    FooterComponent = require('../components/footer/index'),
    HeaderComponent = require('../components/header/index'),
    IndexPageView   = require('../views/indexPage'),
    JumbotronComponent = require('../components/jumbotron/index'),
    Log             = require('../../lib/logger'),
    SomeContentComponent = require('../components/somecontent/index')

class IndexController extends BaseController {

  page() {

    this.view = new IndexPageView()

    this.headerComponent = new HeaderComponent()
    this.jumbotronComponent = new JumbotronComponent()
    this.someContentComponent = new SomeContentComponent()
    this.footerComponent = new FooterComponent()

  }

}

module.exports = IndexController
