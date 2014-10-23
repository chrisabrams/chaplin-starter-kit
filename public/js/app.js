require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/abrams/Projects/chaplin-starter-kit/app/components/base/component.js":[function(require,module,exports){
"use strict";

var BaseComponent = function() {
  var BaseComponent = function BaseComponent() {

    this.initialize()

  };

  Object.defineProperties(BaseComponent.prototype, {
    initialize: {
      writable: true,

      value: function() {

      }
    }
  });

  return BaseComponent;
}();

module.exports = BaseComponent;


},{}],"/Users/abrams/Projects/chaplin-starter-kit/app/components/footer/index.js":[function(require,module,exports){
"use strict";
var BaseComponent = require('../base/component'),
    FooterView    = require('./views/footer');

var FooterComponent = function(BaseComponent) {
  var FooterComponent = function FooterComponent() {
    BaseComponent.apply(this, arguments);
  };

  FooterComponent.prototype = Object.create(BaseComponent.prototype, {
    constructor: {
      value: FooterComponent,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  FooterComponent.__proto__ = BaseComponent;

  Object.defineProperties(FooterComponent.prototype, {
    initialize: {
      writable: true,

      value: function() {

        this.view = new FooterView()

      }
    }
  });

  return FooterComponent;
}(BaseComponent);

module.exports = FooterComponent;


},{"../base/component":"/Users/abrams/Projects/chaplin-starter-kit/app/components/base/component.js","./views/footer":"/Users/abrams/Projects/chaplin-starter-kit/app/components/footer/views/footer.js"}],"/Users/abrams/Projects/chaplin-starter-kit/app/components/footer/templates/footer.hbs":[function(require,module,exports){
// hbsfy compiled Handlebars template
"use strict";
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <p>&copy; Company 2014</p>\n  </div>\n</div>\n";
  });


},{}],"/Users/abrams/Projects/chaplin-starter-kit/app/components/footer/views/footer.js":[function(require,module,exports){
"use strict";
var BaseView = require('../../../views/base/view');

var FooterView = function(BaseView) {
  var FooterView = function FooterView() {
    BaseView.apply(this, arguments);
  };

  FooterView.prototype = Object.create(BaseView.prototype, {
    constructor: {
      value: FooterView,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  FooterView.__proto__ = BaseView;
  return FooterView;
}(BaseView);

FooterView.prototype.className = 'container component';
FooterView.prototype.container = '#footer';
FooterView.prototype.template  = require('../templates/footer');

module.exports = FooterView;


},{"../../../views/base/view":"/Users/abrams/Projects/chaplin-starter-kit/app/views/base/view.js","../templates/footer":"/Users/abrams/Projects/chaplin-starter-kit/app/components/footer/templates/footer.hbs"}],"/Users/abrams/Projects/chaplin-starter-kit/app/components/header/index.js":[function(require,module,exports){
"use strict";
var BaseComponent = require('../base/component'),
    HeaderView    = require('./views/header');

var HeaderComponent = function(BaseComponent) {
  var HeaderComponent = function HeaderComponent() {
    BaseComponent.apply(this, arguments);
  };

  HeaderComponent.prototype = Object.create(BaseComponent.prototype, {
    constructor: {
      value: HeaderComponent,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  HeaderComponent.__proto__ = BaseComponent;

  Object.defineProperties(HeaderComponent.prototype, {
    initialize: {
      writable: true,

      value: function() {

        this.view = new HeaderView()

      }
    }
  });

  return HeaderComponent;
}(BaseComponent);

module.exports = HeaderComponent;


},{"../base/component":"/Users/abrams/Projects/chaplin-starter-kit/app/components/base/component.js","./views/header":"/Users/abrams/Projects/chaplin-starter-kit/app/components/header/views/header.js"}],"/Users/abrams/Projects/chaplin-starter-kit/app/components/header/templates/header.hbs":[function(require,module,exports){
// hbsfy compiled Handlebars template
"use strict";
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"navbar-header\">\n  <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n    <span class=\"sr-only\">Toggle navigation</span>\n    <span class=\"icon-bar\"></span>\n    <span class=\"icon-bar\"></span>\n    <span class=\"icon-bar\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\">Chaplin Starter Kit</a>\n</div>\n<div class=\"navbar-collapse collapse\">\n  <form class=\"navbar-form navbar-right\">\n    <div class=\"form-group\">\n      <input type=\"text\" placeholder=\"Email\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <input type=\"password\" placeholder=\"Password\" class=\"form-control\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\">Sign in</button>\n  </form>\n</div>\n";
  });


},{}],"/Users/abrams/Projects/chaplin-starter-kit/app/components/header/views/header.js":[function(require,module,exports){
"use strict";
var BaseView = require('../../../views/base/view');

var HeaderView = function(BaseView) {
  var HeaderView = function HeaderView() {
    BaseView.apply(this, arguments);
  };

  HeaderView.prototype = Object.create(BaseView.prototype, {
    constructor: {
      value: HeaderView,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  HeaderView.__proto__ = BaseView;
  return HeaderView;
}(BaseView);

HeaderView.prototype.className = 'container component';
HeaderView.prototype.container = '#header';
HeaderView.prototype.template  = require('../templates/header');

module.exports = HeaderView;


},{"../../../views/base/view":"/Users/abrams/Projects/chaplin-starter-kit/app/views/base/view.js","../templates/header":"/Users/abrams/Projects/chaplin-starter-kit/app/components/header/templates/header.hbs"}],"/Users/abrams/Projects/chaplin-starter-kit/app/components/jumbotron/index.js":[function(require,module,exports){
"use strict";
var BaseComponent = require('../base/component'),
    JumbotronView = require('./views/jumbotron');

var JumbotronComponent = function(BaseComponent) {
  var JumbotronComponent = function JumbotronComponent() {
    BaseComponent.apply(this, arguments);
  };

  JumbotronComponent.prototype = Object.create(BaseComponent.prototype, {
    constructor: {
      value: JumbotronComponent,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  JumbotronComponent.__proto__ = BaseComponent;

  Object.defineProperties(JumbotronComponent.prototype, {
    initialize: {
      writable: true,

      value: function() {

        this.view = new JumbotronView()

      }
    }
  });

  return JumbotronComponent;
}(BaseComponent);

module.exports = JumbotronComponent;


},{"../base/component":"/Users/abrams/Projects/chaplin-starter-kit/app/components/base/component.js","./views/jumbotron":"/Users/abrams/Projects/chaplin-starter-kit/app/components/jumbotron/views/jumbotron.js"}],"/Users/abrams/Projects/chaplin-starter-kit/app/components/jumbotron/templates/jumbotron.hbs":[function(require,module,exports){
// hbsfy compiled Handlebars template
"use strict";
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h1>Hello, world!</h1>\n    <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>\n    <p><a class=\"btn btn-primary btn-lg\" role=\"button\">Learn more &raquo;</a></p>\n  </div>\n</div>\n";
  });


},{}],"/Users/abrams/Projects/chaplin-starter-kit/app/components/jumbotron/views/jumbotron.js":[function(require,module,exports){
"use strict";
var BaseView = require('../../../views/base/view');

var JumbotronView = function(BaseView) {
  var JumbotronView = function JumbotronView() {
    BaseView.apply(this, arguments);
  };

  JumbotronView.prototype = Object.create(BaseView.prototype, {
    constructor: {
      value: JumbotronView,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  JumbotronView.__proto__ = BaseView;
  return JumbotronView;
}(BaseView);

JumbotronView.prototype.className = 'container component';
JumbotronView.prototype.container = '#main';
JumbotronView.prototype.id        = 'jumbotron';
JumbotronView.prototype.template  = require('../templates/jumbotron');

module.exports = JumbotronView;


},{"../../../views/base/view":"/Users/abrams/Projects/chaplin-starter-kit/app/views/base/view.js","../templates/jumbotron":"/Users/abrams/Projects/chaplin-starter-kit/app/components/jumbotron/templates/jumbotron.hbs"}],"/Users/abrams/Projects/chaplin-starter-kit/app/components/somecontent/index.js":[function(require,module,exports){
"use strict";
var BaseComponent = require('../base/component'),
    SomeContentCollection = require('./models/collection'),
    SomeContentView = require('./views/somecontent');

var SomeContentComponent = function(BaseComponent) {
  var SomeContentComponent = function SomeContentComponent() {
    BaseComponent.apply(this, arguments);
  };

  SomeContentComponent.prototype = Object.create(BaseComponent.prototype, {
    constructor: {
      value: SomeContentComponent,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  SomeContentComponent.__proto__ = BaseComponent;

  Object.defineProperties(SomeContentComponent.prototype, {
    initialize: {
      writable: true,

      value: function() {
        var _this = this

        this.collection = new SomeContentCollection()

        this.collection.fetch().then( function() {

          _this.view = new SomeContentView({
            collection: _this.collection
          })

        })

      }
    }
  });

  return SomeContentComponent;
}(BaseComponent);

module.exports = SomeContentComponent;


},{"../base/component":"/Users/abrams/Projects/chaplin-starter-kit/app/components/base/component.js","./models/collection":"/Users/abrams/Projects/chaplin-starter-kit/app/components/somecontent/models/collection.js","./views/somecontent":"/Users/abrams/Projects/chaplin-starter-kit/app/components/somecontent/views/somecontent.js"}],"/Users/abrams/Projects/chaplin-starter-kit/app/components/somecontent/models/collection.js":[function(require,module,exports){
"use strict";
var BaseCollection = require('../../../models/base/collection');

var SomeContentCollection = function(BaseCollection) {
  var SomeContentCollection = function SomeContentCollection() {
    BaseCollection.apply(this, arguments);
  };

  SomeContentCollection.prototype = Object.create(BaseCollection.prototype, {
    constructor: {
      value: SomeContentCollection,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  SomeContentCollection.__proto__ = BaseCollection;

  Object.defineProperties(SomeContentCollection.prototype, {
    fetch: {
      writable: true,

      value: function() {
        var _this = this

        return new Promise( function(resolve, reject) {

          _this.set([
            {
              heading: 'Heading 1',
              content: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.'
            },
            {
              heading: 'Heading 2',
              content: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.'
            },
            {
              heading: 'Heading 3',
              content: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.'
            }
          ])

          resolve()

        })

      }
    }
  });

  return SomeContentCollection;
}(BaseCollection);

module.exports = SomeContentCollection;


},{"../../../models/base/collection":"/Users/abrams/Projects/chaplin-starter-kit/app/models/base/collection.js"}],"/Users/abrams/Projects/chaplin-starter-kit/app/components/somecontent/templates/somecontent.hbs":[function(require,module,exports){
// hbsfy compiled Handlebars template
"use strict";
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <div class=\"col-md-4\">\n    <h2>"
    + escapeExpression(((stack1 = (depth0 && depth0.heading)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h2>\n    <p>"
    + escapeExpression(((stack1 = (depth0 && depth0.content)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n    <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n  </div>\n  ";
  return buffer;
  }

  buffer += "<div class=\"row\">\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });


},{}],"/Users/abrams/Projects/chaplin-starter-kit/app/components/somecontent/views/somecontent.js":[function(require,module,exports){
"use strict";
var BaseView = require('../../../views/base/view');

var SomeContentView = function(BaseView) {
  var SomeContentView = function SomeContentView() {
    BaseView.apply(this, arguments);
  };

  SomeContentView.prototype = Object.create(BaseView.prototype, {
    constructor: {
      value: SomeContentView,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  SomeContentView.__proto__ = BaseView;
  return SomeContentView;
}(BaseView);

SomeContentView.prototype.className = 'container component';
SomeContentView.prototype.container = '#main';
SomeContentView.prototype.id        = 'someContent';
SomeContentView.prototype.template  = require('../templates/somecontent');

module.exports = SomeContentView;


},{"../../../views/base/view":"/Users/abrams/Projects/chaplin-starter-kit/app/views/base/view.js","../templates/somecontent":"/Users/abrams/Projects/chaplin-starter-kit/app/components/somecontent/templates/somecontent.hbs"}],"controllers/base/controller":[function(require,module,exports){
module.exports=require('GqsQym');
},{}],"GqsQym":[function(require,module,exports){
"use strict";
var Chaplin  = require('chaplin'),
    Log      = require('../../../lib/logger');

var log = new Log({
  dir: 'app/controlers/base/controller',
  file: 'controller.js',
  name: 'BaseController',
  silent: true
});

var BaseController = function(Chaplin) {
  var BaseController = function BaseController() {
    Chaplin.Controller.apply(this, arguments);
  };

  BaseController.prototype = Object.create(Chaplin.Controller.prototype, {
    constructor: {
      value: BaseController,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  BaseController.__proto__ = Chaplin.Controller;
  return BaseController;
}(Chaplin);

module.exports = BaseController;


},{"../../../lib/logger":"/Users/abrams/Projects/chaplin-starter-kit/lib/logger.js"}],"0jJT/S":[function(require,module,exports){
"use strict";
var BaseController  = require('./base/controller'),
    FooterComponent = require('../components/footer/index'),
    HeaderComponent = require('../components/header/index'),
    IndexPageView   = require('../views/indexPage'),
    JumbotronComponent = require('../components/jumbotron/index'),
    Log             = require('../../lib/logger'),
    SomeContentComponent = require('../components/somecontent/index');

var IndexController = function(BaseController) {
  var IndexController = function IndexController() {
    BaseController.apply(this, arguments);
  };

  IndexController.prototype = Object.create(BaseController.prototype, {
    constructor: {
      value: IndexController,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  IndexController.__proto__ = BaseController;

  Object.defineProperties(IndexController.prototype, {
    page: {
      writable: true,

      value: function() {

        this.view = new IndexPageView()

        this.headerComponent = new HeaderComponent()
        this.jumbotronComponent = new JumbotronComponent()
        this.someContentComponent = new SomeContentComponent()
        this.footerComponent = new FooterComponent()

      }
    }
  });

  return IndexController;
}(BaseController);

module.exports = IndexController;


},{"../../lib/logger":"/Users/abrams/Projects/chaplin-starter-kit/lib/logger.js","../components/footer/index":"/Users/abrams/Projects/chaplin-starter-kit/app/components/footer/index.js","../components/header/index":"/Users/abrams/Projects/chaplin-starter-kit/app/components/header/index.js","../components/jumbotron/index":"/Users/abrams/Projects/chaplin-starter-kit/app/components/jumbotron/index.js","../components/somecontent/index":"/Users/abrams/Projects/chaplin-starter-kit/app/components/somecontent/index.js","../views/indexPage":"/Users/abrams/Projects/chaplin-starter-kit/app/views/indexPage.js","./base/controller":"GqsQym"}],"controllers/index":[function(require,module,exports){
module.exports=require('0jJT/S');
},{}],"/Users/abrams/Projects/chaplin-starter-kit/app/index.js":[function(require,module,exports){
"use strict";
var $          = require('jquery');

var Backbone   = require('backbone');
Backbone.$     = $;

var Chaplin    = require('chaplin'),
    Handlebars = require('hbsfy/runtime'),
    Log        = require('../lib/logger');

// Set to true if you want to turn off all the logs for the app
Log.prototype.silent = false;

$(function() {

  return new Chaplin.Application({
    title: 'Chaplin Starter Kit',
    controllerSuffix: '',
    routes: require ('./routes')
  })

});


},{"../lib/logger":"/Users/abrams/Projects/chaplin-starter-kit/lib/logger.js","./routes":"/Users/abrams/Projects/chaplin-starter-kit/app/routes.js"}],"/Users/abrams/Projects/chaplin-starter-kit/app/models/base/collection.js":[function(require,module,exports){
"use strict";
var BaseModel = require('./model'),
    Chaplin   = require('chaplin'),
    Log       = require('../../../lib/logger');

var log = new Log({
  dir: 'app/models/base/',
  file: 'collection.js',
  name: 'BaseCollection',
  silent: true
});

var BaseCollection = function(Chaplin) {
  var BaseCollection = function BaseCollection() {
    Chaplin.Collection.apply(this, arguments);
  };

  BaseCollection.prototype = Object.create(Chaplin.Collection.prototype, {
    constructor: {
      value: BaseCollection,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  BaseCollection.__proto__ = Chaplin.Collection;
  return BaseCollection;
}(Chaplin);

BaseCollection.prototype.model = BaseModel;

module.exports = BaseCollection;


},{"../../../lib/logger":"/Users/abrams/Projects/chaplin-starter-kit/lib/logger.js","./model":"/Users/abrams/Projects/chaplin-starter-kit/app/models/base/model.js"}],"/Users/abrams/Projects/chaplin-starter-kit/app/models/base/model.js":[function(require,module,exports){
"use strict";
var Chaplin = require('chaplin'),
    Log     = require('../../../lib/logger');

var log = new Log({
  dir: 'app/models/base/',
  file: 'model.js',
  name: 'BaseModel',
  silent: true
});

var BaseModel = function(Chaplin) {
  var BaseModel = function BaseModel() {
    Chaplin.Model.apply(this, arguments);
  };

  BaseModel.prototype = Object.create(Chaplin.Model.prototype, {
    constructor: {
      value: BaseModel,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  BaseModel.__proto__ = Chaplin.Model;
  return BaseModel;
}(Chaplin);

module.exports = BaseModel;


},{"../../../lib/logger":"/Users/abrams/Projects/chaplin-starter-kit/lib/logger.js"}],"/Users/abrams/Projects/chaplin-starter-kit/app/routes.js":[function(require,module,exports){
"use strict";
module.exports = function(match) {

  match('', 'index#page')

}


},{}],"/Users/abrams/Projects/chaplin-starter-kit/app/templates/indexPage.hbs":[function(require,module,exports){
// hbsfy compiled Handlebars template
"use strict";
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header id=\"header\" class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\"></header>\n\n<div id=\"main\"></div>\n\n<footer id=\"footer\"></footer>\n";
  });


},{}],"/Users/abrams/Projects/chaplin-starter-kit/app/vendor.js":[function(require,module,exports){
// To make Bootstrap and jQuery plugins happy
"use strict";
window.$ = window.jQuery = require('jquery');


},{}],"/Users/abrams/Projects/chaplin-starter-kit/app/views/base/collection_view.js":[function(require,module,exports){
"use strict";
var Chaplin  = require('chaplin'),
    BaseView = require('./view');

var BaseCollectionView = function(Chaplin) {
  var BaseCollectionView = function BaseCollectionView() {
    Chaplin.CollectionView.apply(this, arguments);
  };

  BaseCollectionView.prototype = Object.create(Chaplin.CollectionView.prototype, {
    constructor: {
      value: BaseCollectionView,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  BaseCollectionView.__proto__ = Chaplin.CollectionView;
  return BaseCollectionView;
}(Chaplin);

BaseCollectionView.prototype.animationDuration = 0;
BaseCollectionView.prototype.getTemplateFunction = BaseView.prototype.getTemplateFunction;
BaseCollectionView.prototype.useCssAnimation = true;

module.exports = BaseCollectionView;


},{"./view":"/Users/abrams/Projects/chaplin-starter-kit/app/views/base/view.js"}],"/Users/abrams/Projects/chaplin-starter-kit/app/views/base/view.js":[function(require,module,exports){
"use strict";
var Chaplin = require('chaplin');

var BaseView = function(Chaplin) {
  var BaseView = function BaseView() {
    Chaplin.View.apply(this, arguments);
  };

  BaseView.prototype = Object.create(Chaplin.View.prototype, {
    constructor: {
      value: BaseView,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  BaseView.__proto__ = Chaplin.View;

  Object.defineProperties(BaseView.prototype, {
    getTemplateFunction: {
      writable: true,

      value: function() {

        return this.template

      }
    }
  });

  return BaseView;
}(Chaplin);

BaseView.prototype.autoAttach = true;
BaseView.prototype.autoRender = true;

module.exports = BaseView;


},{}],"/Users/abrams/Projects/chaplin-starter-kit/app/views/indexPage.js":[function(require,module,exports){
"use strict";
var BaseView = require('./base/view');

var IndexPageView = function(BaseView) {
  var IndexPageView = function IndexPageView() {
    BaseView.apply(this, arguments);
  };

  IndexPageView.prototype = Object.create(BaseView.prototype, {
    constructor: {
      value: IndexPageView,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  IndexPageView.__proto__ = BaseView;
  return IndexPageView;
}(BaseView);

IndexPageView.prototype.container = 'body';
IndexPageView.prototype.id = 'indexPage';
IndexPageView.prototype.template = require('../templates/indexPage');

module.exports = IndexPageView;


},{"../templates/indexPage":"/Users/abrams/Projects/chaplin-starter-kit/app/templates/indexPage.hbs","./base/view":"/Users/abrams/Projects/chaplin-starter-kit/app/views/base/view.js"}],"/Users/abrams/Projects/chaplin-starter-kit/lib/logger.js":[function(require,module,exports){
"use strict";

var Log = function() {
  var Log = function Log(options) {
    if(this.silent) return

    if(typeof options == 'object') {

      if(typeof options.dir == 'string') {
        this.dir = options.dir
      }

      if(typeof options.name == 'string') {
        this.name = options.name
      }

      if(typeof options.silent == 'boolean') {
        this.silent = options.silent
      }

    }

    this._times = {}
  };

  Object.defineProperties(Log.prototype, {
    debug: {
      writable: true,

      value: function() {
        if(this.silent) return

        var args = Array.prototype.slice.call(arguments)
        args = this.prepareArgs(args)

        console.log.apply(this, args)

      }
    },

    error: {
      writable: true,

      value: function() {
        if(this.silent) return

        var args = Array.prototype.slice.call(arguments)
        args = this.prepareArgs(args)

        console.error.apply(this, args)

      }
    },

    getTimeDuration: {
      writable: true,

      value: function(label) {
        if(this.silent) return

        if (!this._times[label]) {
          this.error('No such label: ', label)
          return
        }

        if (!this._times[label].duration) {
          this.error('Label has not called timeEnd(): ', label)
          return
        }

        return this._times[label].duration

      }
    },

    info: {
      writable: true,

      value: function() {
        if(this.silent) return

        var args = Array.prototype.slice.call(arguments)
        args = this.prepareArgs(args)

        console.info.apply(console, args)

      }
    },

    log: {
      writable: true,

      value: function() {
        if(this.silent) return

        var args = Array.prototype.slice.call(arguments)
        args = this.prepareArgs(args)

        console.log.apply(this, args)

      }
    },

    prepareArgs: {
      writable: true,

      value: function(args) {
        if(this.silent) return

        if(this.name) {
          args.unshift(this.name)
        }

        return args
      }
    },

    time: {
      writable: true,

      value: function(label) {
        if(this.silent) return

        this._times[label] = {
          start: Date.now()
        }
      }
    },

    timeEnd: {
      writable: true,

      value: function(label) {
        if(this.silent) return

        var start = this._times[label].start

        if (!this._times[label]) {
          this.error('No such label: ', label)
          return
        }

        var end = Date.now()
        this._times[label].end = end

        var duration = end - start
        this._times[label].duration = duration
        this.log(label, duration + 'ms')
      }
    }
  });

  return Log;
}();

Log.prototype.silent = false;

module.exports = Log;


},{}]},{},["/Users/abrams/Projects/chaplin-starter-kit/app/components/base/component.js","/Users/abrams/Projects/chaplin-starter-kit/app/components/footer/index.js","/Users/abrams/Projects/chaplin-starter-kit/app/components/footer/views/footer.js","/Users/abrams/Projects/chaplin-starter-kit/app/components/header/index.js","/Users/abrams/Projects/chaplin-starter-kit/app/components/header/views/header.js","/Users/abrams/Projects/chaplin-starter-kit/app/components/jumbotron/index.js","/Users/abrams/Projects/chaplin-starter-kit/app/components/jumbotron/views/jumbotron.js","/Users/abrams/Projects/chaplin-starter-kit/app/components/somecontent/index.js","/Users/abrams/Projects/chaplin-starter-kit/app/components/somecontent/models/collection.js","/Users/abrams/Projects/chaplin-starter-kit/app/components/somecontent/views/somecontent.js","GqsQym","0jJT/S","/Users/abrams/Projects/chaplin-starter-kit/app/index.js","/Users/abrams/Projects/chaplin-starter-kit/app/models/base/collection.js","/Users/abrams/Projects/chaplin-starter-kit/app/models/base/model.js","/Users/abrams/Projects/chaplin-starter-kit/app/routes.js","/Users/abrams/Projects/chaplin-starter-kit/app/vendor.js","/Users/abrams/Projects/chaplin-starter-kit/app/views/base/collection_view.js","/Users/abrams/Projects/chaplin-starter-kit/app/views/base/view.js","/Users/abrams/Projects/chaplin-starter-kit/app/views/indexPage.js"])