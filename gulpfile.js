
var gulp = require('gulp'); 
    browserSync = require('browser-sync').create();
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify');
 


gulp.task('scss', function () {
  gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
      .pipe(gulp.dest('./build/css'))
      .pipe(minifyCSS())
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest('./build/css'));
});


gulp.task('scripts', function(){
    gulp.src('./js/*.js')
      .pipe(uglify())
      .pipe(rename({
        extname: '.min.js'
      }))
      .pipe(gulp.dest('./build/js'))
});


gulp.task('browser-sync', function() {
   browserSync.init({
       server: {
           baseDir: "./"
       }
   });

  gulp.watch('./scss/**/*.scss',['scss']);
    gulp.watch(["index.html", "js/*.js", "build/css/*.css"]).on('change', browserSync.reload);
});

