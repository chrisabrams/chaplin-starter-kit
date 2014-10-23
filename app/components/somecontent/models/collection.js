var BaseCollection = require('../../../models/base/collection')

class SomeContentCollection extends BaseCollection {

  fetch() {
    var _this = this

    return new Promise( (resolve, reject) => {

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

module.exports = SomeContentCollection
