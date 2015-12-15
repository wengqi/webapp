var gulp = require('gulp');
var gulpWebpack = require("gulp-webpack");
var webpackConfig = require("./webpack.config");
var del = require('del');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var fs = require('fs');

var jsPath = './_app/scripts/**/*.js!./_app/scripts/base/**/*.js';
var basePath = './_app/scripts/base/**/*.js';
gulp.task('clean', function(callback) {
  del(['_app/build'], callback);
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch([jsPath, basePath], ['build']);
});

// gulp.task('buildEntry', function(){
//   // gulp.src(jsPath)
//   //     .pipe();
// })

gulp.task('scripts', function(){
    gulp.src(jsPath)
        .pipe(gulpWebpack(webpackConfig))
        .pipe(gulp.dest('./_app/build/'))
        .pipe(livereload());
    gulp.src(basePath)
        .pipe(concat('base.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./_app/build/')) 
        .pipe(livereload());
});

gulp.task('build', ['clean', 'scripts'],function(callback){
    
});

gulp.task('serve', function(callback){
    connect.server({
      port: 9001
    });
});

gulp.task('default',['clean', 'scripts', 'watch', 'serve'], function(){

});
