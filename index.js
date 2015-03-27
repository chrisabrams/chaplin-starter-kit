require('babel/register')({
  ignore:  /node_modules\/(?!paradigm.*)|(paradigm-gulp-watch)/
})
require('babel/polyfill')

var Server = require('paradigm-server-express')

var server = new Server({
  paths: {
    routes: './server/routes',
    views: './server/views'
  },
  port: 9999
})
