var Chaplin  = require('chaplin'),
    BaseView = require('./view')

class BaseCollectionView extends Chaplin.CollectionView {}

BaseCollectionView.prototype.animationDuration = 0
BaseCollectionView.prototype.getTemplateFunction = BaseView.prototype.getTemplateFunction
BaseCollectionView.prototype.useCssAnimation = true

module.exports = BaseCollectionView
