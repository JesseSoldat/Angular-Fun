var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var babel = require('babelify');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var notify  = require('gulp-notify');
var uglify = require('gulp-uglify');
var server  = require('gulp-server-livereload');
var fontAwesome = require('node-font-awesome');
var watch = require('gulp-watch'); // A Better File Watcher

// Set up Foundation
var path = require('path');
var foundationEntry = require.resolve('foundation-sites');
var foundationSCSS = path.join(foundationEntry, '..', '..', '..', 'scss');

var notifyError = function() {
  return plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  });
}

var browserifyError = function(err) {
  notify.onError("Error: <%= error.message %>")(err);
  this.emit('end');
}


gulp.task('sass', function () {
  gulp.src('./sass/main.scss')
    .pipe( notifyError() )
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sass({
      includePaths: require('node-neat').with([fontAwesome.scssPath, foundationSCSS])
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('fonts', function() {
  gulp.src(fontAwesome.fonts)
    .pipe( notifyError() )
    .pipe(gulp.dest('./app/fonts'));
});

gulp.task('normalize', function() {
  gulp.src(require.resolve('normalize.css'))
    .pipe( notifyError() )
    .pipe(gulp.dest('./app/css'));
});

gulp.task('browserify', function() {
  return browserify('./js/main.js', {debug: true})
    .transform(babel)
    .bundle()
    .on('error', browserifyError)
    .pipe(source('./main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    // .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./app/js'));
});

gulp.task('watch', function() {
  watch('./sass/**/*.scss', function () {  
    gulp.start('sass'); 
    
  });
  watch(['./js/**/*.js', './package.json'], function () {
    gulp.start('browserify');
  
  });
  watch('./app/index.html', function () {
    gulp.start('server');
  });
  watch('./js/**/*.js', function () {
    gulp.start('server');
  });
 
});

gulp.task('server', ['default'], function () {
  return gulp.src('app')
    .pipe(server({
      livereload: true
    }));
});

gulp.task('default', ['sass',
                      'fonts',
                      'normalize',
                      'browserify'
                      ]);

gulp.task('start', ['default', 'watch', 'server']);
