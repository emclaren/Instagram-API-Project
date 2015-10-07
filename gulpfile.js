var gulp = require('gulp');
var uglify =require('gulp-uglify');
var concat = require('gulp-concat');
var connect= require('gulp-connect');


  // place code for your default task here
gulp.task('compress-js', function() {
	gulp.src('js/*.js')
	.pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));

});


gulp.task('watch', function(){
	gulp.watch(['js/*js'], ['compress-js']);

});


gulp.task('connect', function(){
	connect.server();
});





	// gulp.watch(['css/*css']), ['compress-css']);
// gulp.task('default', ['compress-js', 'watch']);






// gulp.task('compress-css', function(){
// 	gulp.src('*.css')
// 	.pipe(concat('main.min.css'))
// 	.pipe(uglify())
// 	.pipe(gulp.dest('build/css'));
// });



// var browserSync = require('browser-sync').create();

// // Static server
// gulp.task('browser-sync', function() {
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });
// });

// // or...

// gulp.task('browser-sync', function() {
//     browserSync.init({
//         proxy: "yourlocal.dev"
//     });
