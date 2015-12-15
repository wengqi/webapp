var gulp = require('gulp');
var gulpWebpack = require("gulp-webpack");
var webpackConfig = require("./webpack.config");
var del = require('del');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var cssmin = require('gulp-minify-css');
var fs = require('fs');

var lessPath = ['./app/styles/**/*.css', './app/modules/**/*.css'];
var jsPath = ['./app/index.js','./app/core/**/*.js','./app/modules/**/*.js'];

gulp.task('clean', function(callback) {
  del(['app/build'], callback);
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(jsPath, ['buildjs']);
  gulp.watch(lessPath, ['buildcss']);
});

gulp.task('buildcss', function(){
    gulp.src(lessPath)
        .pipe(less())
        .pipe(concat('main.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('./app/build/'))
        .pipe(livereload());
});

gulp.task('buildjs', function(){
    gulp.src(jsPath)
        .pipe(gulpWebpack(webpackConfig))
        .pipe(gulp.dest('./app/build/'))
        .pipe(livereload());
});

gulp.task('build', ['clean', 'buildjs', 'buildcss'],function(callback){
    
});

gulp.task('serve', function(callback){
    connect.server({
      port: 9001
    });
});

gulp.task('default',['clean', 'buildjs', 'buildcss', 'watch', 'serve'], function(){

});
