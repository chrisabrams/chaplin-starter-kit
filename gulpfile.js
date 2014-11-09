process.on('uncaughtException', console.log)

var browserify    = require('browserify'),
    concat        = require('gulp-concat'),
    fs            = require('fs'),
    glob          = require('glob'),
    gulp          = require('gulp'),
    gutil         = require('gulp-util'),
    hbsfy         = require('hbsfy'),
    livereload    = require('gulp-livereload'),
    minimist      = require('minimist'),
    mocha         = require('gulp-mocha'),
    nib           = require('nib'),
    path          = require('path'),
    runSequence   = require('run-sequence'),
    sh            = require('execSync'),
    source        = require('vinyl-source-stream'),
    sourcemaps    = require('gulp-sourcemaps'),
    stylus        = require('gulp-stylus'),
    to5Browserify = require('6to5-browserify'),
    watchify      = require('watchify')

var argv     = minimist(process.argv.slice(2)),
    dest     = gulp.dest,
    sequence = runSequence,
    src      = gulp.src

var watching = function() {

  if(argv._.indexOf('w') > -1 || argv._.indexOf('watch') > -1 || argv._.indexOf('watchify') > -1) {
    return true
  }

  return false

}

gulp.task('b', function(done) {

  sequence('clean', ['copy', 'scripts-app', 'scripts-vendor', 'styles'], done)

})

gulp.task('clean', function(done) {

  /*
  Note, the gulp-clean task is janky.
  */
  //src('./public/**/*', {read: false}).pipe(clean())

  sh.run('rm -rf public')

  done()

})

gulp.task('copy', ['copy-app-assets', 'copy-vendor-assets'])

gulp.task('copy-app-assets', function() {

  src([
    './app/assets/**/*'
  ])
  .pipe(dest('./public'))

  return src([
    './app/index.hbs'
  ])
  .pipe(dest('./public'))

})

gulp.task('copy-vendor-assets', function() {

  return src([
    './bower_components/dist/fonts/**/*'
  ])
  .pipe(dest('./public/fonts/'))

})

// Example of how this could be used
gulp.task('copy-component-assets', function() {

  return src('components/**/*.svg', {cwd: 'app/'}).pipe(dest('public/components/'))

})

gulp.task('scripts-app', function() {

  // app.js

  var bundler;

  if (watching()) {

    bundler = watchify(browserify('./app', {
      bundleExternal: true,
      cache: {},
      debug: true,
      detectGlobals: false,
      extensions: ['.hbs'],
      fullPaths: true,
      insertGlobals: false,
      packageCache: {}
    }))

  } else {

    bundler = browserify('./app', {
      bundleExternal: false,
      cache: {},
      debug: true,
      detectGlobals: false,
      extensions: ['.hbs'],
      fullPaths: false,
      insertGlobals: false,
      packageCache: {}
    })

  }

  var bundle = function() {

    // Alias map app controllers
    var controllers = glob.sync(path.join(__dirname, './app/controllers/*.js'))

    controllers.forEach(function(controllerPath) {

      var controllerName = controllerPath.replace('.js', '').split('app/')[1]
      bundler.require(controllerPath, {expose: controllerName})

    })

    // Map to files in vendor.js
    if(!watching()) {
      bundler.external('jquery')
      bundler.external('underscore')
      bundler.external('backbone')
      bundler.external('chaplin')
      bundler.external('handlebars')
      bundler.external('hbsfy/runtime')
      bundler.external('moment')
      bundler.external('moment-timezone')
    }

    // Build project
    if(watching()) {

      bundler
        .transform(hbsfy)
        .transform(to5Browserify)
        .bundle()
        .on('error', function() {
          console.log(arguments)
        })
        .pipe(source('app.js'))
        .pipe(gulp.dest('./public/js/'))
        .pipe(livereload())
        .on('end', function() {
          console.log('public/js/app.js created.')
        })

    } else {

      bundler
        .transform(hbsfy)
        .transform(to5Browserify)
        .bundle()
        .on('error', function() {
          console.log(arguments)
        })
        .pipe(source('app.js'))
        .pipe(gulp.dest('./public/js/'))
        .on('end', function() {
          console.log('public/js/app.js created.')
        })

    }
  }

  if(watching()) {
    bundler.on('update', bundle)
  }

  bundle()

})

gulp.task('scripts-vendor', function(done) {

  // vendor.js

  var vendor = browserify({
    cache: {},
    debug: false,
    entries: ['./app/vendor.js'],
    fullPaths: (watching()) ? true : false,
    insertGlobals: false,
    packageCache: {}
  })

  // Expose libs for app.js
  vendor.require('./node_modules/jquery/dist/jquery.js', {expose: 'jquery'})
  vendor.require('./node_modules/underscore/underscore.js', {expose: 'underscore'})
  vendor.require('./node_modules/backbone/backbone.js', {expose: 'backbone'})
  vendor.require('./node_modules/chaplin/chaplin.js', {expose: 'chaplin'})
  vendor.require('./node_modules/handlebars/lib/index.js', {expose: 'handlebars'})
  vendor.require('./node_modules/hbsfy/runtime.js', {expose: 'hbsfy/runtime'})

  vendor
    .bundle()
    .pipe(source('vendor.js'))
    .pipe(gulp.dest('./public/js/'))
    .on('error', function() {
      console.log(arguments)
    })
    .on('end', function() {

      src([
        './public/js/vendor.js',
        './bower_components/bootstrap/dist/js/bootstrap.min.js'
        //'./vendor/**/*.js'
      ])
      .pipe(concat('vendor.js'))
      .pipe(gulp.dest('./public/js/'))
      .on('end', function() {

        console.log('public/js/vendor.js created.')
        done()
      })

    })

})

gulp.task('styles', ['stylus'], function(done) {

  src([
    './bower_components/bootstrap/dist/css/bootstrap.min.css',
    //'./vendor/**/*.css',
    './public/css/app.css'
  ])
  .pipe(concat('app.css'))
  .pipe(gulp.dest('./public/css/'))
  .on('end', function() {

    console.log('public/css/app.css created.')
    done()
  });

})

/*
Note: sourcemaps are inline atm
*/
gulp.task('stylus', function () {

  return src([
    './app/styles/**/_index.styl',
    './app/components/**/styles/_index.styl'
  ])
  .pipe(stylus({
    cache: false,
    import: [path.join(__dirname, './app/styles/vars/_index.styl')],
    sourcemap: {
      basePath: 'public/css',
      inline: true,
      sourceRoot: '/app'
    },
    use: [nib()]
  }))
  /*.pipe(sourcemaps.init({
    loadMaps: true
  }))*/
  .pipe(concat('app.css'))
  /*.pipe(sourcemaps.write('./public/css', {
    includeContent: false,
    sourceRoot: '/app'
  }))*/
  .pipe(dest('./public/css'))

})

gulp.task('t', function () {

  return src([
    './test/helpers/runner.js',
    './test/unit/**/*.js'
  ], {read: false})
  .pipe(mocha({reporter: 'spec'}))

})

gulp.task('w', function() {

  sequence('clean', ['copy', 'scripts-app', 'styles'], function() {

    livereload.listen()

    gulp.watch('app/**/*.styl', ['styles']).on('change', livereload.changed)
    gulp.watch('public/**').on('change', livereload.changed)

  })

})
